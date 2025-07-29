# JS Cleanifier ='

A Rust-based JavaScript code prettifier that uses Chrome DevTools Protocol to
capture and beautify JavaScript source code from runtime exceptions.

## Overview

JS Cleanifier is a unique tool that leverages Chromium's debugging capabilities
to intercept JavaScript execution, capture source code from runtime exceptions,
and produce beautifully formatted output. Unlike traditional static analysis
tools, this approach can capture and prettify dynamically generated or
obfuscated JavaScript code at runtime.

## Features

- **Runtime JavaScript Capture**: Uses Chrome DevTools Protocol to capture JS
  code during execution
- **Code Prettification**: Automatically formats captured JavaScript for
  improved readability
- **Flexible Output**: Write to file or display in terminal
- **Exception Analysis**: Captures source code from JavaScript exceptions with
  full stack traces
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
# Prettify a JavaScript file and display output
cargo run -- path/to/your/script.js

# Save prettified output to a file
cargo run -- path/to/your/script.js --output cleaned.js

# Enable verbose logging for debugging
cargo run -- path/to/your/script.js --verbose
```

### Command Line Options

```
js-cleanifier [OPTIONS] <FILENAME>

Arguments:
  <FILENAME>  Path to the JavaScript file to process

Options:
  -o, --output <OUTPUT>  Output file path (optional, defaults to stdout)
  -v, --verbose          Enable verbose logging output
  -h, --help             Print help information
```

## How It Works

1. **Browser Launch**: Spawns a headless Chrome instance with debugging enabled
2. **Script Loading**: Loads your JavaScript file for execution
3. **Breakpoint Setup**: Sets strategic breakpoints to capture execution flow
4. **Exception Handling**: When JavaScript throws exceptions, captures the
   source code
5. **Code Prettification**: Uses the `prettify-js` crate to format the captured
   code
6. **Output Generation**: Displays or saves the beautifully formatted JavaScript

## Architecture

### Core Components

- **Chrome Integration**: Uses `chromiumoxide` for Chrome DevTools Protocol
  communication
- **Async Runtime**: Built on `tokio` for efficient async operations
- **CLI Interface**: Powered by `clap` for user-friendly command-line experience
- **Code Formatting**: Integrates `prettify-js` for JavaScript beautification

### Dependencies

| Crate                | Version | Purpose                         |
| -------------------- | ------- | ------------------------------- |
| `chromiumoxide`      | 0.7.0   | Chrome DevTools Protocol client |
| `tokio`              | 1.47.0  | Async runtime                   |
| `clap`               | 4.5.41  | Command-line argument parsing   |
| `prettify-js`        | 0.1.0   | JavaScript code formatting      |
| `anyhow`             | 1.0.98  | Error handling                  |
| `serde_json`         | 1.0.141 | JSON serialization              |
| `futures-util`       | 0.3.31  | Stream utilities                |
| `tracing`            | 0.1     | Structured logging              |
| `tracing-subscriber` | 0.3     | Tracing output formatting       |

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
  ghcr.io/yaleman/js-prettifier:latest \
  /data/target.js
```

## Use Cases

- **Debugging Obfuscated Code**: Capture and prettify minified/obfuscated
  JavaScript
- **Runtime Analysis**: Analyze dynamically generated JavaScript code
- **Code Recovery**: Extract readable code from complex web applications
- **Educational Purposes**: Understand how JavaScript executes in browser
  environments

## Technical Details

The tool works by:

1. Creating a controlled browser environment with debugging APIs enabled
2. Setting up breakpoints and exception handlers
3. Executing JavaScript code and intercepting runtime exceptions
4. Extracting source code using Chrome DevTools Protocol
5. Processing the code through a prettification pipeline

This approach allows capturing JavaScript that might be:

- Dynamically generated
- Loaded via complex module systems
- Obfuscated or minified
- Part of larger web applications

## Limitations

- Requires JavaScript to throw exceptions for source capture
- Depends on Chrome/Chromium installation
- Primarily designed for development/debugging scenarios
- Performance overhead due to browser automation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request
