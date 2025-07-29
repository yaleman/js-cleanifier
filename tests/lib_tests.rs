use anyhow::Result;
use js_cleanifier::{CleanifyOptions, JSCleanifier};
use std::path::PathBuf;
use tempfile::TempDir;
// Just rely on running tests with --test-threads=1 for now

#[tokio::test]
async fn test_simple_js_code_direct() -> Result<()> {
    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize().await?;

    let simple_js = r#"function hello_world() {
    console.log("Hello, World!");
}"#;

    let result = cleanifier.cleanify_js_code(simple_js).await?;

    // The result should be prettified JavaScript
    assert!(!result.is_empty(), "Result should not be empty");
    assert!(
        result.contains("function"),
        "Result should contain function keyword"
    );
    assert!(
        result.contains("console.log"),
        "Result should contain console.log"
    );

    // Prettified code might be shorter or longer depending on the prettifier
    // Just check that we got some meaningful output
    println!(
        "Input length: {}, Output length: {}",
        simple_js.len(),
        result.len()
    );
    println!("Output: {}", result);

    Ok(())
}

#[tokio::test]
async fn test_simple_js_file_direct() -> Result<()> {
    let testfile_path = PathBuf::from("tests/testfile.js");
    assert!(
        testfile_path.exists(),
        "testfile.js should exist in tests directory"
    );

    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize().await?;

    let result = cleanifier.cleanify_file(&testfile_path).await?;

    // The result should be prettified JavaScript
    assert!(!result.is_empty(), "Result should not be empty");
    assert!(
        result.contains("function"),
        "Result should contain function keyword"
    );
    assert!(
        result.contains("hello_world"),
        "Result should contain function name"
    );
    assert!(
        result.contains("console.log"),
        "Result should contain console.log"
    );

    Ok(())
}

#[tokio::test]
async fn test_file_to_output_direct() -> Result<()> {
    let testfile_path = PathBuf::from("tests/testfile.js");
    assert!(
        testfile_path.exists(),
        "testfile.js should exist in tests directory"
    );

    // Create a temporary output file
    let temp_dir = TempDir::new()?;
    let output_path = temp_dir.path().join("output.js");

    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize().await?;

    let options = CleanifyOptions::new(&testfile_path).with_output(output_path.clone());
    cleanifier
        .cleanify_file_to_output(&testfile_path, &options)
        .await?;

    // Verify output file was created
    assert!(output_path.exists(), "Output file should have been created");

    let output_content = std::fs::read_to_string(&output_path)?;
    assert!(
        !output_content.is_empty(),
        "Output file should not be empty"
    );
    assert!(
        output_content.contains("function"),
        "Output should contain function keyword"
    );

    Ok(())
}

#[tokio::test]
async fn test_verbose_option() -> Result<()> {
    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize().await?;

    let simple_js = "console.log('test');";

    let result = cleanifier.cleanify_js_code(simple_js).await?;

    assert!(!result.is_empty(), "Result should not be empty");
    assert!(result.contains("console"), "Result should contain console");

    Ok(())
}

#[tokio::test]
async fn test_malformed_js() -> Result<()> {
    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize().await?;

    let malformed_js = "function incomplete() { console.log('missing brace'";

    let result = cleanifier.cleanify_js_code(malformed_js).await;

    // This might succeed or fail depending on how the browser handles it
    // Either way, it shouldn't panic
    match result {
        Ok(prettified) => {
            assert!(
                !prettified.is_empty(),
                "Even malformed JS should produce some output"
            );
        }
        Err(e) => {
            // Graceful error handling is acceptable
            println!("Malformed JS handled gracefully: {}", e);
        }
    }

    Ok(())
}

#[tokio::test]
async fn test_empty_js() -> Result<()> {
    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize().await?;

    let empty_js = "";

    let result = cleanifier.cleanify_js_code(empty_js).await;

    // Empty JS might succeed with empty output or fail gracefully
    match result {
        Ok(prettified) => {
            // Empty input might produce empty or minimal output
            println!("Empty JS result: '{}'", prettified);
        }
        Err(e) => {
            // Graceful error handling is acceptable
            println!("Empty JS handled gracefully: {}", e);
        }
    }

    Ok(())
}

#[tokio::test]
async fn test_nonexistent_file() -> Result<()> {
    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize().await?;

    let nonexistent_path = PathBuf::from("nonexistent_file.js");

    let result = cleanifier.cleanify_file(&nonexistent_path).await;

    // Should fail gracefully for non-existent files
    assert!(result.is_err(), "Should fail for non-existent file");

    let error_msg = result.unwrap_err().to_string();
    assert!(
        error_msg.contains("No such file")
            || error_msg.contains("not found")
            || error_msg.contains("cannot find")
            || error_msg.contains("does not exist"),
        "Should provide meaningful error message for missing file: {}",
        error_msg
    );

    Ok(())
}

#[tokio::test]
async fn test_complex_js() -> Result<()> {
    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize().await?;

    let complex_js = r#"
const obj = {
    method: function(param) {
        if (param > 0) {
            return param * 2;
        } else {
            throw new Error("Invalid parameter");
        }
    },
    arrow: (x) => x + 1
};

async function asyncFunc() {
    try {
        const result = await fetch('/api/data');
        return result.json();
    } catch (error) {
        console.error('Error:', error);
    }
}
"#;

    let result = cleanifier.cleanify_js_code(complex_js).await?;

    assert!(!result.is_empty(), "Result should not be empty");
    assert!(
        result.contains("function"),
        "Result should contain function"
    );
    assert!(result.contains("async"), "Result should contain async");
    assert!(result.contains("const"), "Result should contain const");

    Ok(())
}
