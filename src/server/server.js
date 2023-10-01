/**
 * The main file for the Express/Node.js server.  The server provides an API and
 * server side rendering
 * @author Andrew Jarombek
 * @since 4/3/2018
 */

import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import cors from 'cors';

import Blog from '../client/Blog';
import Home from '../client/Home';
import Unsub from '../client/Unsub';
import Verify from '../client/Verify';
import BlogList from '../client/BlogList';
import Resume from '../client/Resume';
import Statistics from '../client/Statistics';
import gs from '../client/globalStyles';

import postRoute from './route/postRouter';
import viewedRoute from './route/viewedRouter';
import subscriberRoute from './route/subscriberRouter';
import statisticsRoute from './route/statisticsRouter';
import PostDao from './dao/postDao';

const mongoEndpoint =
  process.env.NODE_ENV === 'local' ? 'mongodb://127.0.0.1/jarombekcom' : 'mongodb://jarombek-com-database/jarombekcom';

const mongoConnectWithRetry = () => {
  mongoose.connect(mongoEndpoint, (err) => {
    if (err) {
      console.error('Failed to connect to MongoDB. Retrying in 5 seconds...');
      setTimeout(mongoConnectWithRetry, 5000);
    }
  });
};

mongoConnectWithRetry();

// API CRUD routes for a MongoDB collection
const postRouter = postRoute();
const viewedRouter = viewedRoute();
const subscriberRouter = subscriberRoute();
const statisticsRouter = statisticsRoute();

global.React = React;

/**
 * Server side render the HTML using React.  Decide what to render with React Router
 * @param url - the url of the HTTP request
 * @returns {Promise<{html: *, post: *}>} - A promise containing HTML specific to this
 * route and a post object if the route is for a specific blog post
 */
const renderComponentsToHTML = async (url) => {
  console.info(`URL: ${url}`);

  let post;
  const singlePostPattern = /\/blog\/([0-9-a-z]+)$/;

  if (singlePostPattern.exec(url)) {
    console.info('Ahead of Time Query Single Post');

    // Get the blog post that corresponds to this URL
    post = await getUrlPost(url, singlePostPattern);
  }

  return {
    html: renderToString(
      <StaticRouter location={url} context={{}}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog/:name" element={<Blog post={post} />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/verify/:code" element={<Verify />} />
          <Route path="/unsub/:code" element={<Unsub />} />
          <Route element={<Home />} />
        </Routes>
      </StaticRouter>,
    ),
    post,
  };
};

/**
 * Place the route specific HTML inside a generic HTML template
 * @param html - the route specific HTML
 * @returns {Promise<string>} - A promise containing HTML to be sent in the response
 */
const sendHtmlPage = async ({ html }) => {
  let globalStyles = '';

  if (process.env.NODE_ENV === 'development') {
    globalStyles = gs.dev;
  } else {
    globalStyles = gs.prod;
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Andrew Jarombek</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="google-site-verification"
              content="axpbkHOqG9cnq6gACXKtvjaAbcEvsQ_01zoGQcA3y_M" />
        <link rel="stylesheet" href="/client/bundle.css">
        <link rel="icon" href="https://asset.jarombek.com/" />
        <style>
          ${globalStyles}
        </style>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-89N9092F5K"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-89N9092F5K');
        </script>
    </head>
    <body>
        <div id="react-container">${html}</div>
        <script src="/client/vendor.js"></script>
        <script src="/client/bundle.js"></script>
    </body>
    </html>
    `;
};

/**
 * Get a blog post from MongoDB corresponding to the URL's name parameter
 * @param url - the URL of the HTTP request
 * @param regex - regular expression matching a URL containing a blog post title
 * @return {Promise<*>} - a promise containing a blog post object
 */
const getUrlPost = async (url, regex) => {
  // First match the URL with a Regex of the expected pattern for accessing a blog post
  const matches = url.match(regex);

  // In case the match fails, simply return nulls
  const [, match] = matches || [null, null];

  console.debug(`Matching URL: ${match}`);

  let post = null;

  // If the URL is valid, find the blog post in the database
  if (match) {
    post = await PostDao.getByName(match);
    console.debug(`Post with matching name: ${post.name}`);
  }

  return post;
};

/**
 * First render the HTML components of the page based on the URL.  Then place this HTML body inside
 * a generic HTML template to return
 * @param url - the url of the HTTP request
 * @returns {Promise<*>} - Promise containing HTML to be sent in the response
 */
const htmlResponse = async (url) => await sendHtmlPage(await renderComponentsToHTML(url));

/**
 * Take the url passed in and render the HTML appropriately.  Then send it back in the response
 * @param req - HTTP request
 * @param res - HTTP response
 */
const respond = async (req, res) => {
  const response = await htmlResponse(req.url);
  res.status(200).send(response);
};

const app = express();

app.use(
  cors({
    origin: ['https://www.jarombek.com', 'https://jarombek.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST',
    preflightContinue: false,
    optionsSuccessStatus: 200,
  }),
);

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);

app.use(bodyParser.json({ limit: '50mb' }));

app.use('/api/post', postRouter);
app.use('/api/viewed', viewedRouter);
app.use('/api/subscriber', subscriberRouter);
app.use('/api/stats', statisticsRouter);

app.use(express.static(path.join(__dirname, '..')));

// Send the HTML and JavaScript bundle
app.use(respond);

const port = process.env.port || 8080;

const server = app.listen(port, () => {
  console.info(`Jarombek.com running on port ${port}`);
  console.info(__dirname);
});

server.keepAliveTimeout = 120000;

export default server;
