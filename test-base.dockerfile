# Base Dockerfile which is built on-top of for running jarombek-com application unit tests
# Author: Andrew Jarombek
# Date: 7/25/2019

FROM mongo:4.0

LABEL maintainer="andrew@jarombek.com" \
      version="0.1.0" \
      description="Base Dockerfile which is built on-top of for testing via Unit Tests"

# Make a new directory that MongoDB uses to save data
RUN mkdir -p /data/db2 \
    && echo "dbpath = /data/db2" > /etc/mongodb.conf \
    && chown -R mongodb:mongodb /data/db2

COPY /test/database /dbsrc
WORKDIR /dbsrc

# Start mongodb, execute the base database scripts, and shutdown mongodb
RUN mongod --fork --logpath /var/log/mongodb.log --dbpath /data/db2 --smallfiles \
    && mongo --quiet testDBSetup.js \
    && mongod --dbpath /data/db2 --shutdown \
    && chown -R mongodb:mongodb /data/db2

# Create a volume out of the MongoDB data directory to persist it (https://stackoverflow.com/a/33601894)
VOLUME /data/db2

RUN mongod --fork --logpath /var/log/mongodb.log \
    && mongo --quiet testDBSetup.js \
    && mongod --shutdown

COPY . /src
WORKDIR /src

RUN apt-get update \
    && apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install -y nodejs \
    && npm install yarn -g \
    && npm install jest -g \
    && yarn

CMD ["bash"]