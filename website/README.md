### Overview

Contains code for my personal website [jarombek.com](https://jarombek.com).  The website uses a MERN 
stack (MongoDB, Express, React.js, Node.js).  All the source code is found under the `src` 
directory, which is further separated between `client` and `server` code.

### Commands

**Make commands**

```bash
# Install NVM & Proper Node.js Version
make prereqs

# Install Dependencies
make install

# Run the UI/API Locally
make run-ui

# Run the Database Locally
make run-database
```

**Start the Development Server Locally**

```bash
nvm use v20.11.0

# Install Dependencies
yarn
npm rebuild node-sass

# Run the webpack builds
export BUILD_ENV=local
yarn client:dev
yarn server:dev

# Start the development server
yarn server:deploy
```

**Run Cypress E2E Tests Locally**

As a prerequisite for running end-to-end tests, make sure the server is running.

```bash
nvm use v20.11.0
yarn cy:open
```

**Run GitHub Actions Locally**

```bash
# Install the act CLI
brew install act

# Run a specific GitHub Actions workflow
act -W '.github/workflows/e2e-tests.yaml'
```

**Push images to DockerHub**

```bash
docker image build -t jarombek-com:latest .
docker image tag jarombek-com:latest ajarombek/jarombek-com:latest
docker push ajarombek/jarombek-com:latest

docker image tag jarombek-com:latest ajarombek/jarombek-com:1.4.4
docker push ajarombek/jarombek-com:1.4.4
```

### Files

| Filename                | Description                                                            |
|-------------------------|------------------------------------------------------------------------|
| `.github`               | GitHub Actions for CI/CD pipelines.                                    |
| `cypress`               | Cypress e2e test code.                                                 |
| `mocks`                 | Mocks for Jest unit testing.                                           |
| `src`                   | Application source code for both client and server.                    |
| `test`                  | Jest test code for both client and server.                             |
| `.babelrc`              | Configuration for Babel.                                               |
| `.dockerignore`         | Directories and files for Docker to ignore when building an image.     |
| `.eslintrc.js`          | Configuration for ESLint.                                              |
| `.prettierignore`       | File patterns for the Prettier code formatter to ignore.               |
| `.prettierrc`           | Prettier code formatter configuration.                                 |
| `cypress.config.js`     | Configuration for Cypress e2e tests.                                   |
| `Dockerfile`            | Dockerfile for an image that containerizes the application.            |
| `jest.client-config.js` | Jest unit testing configuration for the client side code.              |
| `jest.server-config.js` | Jest unit testing configuration for the server side code.              |
| `LICENSE.md`            | MIT License for the repository.                                        |
| `Makefile`              | Make commands for the application.                                     |
| `package.json`          | Entry point for the npm application.  Contains dependency definitions. |
| `webpack.config.js`     | Main webpack configuration file.                                       |
| `webpack.parts.js`      | Smaller webpack parts to combine with the main configuration.          |
| `yarn.lock`             | Where Yarn stores the versions of each dependency.                     |

