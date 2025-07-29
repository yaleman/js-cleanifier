# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Rust project that demonstrates JavaScript debugging using chromiumoxide (a Chrome DevTools Protocol implementation). The project launches a headless Chrome browser, sets breakpoints in JavaScript code, and attempts to debug JavaScript execution from Rust.

## Build and Development Commands

### Rust Development
- `cargo build` - Build the Rust project
- `cargo run` - Run the main Rust application 
- `cargo check` - Check code without building
- `cargo test` - Run tests (if any are added)

### Code Quality
- Use `cargo clippy` for linting
- Use `cargo fmt` for code formatting

## Architecture

### Core Components
- **src/main.rs**: Main Rust application that launches Chrome via chromiumoxide, enables debugging protocols, sets breakpoints, and executes JavaScript code
- **chromiumoxide integration**: Uses Chrome DevTools Protocol to control browser instance and debug JavaScript execution
- **JavaScript files**: Large generated/compiled JS files (target.js, expanded.js) that appear to be build artifacts

### Key Dependencies
- `chromiumoxide 0.7.0`: Chrome DevTools Protocol client for Rust
- `tokio 1.47.0`: Async runtime for handling browser communication
- `serde_json 1.0.141`: JSON serialization for DevTools messages

### Project Structure
The project mixes Rust (main application) with JavaScript debugging capabilities. The HTML file serves as a test harness, while the Rust code programmatically controls browser debugging sessions.

## Known Issues
- Line 32-36 in main.rs has incomplete breakpoint setup (missing imports for SetBreakpointByUrlParams)
- Line 43 references hardcoded "script-id-here" which needs to be obtained from debugger events
- GetScriptSourceParams import is missing

## JavaScript Debugging Workflow
1. Rust app launches Chrome with debugging enabled
2. Sets breakpoints in inline JavaScript code
3. Executes JavaScript and pauses at breakpoints
4. Retrieves source code and debugging information via DevTools Protocol

## Claude Instructions
- Don't try and consume any javascript files from this repository