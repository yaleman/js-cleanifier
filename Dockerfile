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
    ca-certificates \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user for running the application
RUN groupadd -r appuser && useradd -r -g appuser -G audio,video appuser \
    && mkdir -p /home/appuser/Downloads \
    && chown -R appuser:appuser /home/appuser

# Set working directory
WORKDIR /app

# Copy the built binary from the builder stage
COPY --from=builder /app/target/release/js-cleanifier ./js-cleanifier

# Make the binary executable
RUN chmod +x "./js-cleanifier"

# Switch to non-root user
USER appuser

# Set Chrome/Chromium path environment variable
ENV CHROME_BIN=/usr/bin/chromium
ENV CHROMIUM_FLAGS="--no-sandbox --disable-setuid-sandbox --disable-dev-shm-usage --disable-gpu --disable-extensions --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-renderer-backgrounding --remote-debugging-port=9222"

# Expose debugging port (optional)
EXPOSE 9222

# Run the application
ENTRYPOINT ["./js-cleanifier"]