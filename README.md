# JS Cleanifier ⚠️

> [!WARNING]
>
> **DO NOT RUN THIS TOOL ON A MACHINE YOU CARE ABOUT**
>
> This tool is designed to process potentially malicious JavaScript code, including malware, obfuscated scripts, and > other dangerous payloads. Running untrusted JavaScript code can:
>
> - **Execute arbitrary code** on your system
> - **Access sensitive files** and system resources  
> - **Make network connections** to malicious servers
> - **Install malware** or other unwanted software
> - **Steal credentials** or personal information
> - **Damage your system** or data
>
> **Use only in isolated environments such as:**
>
> - Dedicated virtual machines
> - Docker containers with strict security policies
> - Sandboxed environments specifically designed for malware analysis
> - Air-gapped systems with no valuable data
>
> **Never run this tool on your primary workstation, servers, or any system containing sensitive information.**

---

A Rust-based JavaScript code deobfuscator and prettifier that uses Chrome DevTools Protocol and tree-sitter AST parsing to capture, decode, and beautify obfuscated JavaScript code.

## Overview

JS Cleanifier is a security research tool that leverages Chromium's debugging capabilities
and tree-sitter AST parsing to intercept JavaScript execution, capture source code from runtime exceptions,
decode obfuscated patterns, and produce readable output. Unlike traditional static analysis
tools, this approach can capture, deobfuscate, and prettify dynamically generated or
heavily obfuscated JavaScript code at runtime.

## Features

- **Runtime JavaScript Capture**: Uses Chrome DevTools Protocol to capture JS
  code during execution
- **AST-Based Deobfuscation**: Uses tree-sitter to parse and transform obfuscated JavaScript
- **Hex String Decoding**: Automatically decodes hex-encoded strings (`\x74\x6f` → `to`)
- **Code Prettification**: Automatically formats captured JavaScript for
  improved readability
- **Flexible Output**: Write to file or display in terminal
- **Exception Analysis**: Captures source code from JavaScript exceptions with
  full stack traces
- **Try Harder Mode**: Enhanced source capture by iterating through multiple script IDs
- **Async Processing**: Built with Tokio for efficient async operations
- **Configurable Logging**: Verbose mode for debugging with filtered output

## Installation

### Prerequisites

- Rust 1.70+ (edition 2024)
- Chrome/Chromium browser (automatically managed by chromiumoxide)

### Build from Source

```bash
git clone <repository-url>
cd js-cleanifier
cargo build --release
```

## Usage

### Basic Usage

```bash
# Prettify and deobfuscate a JavaScript file and display output
cargo run -- path/to/malicious/script.js

# Save cleaned output to a file
cargo run -- path/to/malicious/script.js --output cleaned.js

# Enable try-harder mode for enhanced source capture
cargo run -- path/to/malicious/script.js --try-harder

# Enable verbose logging for debugging
cargo run -- path/to/malicious/script.js --verbose

# Disable Chrome sandbox (required in some containerized environments)
cargo run -- path/to/malicious/script.js --disable-sandbox
```

### Command Line Options

```text
js-cleanifier [OPTIONS] <FILENAME>

Arguments:
  <FILENAME>  Path to the JavaScript file to process

Options:
  -o, --output <OUTPUT>     Output file path (optional, defaults to stdout)
  -v, --verbose             Enable verbose logging output
  -t, --try-harder          Enhanced source capture mode (iterates through script IDs 0-1024)
  -D, --disable-sandbox     Disable Chrome sandbox (required in some containers)
  -h, --help                Print help information
```

## How It Works

1. **Browser Launch**: Spawns a headless Chrome instance with debugging enabled
2. **Script Loading**: Loads the JavaScript file for execution
3. **Breakpoint Setup**: Sets strategic breakpoints to capture execution flow
4. **Exception Handling**: When JavaScript throws exceptions, captures the
   source code using Chrome DevTools Protocol
5. **Try Harder Mode**: Optionally iterates through script IDs 0-1024 to capture
   additional code fragments
6. **Code Prettification**: Uses the `prettify-js` crate to format the captured
   code
7. **AST Parsing**: Parses the prettified code with tree-sitter to build an Abstract Syntax Tree
8. **Deobfuscation**: Walks the AST to identify and decode obfuscated patterns:
   - Hex-encoded strings (`\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65` → `toUpperCase`)
   - Additional patterns can be easily added
9. **Output Generation**: Displays or saves the cleaned and deobfuscated JavaScript

## Architecture

### Core Components

- **Chrome Integration**: Uses `chromiumoxide` for Chrome DevTools Protocol
  communication
- **AST Processing**: Uses `tree-sitter` and `tree-sitter-javascript` for syntax analysis
- **Deobfuscation Engine**: Custom AST walker for pattern detection and transformation
- **Async Runtime**: Built on `tokio` for efficient async operations
- **CLI Interface**: Powered by `clap` for user-friendly command-line experience
- **Code Formatting**: Integrates `prettify-js` for JavaScript beautification

### Dependencies

| Crate                     | Version | Purpose                         |
| ------------------------- | ------- | ------------------------------- |
| `chromiumoxide`           | 0.7.0   | Chrome DevTools Protocol client |
| `tree-sitter`             | 0.25.8  | Parser generator for syntax trees |
| `tree-sitter-javascript`  | 0.23.1  | JavaScript grammar for tree-sitter |
| `tokio`                   | 1.47.1  | Async runtime                   |
| `clap`                    | 4.5.42  | Command-line argument parsing   |
| `prettify-js`             | 0.1.0   | JavaScript code formatting      |
| `anyhow`                  | 1.0.98  | Error handling                  |
| `serde_json`              | 1.0.142 | JSON serialization              |
| `futures-util`            | 0.3.31  | Stream utilities                |
| `tracing`                 | 0.1     | Structured logging              |
| `tracing-subscriber`      | 0.3     | Tracing output formatting       |

## Development

### Building

```bash
# Debug build
cargo build

# Release build
cargo build --release

# Check code without building
cargo check
```

### Code Quality

```bash
# Format code
cargo fmt

# Lint code
cargo clippy

# Run tests
cargo test
```

## Docker Support

The tool can be run in Docker containers for consistent environments:

```bash
# Build the Docker image
docker build -t js-cleanifier .

# Run with security options for Chrome
docker run --rm -it --security-opt seccomp=unconfined \
  --mount "type=bind,src=$(pwd),target=/data" \
  js-cleanifier /data/target.js
```

Alternatively the
[container's built automatically and pushed to GitHub](https://github.com/yaleman/js-cleanifier/pkgs/container/js-cleanifier):

```shell
docker run --rm -it \
  --security-opt seccomp=unconfined \
  --mount "type=bind,src=$(pwd),target=/data" \
  ghcr.io/yaleman/js-cleanifier:latest \
  /data/target.js
```

## Use Cases

- **Malware Analysis**: Deobfuscate and analyze malicious JavaScript payloads
- **Security Research**: Reverse engineer obfuscated web-based attacks
- **Threat Intelligence**: Extract readable code from suspicious scripts
- **Incident Response**: Analyze compromised JavaScript files
- **Educational Purposes**: Understand JavaScript obfuscation techniques
- **Code Recovery**: Extract readable code from heavily obfuscated applications

## Technical Details

The tool works by:

1. Creating a controlled browser environment with debugging APIs enabled
2. Setting up breakpoints and exception handlers
3. Executing potentially malicious JavaScript code and intercepting runtime exceptions
4. Extracting source code using Chrome DevTools Protocol
5. Processing the code through a prettification pipeline
6. Parsing the result with tree-sitter to build an Abstract Syntax Tree
7. Walking the AST to identify and transform obfuscated patterns
8. Applying in-place edits to replace obfuscated content with readable equivalents

This approach allows analyzing JavaScript that might be:

- Dynamically generated or self-modifying
- Heavily obfuscated with hex encoding, string splitting, or eval chains
- Part of multi-stage malware payloads
- Using complex evasion techniques
- Loaded via complex module systems or injection vectors

## Limitations

- **Security Risk**: Executes potentially malicious code - use only in isolated environments
- Requires JavaScript to throw exceptions for optimal source capture
- Depends on Chrome/Chromium installation
- Primarily designed for malware analysis and security research scenarios
- Performance overhead due to browser automation
- Try-harder mode may be resource intensive on large codebases
- Current deobfuscation focuses on hex string encoding (extensible for other patterns)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request
