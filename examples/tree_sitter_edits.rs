// Example of more advanced tree-sitter editing patterns
// This demonstrates how we could make the editing more tree-sitter native

use tree_sitter::StreamingIterator;
use tree_sitter::{InputEdit, Parser, Point, Query, QueryCursor, Tree};

/// Enhanced NodeEdit that includes tree-sitter context
#[derive(Debug, Clone)]
pub struct TreeEdit {
    pub node_id: usize,
    pub node_kind: String,
    pub start_byte: usize,
    pub end_byte: usize,
    pub start_point: Point,
    pub end_point: Point,
    pub replacement: String,
    pub edit_type: EditType,
}

#[derive(Debug, Clone)]
pub enum EditType {
    Replace,          // Replace entire node
    InsertAfter,      // Insert after node (like comments)
    InsertBefore,     // Insert before node
    WrapWith(String), // Wrap node with prefix/suffix
    Transform,        // Apply transformation function
}

/// Apply edits using tree-sitter's incremental parsing
pub fn apply_tree_edits(
    original_source: &str,
    edits: Vec<TreeEdit>,
    parser: &mut Parser,
) -> Result<String, Box<dyn std::error::Error>> {
    let mut current_source = original_source.to_string();
    let mut current_tree = parser.parse(&current_source, None).unwrap();

    // Sort edits by position (reverse order for applying)
    let mut sorted_edits = edits;
    sorted_edits.sort_by(|a, b| a.start_byte.cmp(&b.start_byte));

    // Apply edits and incrementally reparse
    for edit in sorted_edits.into_iter().rev() {
        // Create InputEdit for tree-sitter
        let input_edit = InputEdit {
            start_byte: edit.start_byte,
            old_end_byte: edit.end_byte,
            new_end_byte: edit.start_byte + edit.replacement.len(),
            start_position: edit.start_point,
            old_end_position: edit.end_point,
            new_end_position: calculate_new_position(&edit.replacement, edit.start_point),
        };

        // Apply edit to source
        current_source.replace_range(edit.start_byte..edit.end_byte, &edit.replacement);

        // Tell tree-sitter about the edit
        current_tree.edit(&input_edit);

        // Incrementally reparse only the affected area
        current_tree = parser.parse(&current_source, Some(&current_tree)).unwrap();
    }

    Ok(current_source)
}

/// More precise query-based transformations
pub fn find_uint8arrays_with_context(
    tree: &Tree,
    source: &[u8],
) -> Result<Vec<TreeEdit>, Box<dyn std::error::Error>> {
    let mut edits = Vec::new();

    // More specific query that captures the complete context
    let query_str = r#"
        (new_expression
          constructor: (identifier) @constructor
          arguments: (arguments 
            (array
              (number) @byte
            ) @array
          )
        ) @new_expr
        (#eq? @constructor "Uint8Array")
    "#;

    let language = tree_sitter_javascript::LANGUAGE;
    let query = Query::new(&language.into(), query_str)?;
    let mut cursor = QueryCursor::new();

    let mut matches = cursor.matches(&query, tree.root_node(), source);
    while let Some(query_match) = matches.next() {
        let mut new_expr_node = None;
        let mut array_node = None;
        let mut byte_nodes = Vec::new();

        for capture in query_match.captures {
            match query.capture_names()[capture.index as usize] {
                "new_expr" => new_expr_node = Some(capture.node),
                "array" => array_node = Some(capture.node),
                "byte" => byte_nodes.push(capture.node),
                _ => {}
            }
        }

        if let (Some(new_expr), Some(array)) = (new_expr_node, array_node) {
            let array_text = array.utf8_text(source)?;

            if let Some(decoded) = decode_uint8array_to_string(array_text) {
                edits.push(TreeEdit {
                    node_id: new_expr.id(),
                    node_kind: new_expr.kind().to_string(),
                    start_byte: new_expr.end_byte(),
                    end_byte: new_expr.end_byte(),
                    start_point: new_expr.end_position(),
                    end_point: new_expr.end_position(),
                    replacement: format!(" /* decoded: \"{decoded}\" */"),
                    edit_type: EditType::InsertAfter,
                });
            }
        }
    }

    Ok(edits)
}

/// Node-based transformation that preserves AST structure
pub fn transform_hex_strings_structurally(
    tree: &Tree,
    source: &[u8],
) -> Result<Vec<TreeEdit>, Box<dyn std::error::Error>> {
    let query_str = r#"
        (string) @string
        (#match? @string "\\\\x[0-9a-fA-F]{2}")
    "#;

    let language = tree_sitter_javascript::LANGUAGE;
    let query = Query::new(&language.into(), query_str)?;
    let mut cursor = QueryCursor::new();
    let mut edits = Vec::new();

    let mut matches = cursor.matches(&query, tree.root_node(), source);
    while let Some(query_match) = matches.next() {
        for capture in query_match.captures {
            let node = capture.node;
            let text = node.utf8_text(source)?;

            if let Some(decoded) = decode_hex_string_preserving_quotes(text) {
                edits.push(TreeEdit {
                    node_id: node.id(),
                    node_kind: node.kind().to_string(),
                    start_byte: node.start_byte(),
                    end_byte: node.end_byte(),
                    start_point: node.start_position(),
                    end_point: node.end_position(),
                    replacement: decoded,
                    edit_type: EditType::Replace,
                });
            }
        }
    }

    Ok(edits)
}

fn calculate_new_position(text: &str, start: Point) -> Point {
    let lines: Vec<&str> = text.lines().collect();
    if lines.len() <= 1 {
        Point {
            row: start.row,
            column: start.column + text.len(),
        }
    } else {
        Point {
            row: start.row + lines.len() - 1,
            column: lines.last().unwrap().len(),
        }
    }
}

fn decode_uint8array_to_string(_array_text: &str) -> Option<String> {
    // Implementation would be the same as current
    None
}

fn decode_hex_string_preserving_quotes(_text: &str) -> Option<String> {
    // Implementation would be similar to current but more precise
    None
}

fn main() {
    // Example main function for the demonstration
    println!("This is a demonstration of advanced tree-sitter editing patterns");
}
