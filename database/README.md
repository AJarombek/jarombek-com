### Overview

Scripts for populating the Jarombek.com MongoDB database.

### Commands

**Run the database locally with Docker**

```bash
# Create the database
docker image build -t jarombek-com-database:latest .
docker container run -d --name jarombek-com-database -p 27017:27017 jarombek-com-database:latest

# Destroy the database
docker container stop jarombek-com-database
docker container rm jarombek-com-database
```

**Query the database running locally with Docker**

```bash
# Host machine
docker exec -it jarombek-com-database /bin/bash 

# Container
mongo

# MongoDB Shell
use jarombekcom
db.posts.count()
```

**Update the database running locally with Docker**

```bash
# Host machine
docker cp . jarombek-com-database:/src/
docker exec -it jarombek-com-database /bin/bash

# Container
mongo

# MongoDB Shell
use jarombekcom
load('./loadScripts.js')
```

**Push images to DockerHub**

```bash
docker login --username=ajarombek
docker image build -t jarombek-com-database:latest .

# Push image to Docker Hub with tag 'latest'
docker image tag jarombek-com-database:latest ajarombek/jarombek-com-database:latest
docker push ajarombek/jarombek-com-database:latest

# Push image to Docker Hub with version tag
docker image tag jarombek-com-database:latest ajarombek/jarombek-com-database:1.4.4
docker push ajarombek/jarombek-com-database:1.4.4
```

### Files

| Filename         | Description                                                                                              |
|------------------|----------------------------------------------------------------------------------------------------------|
| `family`         | Neo4j graph database for the Jarombek family.                                                            |
| `posts`          | All the tokenized articles on the website.                                                               |
| `Dockerfile`     | Blueprint for a Docker image running MongoDB.                                                            |
| `loadScripts.js` | Main entrypoint for the database scripts.  Calling this script will properly set up the entire database. |
| `maintenance.js` | Common MongoDB shell commands used when working with the database & debugging.                           |
| `template.js`    | A base template for each post in the database.                                                           |