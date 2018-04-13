#!/usr/bin/env bash
set -o errexit
set -o nounset

# starts an AirPlay server named the same as the Pi
shairport -a "$(hostname)"
