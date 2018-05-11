#!/usr/bin/env bash
set -o errexit
set -o nounset

amixer set PCM -- "$VOLUME_VALUE%"
