#!/usr/bin/env bash

# Bash script which executes when the test.dockerfile container runs
# Author: Andrew Jarombek
# Date: 7/22/2019

# Start MongoDB in the container
mongod --config /etc/mongodb.conf --smallfiles &

# Execute the unit tests
yarn server:test