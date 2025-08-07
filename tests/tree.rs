use js_cleanifier::{
    start_logging,
    tree::{decode_uint8array_to_string, tree_walker},
};

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

#[test]
fn test_decode_uint8array_to_string() {
    // Test cases based on the provided JavaScript chunk

    // Cdata: [67, 68, 65, 84, 65, 91] -> "CDATA["
    assert_eq!(
        decode_uint8array_to_string("[67, 68, 65, 84, 65, 91]"),
        Some("CDATA[".to_string())
    );

    // CdataEnd: [93, 93, 62] -> "]]>"
    assert_eq!(
        decode_uint8array_to_string("[93, 93, 62]"),
        Some("]]>".to_string())
    );

    // CommentEnd: [45, 45, 62] -> "-->"
    assert_eq!(
        decode_uint8array_to_string("[45, 45, 62]"),
        Some("-->".to_string())
    );

    // ScriptEnd: [60, 47, 115, 99, 114, 105, 112, 116] -> "</script"
    assert_eq!(
        decode_uint8array_to_string("[60, 47, 115, 99, 114, 105, 112, 116]"),
        Some("</script".to_string())
    );

    // StyleEnd: [60, 47, 115, 116, 121, 108, 101] -> "</style"
    assert_eq!(
        decode_uint8array_to_string("[60, 47, 115, 116, 121, 108, 101]"),
        Some("</style".to_string())
    );

    // TitleEnd: [60, 47, 116, 105, 116, 108, 101] -> "</title"
    assert_eq!(
        decode_uint8array_to_string("[60, 47, 116, 105, 116, 108, 101]"),
        Some("</title".to_string())
    );

    // TextareaEnd: [60, 47, 116, 101, 120, 116, 97, 114, 101, 97] -> "</textarea"
    assert_eq!(
        decode_uint8array_to_string("[60, 47, 116, 101, 120, 116, 97, 114, 101, 97]"),
        Some("</textarea".to_string())
    );
}

#[test]
fn test_decode_uint8array_edge_cases() {
    // Test empty array
    assert_eq!(decode_uint8array_to_string("[]"), Some("".to_string()));

    // Test invalid format (no brackets)
    assert_eq!(decode_uint8array_to_string("67, 68, 65"), None);

    // Test invalid numbers
    assert_eq!(decode_uint8array_to_string("[256, 68, 65]"), None);

    // Test non-ASCII bytes that don't form valid UTF-8
    assert_eq!(decode_uint8array_to_string("[255, 254, 253]"), None);

    // Test with spaces and formatting variations
    assert_eq!(
        decode_uint8array_to_string("[ 72 , 101 , 108 , 108 , 111 ]"),
        Some("Hello".to_string())
    );

    // Test multiline arrays with extra whitespace (like in the real JavaScript)
    assert_eq!(
        decode_uint8array_to_string("[67, \n  68,\n   65, \n  84, \n  65, 91]"),
        Some("CDATA[".to_string())
    );
}

#[test]
fn test_tree_walker_with_uint8array() {
    let _ = start_logging(true);

    let js_code = r#"
const St = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  CdataEnd: new Uint8Array([93, 93, 62]),
  CommentEnd: new Uint8Array([45, 45, 62])
};
"#;

    let result = tree_walker(js_code).expect("Tree walker should succeed");

    // Should contain comments with decoded strings
    assert!(
        result.contains("decoded:"),
        "Should contain decoded comments"
    );
    assert!(result.contains("CDATA["), "Should decode CDATA[ string");
    assert!(result.contains("]]>"), "Should decode ]]> string");
    assert!(result.contains("-->"), "Should decode --> string");
}
