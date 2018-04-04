#!/usr/bin/env bash
set -o errexit
set -o nounset

# from https://computers.tutsplus.com/articles/using-a-raspberry-pi-as-an-airplay-receiver--mac-54316
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install avahi-utils build-essential chkconfig git libao-dev libavahi-client-dev libcrypt-openssl-rsa-perl libio-socket-inet6-perl libssl-dev libwww-perl pkg-config

git clone -b 1.0-dev git://github.com/abrasive/shairport.git

pushd shairport
sudo ./configure
sudo make
sudo make install
popd

rm -rf shairport
