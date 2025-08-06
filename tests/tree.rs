use js_cleanifier::tree::tree_walker;

#[test]
fn test_tree_walker() {
    let src = std::fs::read_to_string("tests/test_tree.js").expect("failed to read test_tree.js");
    let result = tree_walker(&src);
    assert!(result.is_ok());
    let output_string = result.expect("... what");
    dbg!(&src);
    dbg!(&output_string);
    assert!(!output_string.contains("\\x"));
    assert!(output_string.contains("document"));
    assert!(output_string.contains("characterSet"));
}
