# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is a Rust CLI application that prettifies and deobfuscates JavaScript code using
chromiumoxide (Chrome DevTools Protocol implementation) and tree-sitter. The tool loads
JavaScript files, executes them in a headless Chrome browser to capture source
code through debugging APIs, prettifies the code using the prettify-js
library, and then performs AST-based deobfuscation using tree-sitter.

## Build and Development Commands

### Rust Development

- `cargo build` - Build the Rust project
- `cargo run -- <filename>` - Run the CLI tool on a JavaScript file
- `cargo check` - Check code without building
- `cargo test` - Run tests

### Code Quality

- Use `cargo clippy` for linting
- Use `cargo fmt` for code formatting

### Using Just Commands

The project includes a `justfile` for common development tasks:

```bash
# Local development
just cargo-build    # Build with cargo
just check          # Run cargo check, clippy, and format check
just fmt            # Format code with cargo fmt

# Docker operations  
just build          # Build Docker image
just build-clean    # Build Docker image without cache
just run            # Run Docker container
just build-run      # Build and run Docker container
just build-clean-run # Clean build and run Docker container
```

## CLI Usage

The tool accepts the following arguments:

- `filename` - Path to the JavaScript file to prettify (required)
- `-o, --output <path>` - Output file path (optional, prints to stdout if not
  specified)
- `-v, --verbose` - Enable verbose logging

Example usage:

```bash
cargo run -- input.js -o output.js -v
```

## Docker Usage

The project includes a `justfile` with convenient commands for Docker
operations:

```bash
# Build the Docker image
just build

# Build without cache (clean build)
just build-clean

# Run the container with the default test file
just run

# Build and run in one command
just build-run

# Clean build and run
just build-clean-run
```

### Manual Docker Commands

```bash
# Build the Docker image
docker buildx build -t ghcr.io/yaleman/js-cleanifier:latest .

# Run with a JavaScript file (uses bind mount)
docker run --rm -it \
  --name js-cleanifier \
  -p 9222:9222 \
  --mount "type=bind,src=$(pwd),target=/data" \
  ghcr.io/yaleman/js-cleanifier:latest /data/your-file.js

# Run with output to stdout
docker run --rm -it \
  --mount "type=bind,src=$(pwd),target=/data" \
  ghcr.io/yaleman/js-cleanifier:latest /data/input.js

# Run with verbose logging
docker run --rm -it \
  --mount "type=bind,src=$(pwd),target=/data" \
  ghcr.io/yaleman/js-cleanifier:latest /data/input.js -v
```

**Note**: The Docker configuration has been optimized to run Chrome/Chromium
without requiring privileged mode or additional security options.

## Architecture

### Core Components

- **src/main.rs**: CLI entry point that parses arguments and initializes the
  cleanifier
- **src/lib.rs**: Main library containing the JSCleanifier struct and
  CleanifyOptions
- **src/tree.rs**: Tree-sitter based AST processing for deobfuscation
- **JSCleanifier**: Core struct that manages Chrome browser instance and
  JavaScript prettification
- **CleanifyOptions**: Configuration struct for CLI arguments

### Key Dependencies

- `chromiumoxide 0.7.0`: Chrome DevTools Protocol client for Rust
- `tokio 1.47.1`: Async runtime for browser operations
- `prettify-js 0.1.0`: JavaScript prettification library
- `tree-sitter 0.25.8`: Parser generator for syntax trees
- `tree-sitter-javascript 0.23.1`: JavaScript grammar for tree-sitter
- `clap 4.5.42`: Command-line argument parsing
- `anyhow 1.0.98`: Error handling
- `tracing/tracing-subscriber`: Logging framework

### Project Structure

- **Binary**: `src/main.rs` - CLI interface
- **Library**: `src/lib.rs` - Core functionality
- **Tree Walker**: `src/tree.rs` - AST-based deobfuscation
- The project is structured as both a binary and library crate

## JavaScript Prettification and Deobfuscation Workflow

1. Initialize headless Chrome browser with temporary user data directory
2. Create new page and enable debugging/runtime protocols
3. Set breakpoint at end of JavaScript code
4. Execute JavaScript code in browser
5. Capture source code through debugging APIs (either from exceptions or
   original input)
6. Prettify captured source using prettify-js library
7. Parse the prettified code with tree-sitter to build an AST
8. Walk the AST to find and decode hex-encoded strings (e.g., `\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65` → `toUpperCase`)
9. Apply in-place edits to replace obfuscated content with readable equivalents
10. Output the cleaned and deobfuscated code to file or stdout

## Implementation Details

- Uses temporary directories for Chrome user data to avoid conflicts
- Handles both successful JavaScript execution and exceptions
- Extracts script source from Chrome's debugging APIs when JavaScript throws
  exceptions
- Falls back to prettifying original input for successful executions
- Uses tree-sitter to parse JavaScript into an Abstract Syntax Tree (AST)
- Performs AST-based deobfuscation by identifying and transforming obfuscated patterns
- Currently supports hex string decoding (`\x74\x6f` sequences)
- Preserves original quote styles when making replacements
- Applies edits in reverse byte order to maintain correct positioning
- Supports verbose logging for debugging browser interactions

## Development Guidelines

- **Development Completion Criteria**: 
  - you aren't done until `just check` passes without errors or warnings

## Testing Guidelines

- When fixing a test, you must ensure that the test continues to validate expected operations

## Claude Instructions

- This is a working JavaScript prettification and deobfuscation tool, not a debugging
  demonstration
- The Chrome integration is used to capture and prettify JavaScript source code
- The tree-sitter integration performs AST-based deobfuscation after prettification
- Focus on the JSCleanifier implementation in src/lib.rs for core functionality
- The tree walker in src/tree.rs handles deobfuscation patterns and can be extended
  for additional obfuscation techniques beyond hex string decoding