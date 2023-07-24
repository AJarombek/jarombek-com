# jarombek-com

![Maintained Label](https://img.shields.io/badge/Maintained-Yes-brightgreen?style=for-the-badge)

Contains code for my personal website [jarombek.com](https://jarombek.com).  The website uses a MERN 
stack (MongoDB, Express, React.js, Node.js).  All the source code is found under the `src` 
directory, which is further separated between `client` and `server` code.

There are a number of related repositories for my website:

### Public Repositories

- [jarombek-com-infrastructure](https://github.com/AJarombek/jarombek-com-infrastructure): Infrastructure
as code for my website in AWS.  Uses Terraform (and maybe in the future CloudFormation).
- [jarombek-com-posts](https://github.com/AJarombek/jarombek-com-posts): the blog posts HTML code.  First 
converted to JSON via the html-tokenizer and then placed in the jarombek-com-database repository.  The 
JSON is stored in my MongoDB document database and converted to JSX in this project (the
[JSXConverter](https://github.com/AJarombek/jarombek-com/blob/master/src/client/JSXConverter.js) class).
- [jarombek-com-sources](https://github.com/AJarombek/jarombek-com-sources): the source code that is 
discussed in my blog posts.
- [html-tokenizer](https://github.com/AJarombek/html-tokenizer): converts HTML to JSON for storage in 
a document database of choice (in my case MongoDB).

### Private Repositories

- [jarombek-com-database](https://github.com/AJarombek/jarombek-com-database): Contains blog post data 
stored in MongoDB along with some automated scripts.
- [jarombek-com-emails](https://github.com/AJarombek/jarombek-com-emails): AWS lambda functions that
send subscription emails to people who subscribe to my website.
- [jarombek-com-aws](https://github.com/AJarombek/jarombek-com-aws): legacy AWS configuration prior to
infrastructure as code.

### Commands

**Start the Development Server Locally**

```bash
nvm use v18.16.1

# Install Dependencies
yarn
npm rebuild node-sass

# Run the webpack builds
export NODE_ENV=local
yarn client:dev
yarn server:dev

# Start the development server
yarn server:deploy
```

**Run Cypress E2E Tests Locally**

As a prerequisite for running end to end tests, make sure the server is running.

```bash
nvm use v18.16.1
yarn cy:open
```

**Push images to DockerHub**

```bash
docker image build -t jarombek-com:latest -f aws.dockerfile .
docker image tag jarombek-com:latest ajarombek/jarombek-com:latest
docker push ajarombek/jarombek-com:latest

docker image tag jarombek-com:latest ajarombek/jarombek-com:1.2.11
docker push ajarombek/jarombek-com:1.2.11
```

### Files

| Filename                 | Description                                                                |
|--------------------------|----------------------------------------------------------------------------|
| `mocks`                  | Mocks for Jest unit testing.                                               |
| `src`                    | Application source code for both client and server.                        |
| `test`                   | Jest test code for both client and server.                                 |
| `.babelrc`               | Configuration for Babel.                                                   |
| `.dockerignore`          | Directories and files for Docker to ignore when building an image.         |
| `.eslintrc.js`           | Configuration for ESLint.                                                  |
| `.prettierignore`        | File patterns for the Prettier code formatter to ignore.                   |
| `.travis.yml`            | Continuous Integration config for TravisCI.                                |
| `Dockerfile`             | Blueprint for a Docker image used to containerize the application.         |
| `jest.client-config.js`  | Jest unit testing configuration for the client side code.                  |
| `jest.server-config.js`  | Jest unit testing configuration for the server side code.                  |
| `package.json`           | Entry point for the npm application.  Contains dependency definitions.     |
| `setup.sh`               | Bash commands for setting up the application.                              |
| `webpack.config.js`      | Main webpack configuration file.                                           |
| `webpack.parts.js`       | Smaller webpack parts to combine with the main configuration.              |
| `.yarn.lock`             | Where Yarn stores the versions of each dependency.                         |

### Version History

**V.1.1.19 - Google Analytics**

> Release Date: September 7th, 2021

Adding Google Analytics to the website to determine monthly page views.  Currently, the only activity tracking 
available about the website is for Google Search clicks.

**V.1.1.5 - Non-CSS Grid Browser Support**

> Release Date: November 3rd, 2018

**V.1.1.1 - Resume Page**

> Release Date: September 16th, 2018

**V.1.1.0 - Home Page 2.0**

> Release Date: September 5th, 2018

This update restyled the home page into three components with pictures - resume, articles, and statistics.

**V.1.0.7 - Articles Text Search**

> Release Date: August 19th, 2018

**V.1.0.5 - Paginated Articles Page**

> Release Date: August 11th, 2018

**[V.1.0.0](https://github.com/AJarombek/jarombek-com/tree/v1.0.0) - MVP Release**

> Release Date: May 10th, 2018

This update marks the official release of my website.
