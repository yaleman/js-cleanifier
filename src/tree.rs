use anyhow::Result;
use tracing::{debug, error};
use tree_sitter::StreamingIteratorMut as _;
use tree_sitter::{Node, Parser, Query, QueryCursor, Tree};

#[derive(Debug, Clone)]
pub struct NodeEdit {
    pub start_byte: usize,
    pub end_byte: usize,
    pub replacement: String,
}

pub fn tree_walker(src: &str) -> Result<String> {
    let mut parser = Parser::new();
    let language = tree_sitter_javascript::LANGUAGE;
    parser
        .set_language(&language.into())
        .map_err(|e| anyhow::anyhow!("Failed to set language: {}", e))?;

    let tree = parser
        .parse(src, None)
        .ok_or_else(|| anyhow::anyhow!("Failed to parse JavaScript"))?;

    let mut edits = find_and_edit_nodes(&tree, src.as_bytes())?;

    // Also find and decode Uint8Arrays
    let uint8_edits = find_and_decode_uint8arrays(&tree, src.as_bytes())?;
    edits.extend(uint8_edits);

    // Sort edits by start position (reverse order for applying)
    edits.sort_by(|a, b| a.start_byte.cmp(&b.start_byte));

    // Apply edits in reverse order to maintain byte positions
    let mut result = src.to_string();
    for edit in edits.into_iter().rev() {
        result.replace_range(edit.start_byte..edit.end_byte, &edit.replacement);
    }

    Ok(result)
}

fn find_and_edit_nodes(tree: &Tree, source: &[u8]) -> Result<Vec<NodeEdit>> {
    let mut edits = Vec::new();
    let root_node = tree.root_node();

    // Query for string literals and template literals that we want to edit
    let query_str = r#"
        (string) @string
        (template_string) @template
        (comment) @comment
        (regex) @regex
    "#;

    let language = tree_sitter_javascript::LANGUAGE;
    let query = Query::new(&language.into(), query_str)
        .map_err(|e| anyhow::anyhow!("Failed to create query: {}", e))?;

    let mut cursor = QueryCursor::new();
    let query_matches = cursor.matches(&query, root_node, source);

    let _res: Result<Vec<_>, _> = query_matches
        .map_deref_mut(|found| {
            for capture in found.captures {
                let node = capture.node;
                let text = match node.utf8_text(source) {
                    Ok(text) => text,
                    Err(e) => {
                        error!("Failed to get node text: {e}");
                        return Err(anyhow::anyhow!("Failed to get node text: {}", e));
                    }
                };

                // Decide what to do with this node based on its content
                if let Some(replacement) = process_node_content(&node, text) {
                    edits.push(NodeEdit {
                        start_byte: node.start_byte(),
                        end_byte: node.end_byte(),
                        replacement,
                    });
                }
            }
            Ok(())
        })
        .collect();
    let _ = _res;

    // Also walk the tree manually to catch any additional nodes that need editing
    walk_tree_for_edits(&root_node, source, &mut edits)?;

    // Sort edits by start position (reverse order for applying)
    edits.sort_by(|a, b| a.start_byte.cmp(&b.start_byte));

    Ok(edits)
}

fn process_node_content(node: &Node, text: &str) -> Option<String> {
    // Check for hex-encoded strings and decode them regardless of node type
    if let Some(decoded) = decode_hex_string(text) {
        return Some(decoded);
    }

    // Check for Uint8Array new expressions
    if node.kind() == "new_expression" && text.contains("Uint8Array") {
        // Try to find the array and decode it
        if let Some(decoded_comment) = try_decode_uint8array_node(node, text) {
            return Some(format!("{text} /* {decoded_comment} */"));
        }
    }

    None
}

fn walk_tree_for_edits(node: &Node, source: &[u8], edits: &mut Vec<NodeEdit>) -> Result<()> {
    // Check if this node needs editing based on custom logic
    if should_edit_node(node) {
        let text = node
            .utf8_text(source)
            .map_err(|e| anyhow::anyhow!("Failed to get node text: {}", e))?;

        if let Some(replacement) = process_node_content(node, text) {
            edits.push(NodeEdit {
                start_byte: node.start_byte(),
                end_byte: node.end_byte(),
                replacement,
            });
        }
    }

    // Recursively walk children
    for child in node.children(&mut node.walk()) {
        walk_tree_for_edits(&child, source, edits)?;
    }

    Ok(())
}

fn should_edit_node(node: &Node) -> bool {
    debug!("Checking node: {:?}", node.kind());
    matches!(
        node.kind(),
        "string" | "template_string" | "comment" | "regex" | "identifier" // Removed new_expression to avoid duplicates
    )
}

// Helper function to extract content from string literals (for analysis)
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

pub fn find_and_decode_uint8arrays(tree: &Tree, source: &[u8]) -> Result<Vec<NodeEdit>> {
    let mut edits = Vec::new();
    let root_node = tree.root_node();

    // Query for Uint8Array constructor calls
    let query_str = r#"
        (new_expression) @new_expr
    "#;

    let language = tree_sitter_javascript::LANGUAGE;
    let query = Query::new(&language.into(), query_str)
        .map_err(|e| anyhow::anyhow!("Failed to create Uint8Array query: {}", e))?;

    let mut cursor = QueryCursor::new();
    let query_matches = cursor.matches(&query, root_node, source);

    debug!("Starting to process query matches for Uint8Arrays...");

    let mut match_count = 0;
    let _res: Result<Vec<_>, _> = query_matches
        .map_deref_mut(|found| {
            match_count += 1;
            debug!(
                "Found query match #{} with {} captures",
                match_count,
                found.captures.len()
            );
            for capture in found.captures {
                let node = capture.node;
                let text = match node.utf8_text(source) {
                    Ok(text) => text,
                    Err(e) => {
                        error!("Failed to get node text: {e}");
                        return Err(anyhow::anyhow!("Failed to get node text: {}", e));
                    }
                };

                debug!("Captured node kind: {}, text: {}", node.kind(), text);

                // Check if this is a Uint8Array constructor or function call
                if let Some(comment) = process_uint8array_for_comment(&node, text, source)? {
                    debug!("Adding comment: {}", comment);
                    // Add comment after the entire expression
                    edits.push(NodeEdit {
                        start_byte: node.end_byte(),
                        end_byte: node.end_byte(),
                        replacement: format!(" /* {comment} */",),
                    });
                } else {
                    debug!("No comment generated for node: {}", text);
                }
            }
            Ok(())
        })
        .collect();
    let _ = _res;

    debug!("Total matches processed: {}", match_count);
    Ok(edits)
}

fn process_uint8array_for_comment(
    node: &Node,
    text: &str,
    source: &[u8],
) -> Result<Option<String>> {
    // Check if this is a Uint8Array constructor
    if !text.contains("Uint8Array") {
        return Ok(None);
    }

    // Find the constructor/function name and array argument
    let mut constructor_name = None;
    let mut array_node = None;

    for child in node.children(&mut node.walk()) {
        match child.kind() {
            "identifier" => {
                let name = child.utf8_text(source)?;
                if name == "Uint8Array" {
                    constructor_name = Some(name);
                }
            }
            "arguments" => {
                // Look for array inside arguments
                for arg_child in child.children(&mut child.walk()) {
                    if arg_child.kind() == "array" {
                        array_node = Some(arg_child);
                        break;
                    }
                }
            }
            _ => {}
        }
    }

    if constructor_name.is_some() && array_node.is_some() {
        let array_node = array_node.unwrap();
        let array_text = array_node.utf8_text(source)?;

        if let Some(decoded_string) = decode_uint8array_to_string(array_text) {
            debug!("Decoded Uint8Array: {array_text} -> {decoded_string}");
            return Ok(Some(format!("decoded: \"{decoded_string}\"")));
        }
    }

    Ok(None)
}

pub fn decode_uint8array_to_string(array_text: &str) -> Option<String> {
    // Parse array like [72, 101, 108, 108, 111] into string
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

fn try_decode_uint8array_node(_node: &Node, text: &str) -> Option<String> {
    // Extract array content from the new expression text
    // Look for pattern like: new Uint8Array([67, 68, 65, 84, 65, 91])
    if let Some(start) = text.find('[') {
        if let Some(end) = text.rfind(']') {
            let array_text = &text[start..=end];
            if let Some(decoded) = decode_uint8array_to_string(array_text) {
                debug!(
                    "Decoded Uint8Array in new expression: {} -> {}",
                    array_text, decoded
                );
                return Some(format!("decoded: \"{decoded}\""));
            }
        }
    }
    None
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
