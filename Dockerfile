# Multi-stage Dockerfile for Rust application with Chromium runtime

# Build stage
FROM rust:1.88-slim AS builder

# Install build dependencies
RUN apt-get update && apt-get install -y \
    pkg-config \
    libssl-dev \
    mold \
    clang \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy Cargo files first for better caching
COPY Cargo.toml Cargo.lock ./

# Create a dummy main.rs to build dependencies
RUN mkdir src/
ADD src/* src/

ENV RUSTFLAGS="-Clinker=clang -Clink-arg=-fuse-ld=/usr/bin/ld.mold"

# Build dependencies (this layer will be cached)
RUN cargo build --release


# # Runtime stage
FROM debian:bookworm-slim

# # Install Chromium and runtime dependencies
RUN apt-get update && apt-get install -y \
    chromium \
    chromium-driver \
    chromium-sandbox \
    ca-certificates \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user for running the application
RUN groupadd -r appuser && useradd -r -g appuser -G audio,video appuser \
    && mkdir -p /home/appuser/Downloads /home/appuser/.cache /home/appuser/.local /tmp/.X11-unix \
    && chown -R appuser:appuser /home/appuser \
    && chmod 1777 /tmp/.X11-unix

# Set working directory
WORKDIR /app

# Copy the built binary from the builder stage
COPY --from=builder /app/target/release/js-cleanifier ./js-cleanifier

# Make the binary executable and ensure proper ownership
RUN chmod +x "./js-cleanifier" \
    && chown appuser:appuser "./js-cleanifier"

# Create temp directory with proper permissions
RUN mkdir -p /tmp/chromium-data \
    && chown -R appuser:appuser /tmp/chromium-data \
    && chmod 755 /tmp/chromium-data

# Switch to non-root user
USER appuser

ENV DISPLAY=:99

# Expose debugging port (optional)
EXPOSE 9222

# Run the application
ENTRYPOINT ["./js-cleanifier"]