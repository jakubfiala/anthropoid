#!/usr/bin/env bash
set -o errexit
set -o nounset

get_cpu_stats() {
  echo "$1" \
    | grep -P "%Cpu\(s\)\:" \
    | tail -1 \
    | cut -d "," -f 1,4 - \
    | grep -oP "[0-9]+\.[0-9]+"
}

get_mem_stats() {
  echo "$1" \
    | grep "KiB Mem :" \
    | tail -1 \
    | cut -d "," -f 1,2 - \
    | grep -oP "[0-9]+"
}

TOP_STATS=$(top -n 2 -b)

cpu_stats=($(get_cpu_stats "$TOP_STATS"))
mem_stats=($(get_mem_stats "$TOP_STATS"))

cpu_user=${cpu_stats[0]}
cpu_idle=${cpu_stats[1]}

mem_total=${mem_stats[0]}
mem_free=${mem_stats[1]}

echo "{ \"cpu\": { \"user\": $cpu_user, \"idle\": $cpu_idle }, \"memory\": { \"total\": $mem_total, \"free\": $mem_free } }"
