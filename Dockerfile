FROM node:6.11.0-wheezy
MAINTAINER michel@michdeldebree.nl
ADD *.js /tasm2kickass/
ADD package*.json /tasm2kickass/
ADD tmpview /tasm2kickass/
ADD prg2asm.sh /tasm2kickass/
RUN cd /tasm2kickass/ && npm install
WORKDIR /workspace
ENTRYPOINT ["/tasm2kickass/prg2asm.sh"]
