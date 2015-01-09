#!/usr/bin/env bash

sudo apt-get -y update

apt-get install -y ruby ruby-dev
gem install compass
apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
echo "deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen" | tee -a /etc/apt/sources.list.d/10gen.list
apt-get -y update
apt-get -y install mongodb-10gen
apt-get install -y python-software-properties python g++ make git
