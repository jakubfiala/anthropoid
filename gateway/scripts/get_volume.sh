#!/usr/bin/env bash
set -o errexit
set -o nounset

AMIXER_VOLUME_REGEX="(?<=\[)([0-9]+)(?=%\])"

amixer get PCM | grep -oP $AMIXER_VOLUME_REGEX
