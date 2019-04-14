# Dockerfile for the jarombek-com application
# Author: Andrew Jarombek
# Date: 4/13/2019

# First stage in the build bundles the application into a distributable folder
FROM node:8-alpine AS base

COPY . /src
WORKDIR /src

RUN npm install yarn -g
RUN yarn
RUN yarn server:build
RUN yarn client:build

# Second stage in the build runs the application
FROM node:8-alpine AS app

LABEL maintainer="andrew@jarombek.com" \
      version="1.2.0" \
      description="Dockerfile for Andrew Jarombek's Personal Website & Software Development Blog"

COPY --from=base /src/dist/ .
WORKDIR /server

EXPOSE 8080
ENTRYPOINT ["node", "bundle.js"]