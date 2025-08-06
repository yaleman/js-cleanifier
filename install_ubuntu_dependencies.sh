#!/bin/bash

# WHen you need to install all the things.

set -e

if [ "$(whoami)" == "root" ]; then
    SUDOCMD=""
else
    SUDOCMD="sudo "
fi

${SUDOCMD} apt-get update &&
    ${SUDOCMD} apt-get install -y \
        pkg-config \
        curl \
        jq \
        lld \
        chromium \
        chromium-driver \
        ca-certificates \
        xdg-utils \
        mold \
        clang

if [ -z "$(which cargo)" ]; then
    if [ -f "$HOME/.cargo/env" ]; then
        #shellcheck disable=SC1091
        source "$HOME/.cargo/env"
    else
        curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
        #shellcheck disable=SC1091
        source "$HOME/.cargo/env"
    fi

fi

ERROR=0
if [ -z "$(which cargo)" ]; then
    echo "You don't have cargo / rust installed!"
    echo "Go to <https://www.rust-lang.org/tools/install> for instructions!"
    echo ""
    echo "Or run this script with INSTALL_RUST=1 to install it for you."
    ERROR=1
fi

if [ $ERROR -eq 1 ]; then
    exit 1
fi

echo "Woo, all ready to go!"

#shellcheck disable=SC2016
echo 'You might need to load the env:  source "$HOME/.cargo/env"'
