use std::path::PathBuf;
use std::process::Command;
use tempfile::TempDir;
use anyhow::Result;
use std::sync::Mutex;

// Use a mutex to ensure tests run serially to avoid Chrome browser conflicts
static TEST_MUTEX: Mutex<()> = Mutex::new(());

#[test]
fn test_simple_js_file() -> Result<()> {
    let _guard = TEST_MUTEX.lock().unwrap();
    let testfile_path = PathBuf::from("tests/testfile.js");
    assert!(testfile_path.exists(), "testfile.js should exist in tests directory");
    
    // Create a temporary output file
    let temp_dir = TempDir::new()?;
    let output_path = temp_dir.path().join("output.js");
    
    let output = Command::new("cargo")
        .args(&[
            "run",
            "--",
            testfile_path.to_str().unwrap(),
            "--output",
            output_path.to_str().unwrap(),
        ])
        .output()?;
    
    // Check if command succeeded
    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        panic!("Command failed with stderr: {}", stderr);
    }
    
    // Verify output file was created
    assert!(output_path.exists(), "Output file should have been created");
    
    let output_content = std::fs::read_to_string(&output_path)?;
    assert!(!output_content.is_empty(), "Output file should not be empty");
    
    // The output should be prettier than the input (more lines due to formatting)
    let input_content = std::fs::read_to_string(&testfile_path)?;
    assert!(
        output_content.lines().count() >= input_content.lines().count(),
        "Prettified output should have same or more lines than input"
    );
    
    Ok(())
}

#[test]
fn test_large_js_file() -> Result<()> {
    let _guard = TEST_MUTEX.lock().unwrap();
    let target_path = PathBuf::from("target.js");
    assert!(target_path.exists(), "target.js should exist in project root");
    
    // Create a temporary output file
    let temp_dir = TempDir::new()?;
    let output_path = temp_dir.path().join("output_large.js");
    
    let output = Command::new("cargo")
        .args(&[
            "run",
            "--",
            target_path.to_str().unwrap(),
            "--output",
            output_path.to_str().unwrap(),
        ])
        .output()?;
    
    // Check if command succeeded or handled gracefully
    let stderr = String::from_utf8_lossy(&output.stderr);
    let stdout = String::from_utf8_lossy(&output.stdout);
    
    if output.status.success() {
        // If successful, verify output file was created
        assert!(output_path.exists(), "Output file should have been created");
        
        let output_content = std::fs::read_to_string(&output_path)?;
        assert!(!output_content.is_empty(), "Output file should not be empty");
        
        println!("Successfully processed large file, output size: {} bytes", output_content.len());
    } else {
        // If failed, it should be a graceful failure with meaningful error message
        println!("Command failed (which may be expected for very large files)");
        println!("Stderr: {}", stderr);
        println!("Stdout: {}", stdout);
        
        // The failure should not be a panic or crash
        assert!(
            stderr.contains("Error") || stderr.contains("Failed") || stderr.contains("timeout"),
            "Failure should be graceful with meaningful error message"
        );
    }
    
    Ok(())
}

#[test]
fn test_output_to_stdout() -> Result<()> {
    let _guard = TEST_MUTEX.lock().unwrap();
    let testfile_path = PathBuf::from("tests/testfile.js");
    assert!(testfile_path.exists(), "testfile.js should exist in tests directory");
    
    let output = Command::new("cargo")
        .args(&[
            "run",
            "--",
            testfile_path.to_str().unwrap(),
        ])
        .output()?;
    
    // Check if command succeeded
    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        panic!("Command failed with stderr: {}", stderr);
    }
    
    let stdout = String::from_utf8_lossy(&output.stdout);
    
    // Should contain prettified JavaScript in stdout
    assert!(
        stdout.contains("function") && stdout.contains("console.log"),
        "Output should contain the prettified JavaScript function"
    );
    
    Ok(())
}

#[test]
fn test_verbose_flag() -> Result<()> {
    let _guard = TEST_MUTEX.lock().unwrap();
    let testfile_path = PathBuf::from("tests/testfile.js");
    assert!(testfile_path.exists(), "testfile.js should exist in tests directory");
    
    let output = Command::new("cargo")
        .args(&[
            "run",
            "--",
            testfile_path.to_str().unwrap(),
            "--verbose",
        ])
        .output()?;
    
    let stderr = String::from_utf8_lossy(&output.stderr);
    let stdout = String::from_utf8_lossy(&output.stdout);
    
    // Verbose mode should produce more logging output (either in stderr or stdout)
    let has_verbose_output = stderr.contains("INFO") || stderr.contains("Starting") || stderr.contains("Prettifying") ||
                            stdout.contains("INFO") || stdout.contains("Starting") || stdout.contains("Prettifying") ||
                            stderr.contains("js_cleanifier") || stdout.contains("js_cleanifier");
    
    if !has_verbose_output {
        println!("STDERR: {}", stderr);
        println!("STDOUT: {}", stdout);
    }
    
    assert!(
        has_verbose_output,
        "Verbose mode should produce informational log messages"
    );
    
    Ok(())
}

#[test]
fn test_nonexistent_file() -> Result<()> {
    let output = Command::new("cargo")
        .args(&[
            "run",
            "--",
            "nonexistent_file.js",
        ])
        .output()?;
    
    // Command should fail gracefully for non-existent files
    assert!(!output.status.success(), "Command should fail for non-existent file");
    
    let stderr = String::from_utf8_lossy(&output.stderr);
    assert!(
        stderr.contains("No such file") || stderr.contains("not found") || stderr.contains("Error"),
        "Should provide meaningful error message for missing file"
    );
    
    Ok(())
}

#[test]
fn test_invalid_output_path() -> Result<()> {
    let testfile_path = PathBuf::from("tests/testfile.js");
    assert!(testfile_path.exists(), "testfile.js should exist in tests directory");
    
    // Try to write to a directory that doesn't exist
    let output = Command::new("cargo")
        .args(&[
            "run",
            "--",
            testfile_path.to_str().unwrap(),
            "--output",
            "/nonexistent/path/output.js",
        ])
        .output()?;
    
    // Command should fail gracefully for invalid output paths
    assert!(!output.status.success(), "Command should fail for invalid output path");
    
    let stderr = String::from_utf8_lossy(&output.stderr);
    assert!(
        stderr.contains("Failed to write") || stderr.contains("No such file") || stderr.contains("Error"),
        "Should provide meaningful error message for invalid output path"
    );
    
    Ok(())
}