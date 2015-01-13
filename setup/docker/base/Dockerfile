#DOCKER-VERSION 0.9.1
#
#VERSION 0.1
#
# monoxide mono-devel package on Ubuntu 13.10

FROM    mono-base

MAINTAINER Wayne Douglas <wayne@made-software.com>

RUN 	  git clone https://wayne-o:William2014@bitbucket.org/sonatribe/sonatribe /home/sonatribe
WORKDIR   /home/sonatribe/sonatribe-api

## Build the sln

RUN 	xbuild  sonatribe-api.sln

##this will set up the build for the ember bits and link to the UIHost project

EXPOSE 8080

RUN 	cp -r /home/sonatribe/sonatribe-ui/dist /home/sonatribe/sonatribe-api/src/UIHost/bin/Debug/bower_components/dist/
VOLUME  /logs:/logs
CMD 	["/vagrant/setup/docker/ui/entrypoint.sh"]
