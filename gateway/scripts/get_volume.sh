#!/usr/bin/env bash
set -o errexit
set -o nounset

AMIXER_VOLUME_REGEX="(?<=\[)([0-9]+)(?=%\])"

amixer get Master | grep -oP $AMIXER_VOLUME_REGEX | head -n 1
