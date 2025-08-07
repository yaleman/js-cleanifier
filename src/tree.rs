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

    let edits = find_and_edit_nodes(&tree, src.as_bytes())?;

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

    let _res = query_matches
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
        .flatten();

    // Also walk the tree manually to catch any additional nodes that need editing
    walk_tree_for_edits(&root_node, source, &mut edits)?;

    // Sort edits by start position (reverse order for applying)
    edits.sort_by(|a, b| a.start_byte.cmp(&b.start_byte));

    Ok(edits)
}

fn process_node_content(_node: &Node, text: &str) -> Option<String> {
    // Check for hex-encoded strings and decode them regardless of node type
    if let Some(decoded) = decode_hex_string(text) {
        return Some(decoded);
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
        "string" | "template_string" | "comment" | "regex" | "identifier" // Could also edit variable names, etc.
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
