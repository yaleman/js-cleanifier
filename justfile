# Justfile for test-epic-js project

# Default recipe
default:
    @just --list

# Build the Docker image
build:
    docker buildx build -t ghcr.io/yaleman/js-prettifier:latest .

# buildx build with no cache
build-clean:
    docker buildx build --no-cache -t ghcr.io/yaleman/js-prettifier:latest .


# Run the Docker container
run:
    docker run --rm -it \
        -p 9222:9222 \
        --security-opt seccomp=unconfined \
        --mount "type=bind,src=$(pwd),target=/data" ghcr.io/yaleman/js-prettifier:latest /data/target.js

# Build and run in one command
build-run: build run

# Build locally with cargo
cargo-build:
    cargo build --release


# Check code locally
check:
    cargo check
    cargo clippy --all-targets
    cargo fmt --check

# Format code
fmt:
    cargo fmt