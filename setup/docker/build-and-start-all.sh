#!/usr/bin/env bash

git pull

cd ~/sonatribe/setup/docker/base
echo '######################################### building base'
sudo docker build -t base .

cd ~/sonatribe/setup/docker/api
echo '######################################### building api'
sudo docker build -t sonatribe-api .

cd ~/sonatribe/setup/docker/ui
echo '######################################### building ui'
sudo docker build -t sonatribe-ui .


sudo docker run -d -p 1337:1337 sonatribe-api

sudo docker run -d -p 4200:4200 sonatribe-ui
