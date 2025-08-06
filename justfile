# Justfile for test-epic-js project

# Default recipe
default:
    @just --list

# Build the Docker image
build:
    docker buildx build -t ghcr.io/yaleman/js-cleanifier:latest .

# buildx build with no cache
build-clean:
    docker buildx build --no-cache -t ghcr.io/yaleman/js-cleanifier:latest .


# Run the Docker container
run +ARGS:
    docker run --rm -it \
        --name js-cleanifier \
        -p 9222:9222 \
        --mount "type=bind,src=$(pwd),target=/data" ghcr.io/yaleman/js-cleanifier:latest {{ARGS}}

# Build and run in one command
build-run +args: build
    just run {{args}}

# Build the container without cache, and run in one command
build-clean-run +args: build-clean
    just run {{args}}

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

# create an orbstack linux machine to run this in
orb:
    @if [ "$(orb list | grep -c jsprettifier)" = "0" ]; then \
        echo "Creating jsprettifier machine..."; \
        orb create debian jsprettifier; \
    fi
    orb -m jsprettifier ./install_ubuntu_dependencies.sh
    orb -m jsprettifier