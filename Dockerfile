FROM node:8.9-wheezy
MAINTAINER michel@micheldebree.nl

# install tools
COPY tmpview /usr/local/bin/
COPY *.sh /usr/local/bin/

# install script
COPY *.js /tasm2kickass/
COPY package*.json /tasm2kickass/
WORKDIR /tasm2kickass
RUN npm install

WORKDIR /workspace
ENTRYPOINT ["prg2kickass.sh"]
