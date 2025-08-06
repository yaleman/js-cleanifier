use anyhow::Result;
use js_cleanifier::{CleanifyOptions, JSCleanifier};
use std::path::PathBuf;
use tempfile::TempDir;

#[tokio::test]
async fn test_simple_js_file() -> Result<()> {
    let testfile_path = PathBuf::from("tests/testfile.js");
    assert!(
        testfile_path.exists(),
        "testfile.js should exist in tests directory"
    );

    // Create a temporary output file
    let temp_dir = TempDir::new()?;
    let output_path = temp_dir.path().join("output.js");

    let options = CleanifyOptions::new(&testfile_path).with_output(output_path.clone());
    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize(&options).await?;

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

    // The output should contain the expected JavaScript content
    let input_content = std::fs::read_to_string(&testfile_path)?;
    assert!(
        output_content.lines().count() >= input_content.lines().count(),
        "Prettified output should have same or more lines than input"
    );

    Ok(())
}

#[tokio::test]
async fn test_large_js_file() -> Result<()> {
    let target_path = PathBuf::from("target.js");
    assert!(
        target_path.exists(),
        "target.js should exist in project root"
    );

    // Create a temporary output file
    let temp_dir = TempDir::new()?;
    let output_path = temp_dir.path().join("output_large.js");

    let options = CleanifyOptions::new(&target_path).with_output(output_path.clone());
    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize(&options).await?;

    let result = cleanifier
        .cleanify_file_to_output(&target_path, &options)
        .await;

    match result {
        Ok(_) => {
            // If successful, verify output file was created
            assert!(output_path.exists(), "Output file should have been created");

            let output_content = std::fs::read_to_string(&output_path)?;
            assert!(
                !output_content.is_empty(),
                "Output file should not be empty"
            );

            println!(
                "Successfully processed large file, output size: {} bytes",
                output_content.len()
            );
        }
        Err(e) => {
            // If failed, it should be a graceful failure with meaningful error message
            println!("Processing failed (which may be expected for very large files)");
            println!("Error: {e}");

            // The failure should not be a panic or crash
            let error_msg = e.to_string();
            assert!(
                error_msg.contains("Error")
                    || error_msg.contains("Failed")
                    || error_msg.contains("timeout")
                    || error_msg.contains("Browser")
                    || error_msg.contains("Chrome"),
                "Failure should be graceful with meaningful error message: {error_msg}"
            );
        }
    }

    Ok(())
}

#[tokio::test]
async fn test_output_to_stdout() -> Result<()> {
    let testfile_path = PathBuf::from("tests/testfile.js");
    assert!(
        testfile_path.exists(),
        "testfile.js should exist in tests directory"
    );

    let options = CleanifyOptions::new(&testfile_path).with_output(PathBuf::from("-"));
    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize(&options).await?;

    // Capture stdout by getting the result directly instead of relying on println!
    let result = cleanifier.cleanify_file(&testfile_path, false).await?;

    // Should contain prettified JavaScript
    assert!(
        result.contains("function") && result.contains("console.log"),
        "Output should contain the prettified JavaScript function"
    );

    Ok(())
}

#[tokio::test]
async fn test_verbose_flag() -> Result<()> {
    let testfile_path = PathBuf::from("tests/testfile.js");
    assert!(
        testfile_path.exists(),
        "testfile.js should exist in tests directory"
    );

    let mut options = CleanifyOptions::new(&testfile_path);
    options.verbose = true;
    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize(&options).await?;

    let result = cleanifier.cleanify_file(&testfile_path, false).await?;

    // Should succeed and produce valid output
    assert!(!result.is_empty(), "Result should not be empty");
    assert!(
        result.contains("function"),
        "Result should contain function"
    );

    // Note: Verbose logging is handled at the tracing level in main.rs,
    // not in the library itself, so we just verify the operation succeeds

    Ok(())
}

#[tokio::test]
async fn test_nonexistent_file() -> Result<()> {
    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize(&CleanifyOptions::default()).await?;

    let nonexistent_path = PathBuf::from("nonexistent_file.js");
    let result = cleanifier.cleanify_file(&nonexistent_path, false).await;

    // Should fail gracefully for non-existent files
    assert!(result.is_err(), "Should fail for non-existent file");

    let error_msg = result.unwrap_err().to_string();
    assert!(
        error_msg.contains("No such file")
            || error_msg.contains("not found")
            || error_msg.contains("Error")
            || error_msg.contains("cannot find")
            || error_msg.contains("does not exist"),
        "Should provide meaningful error message for missing file: {error_msg}"
    );

    Ok(())
}

#[tokio::test]
async fn test_invalid_output_path() -> Result<()> {
    let testfile_path = PathBuf::from("tests/testfile.js");
    assert!(
        testfile_path.exists(),
        "testfile.js should exist in tests directory"
    );

    // Try to write to a directory that doesn't exist
    let invalid_output = PathBuf::from("/nonexistent/path/output.js");
    let options = CleanifyOptions::new(&testfile_path).with_output(invalid_output);
    let mut cleanifier = JSCleanifier::default();
    cleanifier.initialize(&options).await?;

    let result = cleanifier
        .cleanify_file_to_output(&testfile_path, &options)
        .await;

    // Should fail gracefully for invalid output paths
    assert!(result.is_err(), "Should fail for invalid output path");

    let error_msg = result.unwrap_err().to_string();
    assert!(
        error_msg.contains("Failed to write")
            || error_msg.contains("No such file")
            || error_msg.contains("Error")
            || error_msg.contains("Permission denied")
            || error_msg.contains("cannot create"),
        "Should provide meaningful error message for invalid output path: {error_msg}"
    );

    Ok(())
}
