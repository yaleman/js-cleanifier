# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Rust CLI application that prettifies JavaScript code using chromiumoxide (Chrome DevTools Protocol implementation). The tool loads JavaScript files, executes them in a headless Chrome browser to capture source code through debugging APIs, and then prettifies the code using the prettify-js library.

## Build and Development Commands

### Rust Development
- `cargo build` - Build the Rust project
- `cargo run -- <filename>` - Run the CLI tool on a JavaScript file
- `cargo check` - Check code without building
- `cargo test` - Run tests

### Code Quality
- Use `cargo clippy` for linting
- Use `cargo fmt` for code formatting

## CLI Usage

The tool accepts the following arguments:
- `filename` - Path to the JavaScript file to prettify (required)
- `-o, --output <path>` - Output file path (optional, prints to stdout if not specified)
- `-v, --verbose` - Enable verbose logging

Example usage:
```bash
cargo run -- input.js -o output.js -v
```

## Architecture

### Core Components
- **src/main.rs**: CLI entry point that parses arguments and initializes the cleanifier
- **src/lib.rs**: Main library containing the JSCleanifier struct and CleanifyOptions
- **JSCleanifier**: Core struct that manages Chrome browser instance and JavaScript prettification
- **CleanifyOptions**: Configuration struct for CLI arguments

### Key Dependencies
- `chromiumoxide 0.7.0`: Chrome DevTools Protocol client for Rust
- `tokio 1.47.1`: Async runtime for browser operations
- `prettify-js 0.1.0`: JavaScript prettification library
- `clap 4.5.42`: Command-line argument parsing
- `anyhow 1.0.98`: Error handling
- `tracing/tracing-subscriber`: Logging framework

### Project Structure
- **Binary**: `src/main.rs` - CLI interface
- **Library**: `src/lib.rs` - Core functionality
- The project is structured as both a binary and library crate

## JavaScript Prettification Workflow
1. Initialize headless Chrome browser with temporary user data directory
2. Create new page and enable debugging/runtime protocols
3. Set breakpoint at end of JavaScript code
4. Execute JavaScript code in browser
5. Capture source code through debugging APIs (either from exceptions or original input)
6. Prettify captured source using prettify-js library
7. Output prettified code to file or stdout

## Implementation Details
- Uses temporary directories for Chrome user data to avoid conflicts
- Handles both successful JavaScript execution and exceptions
- Extracts script source from Chrome's debugging APIs when JavaScript throws exceptions
- Falls back to prettifying original input for successful executions
- Supports verbose logging for debugging browser interactions

## Claude Instructions
- This is a working JavaScript prettification tool, not a debugging demonstration
- The Chrome integration is used to capture and prettify JavaScript source code
- Focus on the JSCleanifier implementation in src/lib.rs for core functionality