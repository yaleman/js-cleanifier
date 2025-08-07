use anyhow::Result;
use tracing::debug;
use tree_sitter::StreamingIterator;
use tree_sitter::{Node, Parser, Query, QueryCursor, Tree};

/// The main handler which takes source code as input
pub fn tree_walker(src: &str) -> Result<String> {
    let mut parser = Parser::new();
    let language = tree_sitter_javascript::LANGUAGE;
    parser
        .set_language(&language.into())
        .map_err(|e| anyhow::anyhow!("Failed to set language: {}", e))?;

    let tree = parser
        .parse(src, None)
        .ok_or_else(|| anyhow::anyhow!("Failed to parse JavaScript"))?;

    // Use incremental parsing approach instead of string replacements
    apply_tree_transformations(src, &tree, &mut parser)
}

/// Apply transformations by reconstructing source from the AST
fn apply_tree_transformations(src: &str, tree: &Tree, _parser: &mut Parser) -> Result<String> {
    // Find all nodes that need transformation
    let transformations = find_transformations(tree, src.as_bytes())?;

    if transformations.is_empty() {
        return Ok(src.to_string());
    }

    debug!("Found {} transformations to apply", transformations.len());

    // Reconstruct the source by walking the tree and applying transformations
    let mut output = String::new();
    reconstruct_source_with_transformations(
        tree.root_node(),
        src.as_bytes(),
        &transformations,
        &mut output,
    )?;

    Ok(output)
}

/// Find all transformations needed without applying them yet
#[derive(Debug)]
struct Transformation {
    node_id: usize,
    transformation_type: TransformationType,
    replacement: String,
}

#[derive(Debug)]
enum TransformationType {
    /// Replace the entire node content
    ReplaceNode,
    /// Insert content after the node
    InsertAfter,
}

fn find_transformations(tree: &Tree, source: &[u8]) -> Result<Vec<Transformation>> {
    // Find hex string transformations
    let hex_transformations = find_hex_transformations(tree, source)?;

    // Find Uint8Array transformations
    let uint8_transformations = find_uint8_transformations(tree, source)?;

    // Combine all transformations functionally
    Ok([hex_transformations, uint8_transformations]
        .into_iter()
        .flatten()
        .collect())
}

fn find_hex_transformations(tree: &Tree, source: &[u8]) -> Result<Vec<Transformation>> {
    let query_str = r#"
        (string) @string
        (#match? @string "\\\\x[0-9a-fA-F]{2}")
    "#;

    let language = tree_sitter_javascript::LANGUAGE;
    let query = Query::new(&language.into(), query_str)
        .map_err(|e| anyhow::anyhow!("Failed to create hex query: {}", e))?;

    let mut cursor = QueryCursor::new();
    let mut matches = cursor.matches(&query, tree.root_node(), source);
    let mut transformations = Vec::new();

    while let Some(query_match) = matches.next() {
        for capture in query_match.captures {
            let node = capture.node;
            let text = node
                .utf8_text(source)
                .map_err(|e| anyhow::anyhow!("Failed to get node text: {}", e))?;

            if let Some(decoded) = decode_hex_string(text) {
                debug!("Found hex string to transform: {} -> {}", text, decoded);
                transformations.push(Transformation {
                    node_id: node.id(),
                    transformation_type: TransformationType::ReplaceNode,
                    replacement: decoded,
                });
            }
        }
    }

    Ok(transformations)
}

fn find_uint8_transformations(tree: &Tree, source: &[u8]) -> Result<Vec<Transformation>> {
    let query_str = r#"
        (new_expression
          constructor: (identifier) @constructor
          arguments: (arguments 
            (array) @array
          )
        ) @new_expr
    "#;

    let language = tree_sitter_javascript::LANGUAGE;
    let query = Query::new(&language.into(), query_str)
        .map_err(|e| anyhow::anyhow!("Failed to create Uint8Array query: {}", e))?;

    let mut cursor = QueryCursor::new();
    let mut matches = cursor.matches(&query, tree.root_node(), source);
    let mut transformations = Vec::new();

    while let Some(query_match) = matches.next() {
        let mut new_expr_node = None;
        let mut constructor_node = None;
        let mut array_node = None;

        for capture in query_match.captures {
            let capture_name = query.capture_names()[capture.index as usize];
            match capture_name {
                "new_expr" => new_expr_node = Some(capture.node),
                "constructor" => constructor_node = Some(capture.node),
                "array" => array_node = Some(capture.node),
                _ => {}
            }
        }

        if let (Some(new_expr), Some(constructor), Some(array)) =
            (new_expr_node, constructor_node, array_node)
        {
            let constructor_text = constructor
                .utf8_text(source)
                .map_err(|e| anyhow::anyhow!("Failed to get constructor text: {}", e))?;

            if constructor_text == "Uint8Array" {
                let array_text = array
                    .utf8_text(source)
                    .map_err(|e| anyhow::anyhow!("Failed to get array text: {}", e))?;

                if let Some(decoded_string) = decode_uint8array_to_string(array_text) {
                    debug!(
                        "Found Uint8Array to transform: {} -> {}",
                        array_text, decoded_string
                    );
                    transformations.push(Transformation {
                        node_id: new_expr.id(),
                        transformation_type: TransformationType::InsertAfter,
                        replacement: format!(" /* decoded: \"{decoded_string}\" */"),
                    });
                }
            }
        }
    }

    Ok(transformations)
}

/// Reconstruct source by walking the AST and applying transformations
fn reconstruct_source_with_transformations(
    node: Node,
    source: &[u8],
    transformations: &[Transformation],
    output: &mut String,
) -> Result<()> {
    // Check if this node has a transformation
    let transform = transformations.iter().find(|t| t.node_id == node.id());

    if let Some(transform) = transform {
        match transform.transformation_type {
            TransformationType::ReplaceNode => {
                // Replace the entire node with the transformation
                output.push_str(&transform.replacement);
                return Ok(());
            }
            TransformationType::InsertAfter => {
                // Process the node normally, then add the transformation
                if node.child_count() == 0 {
                    // Leaf node - add its text
                    let text = node
                        .utf8_text(source)
                        .map_err(|e| anyhow::anyhow!("Failed to get leaf node text: {}", e))?;
                    output.push_str(text);
                } else {
                    // Process children recursively
                    let mut cursor = node.walk();
                    for child in node.children(&mut cursor) {
                        reconstruct_source_with_transformations(
                            child,
                            source,
                            transformations,
                            output,
                        )?;
                    }
                }
                // Add the transformation after the node
                output.push_str(&transform.replacement);
                return Ok(());
            }
        }
    }

    // No transformation - process the node normally
    if node.child_count() == 0 {
        // Leaf node - add its text as-is
        let text = node
            .utf8_text(source)
            .map_err(|e| anyhow::anyhow!("Failed to get leaf node text: {}", e))?;
        output.push_str(text);
    } else {
        // Recursively process children
        let mut cursor = node.walk();
        for child in node.children(&mut cursor) {
            reconstruct_source_with_transformations(child, source, transformations, output)?;
        }
    }

    Ok(())
}

/// Helper function to extract content from string literals (for analysis)
pub fn extract_string_content(text: &str) -> String {
    let text = text.trim();

    // Handle different types of string literals
    if text.starts_with('"') && text.ends_with('"') {
        // Double-quoted string
        text[1..text.len() - 1].to_string()
    } else if text.starts_with('\'') && text.ends_with('\'') {
        // Single-quoted string
        text[1..text.len() - 1].to_string()
    } else if text.starts_with('`') && text.ends_with('`') {
        // Template literal
        text[1..text.len() - 1].to_string()
    } else if text.starts_with("//") || text.starts_with("/*") {
        // Comments
        text.to_string()
    } else {
        // Return as-is for other cases
        text.to_string()
    }
}

/// Parse array like [72, 101, 108, 108, 111] into string
pub fn decode_uint8array_to_string(array_text: &str) -> Option<String> {
    // Handle arrays that span multiple lines with whitespace
    let content = array_text.trim();
    if !content.starts_with('[') || !content.ends_with(']') {
        return None;
    }

    let inner = &content[1..content.len() - 1];
    let numbers: Result<Vec<u8>, _> = inner
        .split(',')
        .map(|s| s.trim())
        .filter(|s| !s.is_empty()) // Filter out empty strings from trailing commas or extra whitespace
        .map(|s| s.parse::<u8>())
        .collect();

    match numbers {
        Ok(bytes) => {
            // Try to convert bytes to UTF-8 string
            match String::from_utf8(bytes) {
                Ok(decoded) => {
                    // Check if it looks like readable text (basic heuristic)
                    if decoded
                        .chars()
                        .all(|c| c.is_ascii_graphic() || c.is_ascii_whitespace())
                    {
                        Some(decoded)
                    } else {
                        None
                    }
                }
                Err(_) => None,
            }
        }
        Err(_) => None,
    }
}

fn decode_hex_string(text: &str) -> Option<String> {
    // Check if text contains hex escape sequences like \x74\x6f etc.
    if !text.contains("\\x") {
        return None;
    }

    // Extract the content inside quotes if it's a quoted string
    let content = if (text.starts_with('"') && text.ends_with('"'))
        || (text.starts_with('\'') && text.ends_with('\''))
    {
        &text[1..text.len() - 1]
    } else {
        text
    };

    // Try to decode hex sequences
    let mut result = String::new();
    let mut chars = content.chars().peekable();
    let mut has_hex = false;

    while let Some(c) = chars.next() {
        if c == '\\' && chars.peek() == Some(&'x') {
            // Skip the 'x'
            chars.next();

            // Read two hex digits
            let hex1 = chars.next()?;
            let hex2 = chars.next()?;

            if hex1.is_ascii_hexdigit() && hex2.is_ascii_hexdigit() {
                let hex_str = format!("{hex1}{hex2}");
                if let Ok(byte) = u8::from_str_radix(&hex_str, 16) {
                    result.push(byte as char);
                    has_hex = true;
                    continue;
                }
            }

            // If we couldn't parse hex, add the characters as-is
            result.push('\\');
            result.push('x');
            result.push(hex1);
            result.push(hex2);
        } else {
            result.push(c);
        }
    }

    if has_hex {
        // Preserve the original quote style
        if text.starts_with('"') {
            Some(format!("\"{result}\""))
        } else if text.starts_with('\'') {
            Some(format!("'{result}'"))
        } else {
            Some(result)
        }
    } else {
        None
    }
}
