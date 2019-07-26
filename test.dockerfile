# Dockerfile for running jarombek-com application unit tests
# Author: Andrew Jarombek
# Date: 7/16/2019

FROM jarombek-com-test-base:latest

LABEL maintainer="andrew@jarombek.com" \
      version="0.1.0" \
      description="Dockerfile for testing Andrew Jarombek's Personal Website via Unit Tests"

COPY . /src
WORKDIR /src

CMD ["bash", "test-cmd.sh"]