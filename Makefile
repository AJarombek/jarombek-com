# Makefile for the 'jarombek-com' project
# Author: Andrew Jarombek
# Date: 1/21/2024

.PHONY: prereqs
prereqs: SHELL:=/bin/bash
prereqs:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash \
	&& export NVM_DIR="$$HOME/.nvm" \
	&& [ -s "$$NVM_DIR/nvm.sh" ] && \. "$$NVM_DIR/nvm.sh" \
	&& [ -s "$$NVM_DIR/bash_completion" ] && \. "$$NVM_DIR/bash_completion" \
	&& nvm install v20.11.0 \
	&& nvm use v20.11.0

.PHONY: install
install: SHELL:=/bin/bash
install:
	export NVM_DIR="$$HOME/.nvm" \
	&& [ -s "$$NVM_DIR/nvm.sh" ] && \. "$$NVM_DIR/nvm.sh" \
	&& nvm use v20.11.0 \
    && yarn \
    && npm rebuild node-sass

.PHONY: run-ui
run-ui: SHELL:=/bin/bash
run-ui:
	export NVM_DIR="$$HOME/.nvm" \
	&& [ -s "$$NVM_DIR/nvm.sh" ] && \. "$$NVM_DIR/nvm.sh" \
	&& nvm use v20.11.0 \
    && export BUILD_ENV=local \
    && yarn client:dev \
    && yarn server:dev \
    && yarn server:deploy

# This command assumes the jarombek-com-database repository is cloned in the same directory as this repository.
.PHONY: run-database
run-database: SHELL:=/bin/bash
run-database:
	docker container stop jarombek-com-database || true \
	&& docker container rm jarombek-com-database || true \
	&& docker image build -t jarombek-com-database:latest ../jarombek-com-database \
    && docker container run -d --name jarombek-com-database -p 27017:27017 jarombek-com-database:latest
