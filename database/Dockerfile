# Dockerfile for the MongoDB instance of jarombek-com-database
# Sources: [https://stackoverflow.com/a/33601894]
# Author: Andrew Jarombek
# Date: 5/2/2019

FROM mongo:4.0

LABEL maintainer="andrew@jarombek.com" \
      version="1.1.8" \
      description="Dockerfile for Andrew Jarombek's Personal Website MongoDB Database"

# Make a new directory that MongoDB uses to save data
RUN mkdir -p /data/db2 \
    && echo "dbpath = /data/db2" > /etc/mongodb.conf \
    && chown -R mongodb:mongodb /data/db2

# Copy the jarombek-com-database source code into /src and use it as a working directory
COPY . /src
WORKDIR /src

# Start mongodb, execute the base database scripts, and shutdown mongodb
RUN mongod --fork --logpath /var/log/mongodb.log --dbpath /data/db2 --smallfiles \
    && mongo --quiet loadScripts.js \
    && mongod --dbpath /data/db2 --shutdown \
    && chown -R mongodb:mongodb /data/db2

# Create a volume out of the MongoDB data directory to persist it (https://stackoverflow.com/a/33601894)
VOLUME /data/db2

RUN mongod --fork --logpath /var/log/mongodb.log \
    && mongo --quiet loadScripts.js \
    && mongod --shutdown

# Expose the database port and start MongoDB in the container
EXPOSE 27017
ENTRYPOINT ["mongod", "--config", "/etc/mongodb.conf", "--smallfiles", "--bind_ip_all"]
