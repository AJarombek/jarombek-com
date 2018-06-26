#!/usr/bin/env bash

# Quickly set up a default package.json with npm
npm init -y

# Use yarn as the package manager since it is faster than npm
npm install yarn

# Install yarn globally so you can use the command 'yarn' in bash
# In general only install globally if you want to use it in the shell.
# If you want to use it in the project install locally.
npm install yarn -g

# Add webpack to the project for bundling
yarn add webpack

# Add babel for transpiling as a dev dependency
yarn add babel-core --dev

# Add both react and react-dom
# react is the library used for creating views.  react-dom is used to render these views on the browser
yarn add react react-dom

# Install the webpack loader for Babel along with the presets.  Each preset specifies a transformation to perform on
# the code
yarn add babel-loader babel-preset-env babel-preset-react --dev

# Required for handling HTML in Webpack
yarn add html-webpack-plugin --dev
yarn add html-loader --dev

# Webpack 4 requires the webpack-cli package to run webpack from the command line
yarn add webpack-cli --dev

# You can run scripts defined in package.json.  Dev bundles with Webpack for the development environment
yarn run dev

# Build bundles for production
yarn run build

# Run webpack dev server so the every time changes are made to code they are pushed to the bundled application
yarn add webpack-dev-server --dev

# Start the webpack dev server
yarn run start

# Add the uglify plugin to minimize the JavaScript files
yarn add uglifyjs-webpack-plugin --dev

# Install the Jest testing framework
yarn add jest --dev

# Dependencies needed for testing React apps with Jest
yarn add babel-jest react-test-renderer --dev

# Enzyme allows us to manipulate react components in tests
yarn add enzyme --dev

# Enzyme also requires an adapter for react
yarn add enzyme-adapter-react-16 --dev

# Use Hot Module Replacement with the React app and Webpack
yarn add react-hot-loader

# Install the nodemon monitoring tool.  We will use this to watch the webpack config file and restart the dev server
# on any changes
yarn add nodemon --dev

# Linting our JavaScript files
yarn add eslint --dev
yarn add eslint-loader --dev

# Have ESLint work with React style JavaScript
yarn add babel-eslint eslint-plugin-react --dev

# Add styling sheets (specifically Sass) to Webpack
yarn add css-loader style-loader --dev
yarn add sass-loader node-sass --dev

# Dependency that helps to separate out webpack configurations into multiple files
yarn add webpack-merge --dev

# Extract the CSS from JavaScript in production environments
yarn add extract-text-webpack-plugin --dev

# Use 'yarn upgrade' to update the version of a package
# https://github.com/webpack/webpack/issues/6568
yarn upgrade extract-text-webpack-plugin@next

# Inline images in our bundles for development
yarn add file-loader url-loader --dev

# Property validation was moved into its own module in React 16.
yarn add prop-types

# In order for Jest tests to work, we need to remove the CSS imports from JavaScript
# Learning React: Pg. 246
yarn add jest-css-modules --dev

# Simplifies formatting JavaScript date objects
yarn add moment

# Save the output of Snapshot tests as JSX
yarn add enzyme-to-json --dev

# Update the installed packages based on package.json.  Shorthand for 'yarn install'
yarn

# Set up the express server for server side rendering and rest api creation
yarn add express

yarn global add node-dev
yarn add webpack-node-dev --dev

yarn add nodemon-webpack-plugin --dev

# https://blog.digitalkwarts.com/server-side-rendering-with-reactjs-react-router-v4-react-helmet-and-css-modules/
# Perform stylesheet bundling on the server
yarn add isomorphic-style-loader

# Adding routing to the react application
yarn add react-router-dom

# Syntax highlighting for blog posts
yarn add highlightjs

# Stage 0 JavaScript for the static class properties
yarn add babel-preset-stage-0 --dev

# Install react-redux to allow the app to follow the flux pattern
yarn add react-redux

# Update the current version of yarn to latest
curl -o- -L https://yarnpkg.com/install.sh | bash

# Mongoose to use MongoDB and add schemas to the schemaless MongoDB collections
# Helmet to protect our API endpoints HTTP requests
yarn add mongoose
yarn add helmet

# Isomorphic fetch will work both on the server and in the browser
yarn add isomorphic-fetch

# Mock the Fetch API in the Jest tests
yarn add fetch-mock --dev

# Polyfill so google crawlers can use ES6+ features
yarn add babel-polyfill

# Add server side testing dependencies
yarn add supertest --dev

# Webpack plugin to copy a file to a new directory
yarn add copy-webpack-plugin --dev

# Bcrypt for hashing passwords
yarn add bcrypt-nodejs

# Used to create URL friendly base64 encodings of unique identifiers
yarn add uuid
yarn add base64-url

# Mocking for unit tests
yarn add sinon --dev

# Parsing HTTP Post request bodies
yarn add body-parser

# Set the node environment to development for proper Webpack builds
export NODE_ENV=development

# Build with webpack for dev environment bundles and deploy locally
yarn client:dev
yarn server:dev
yarn server:deploy