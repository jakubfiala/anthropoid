#!/usr/bin/env bash
set -o errexit
set -o nounset

amixer set Master -- "$VOLUME_VALUE%"
