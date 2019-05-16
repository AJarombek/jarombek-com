# jarombek-com

[![Build Status](https://travis-ci.org/AJarombek/jarombek-com.svg?branch=master)](https://travis-ci.org/AJarombek/jarombek-com)

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

### Files

| Filename                 | Description                                                                |
|--------------------------|----------------------------------------------------------------------------|
| `mocks`                  | Mocks for Jest unit testing.                                               |
| `src`                    | Application source code for both client and server.                        |
| `test`                   | Jest test code for both client and server.                                 |
| `.babelrc`               | Configuration for Babel.                                                   |
| `.dockerignore`          | Directories and files for Docker to ignore when building an image.         |
| `.eslintrc.js`           | Configuration for ESLint.                                                  |
| `.travis.yml`            | Continuous Integration config for TravisCI.                                |
| `Dockerfile`             | Blueprint for a Docker image used to containerize the application.         |
| `jest.client-config.js`  | Jest unit testing configuration for the client side code.                  |
| `jest.server-config.js`  | Jest unit testing configuration for the server side code.                  |
| `package.json`           | Entry point for the npm application.  Contains dependency definitions.     |
| `setup.sh`               | Bash commands for setting up the application.                              |
| `webpack.config.js`      | Main webpack configuration file.                                           |
| `webpack.parts.js`       | Smaller webpack parts to combine with the main configuration.              |
| `.yarn.lock`             | where Yarn stores the versions of each dependency.                         |