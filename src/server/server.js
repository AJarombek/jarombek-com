import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter, Switch, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import Blog from "../client/Blog";
import Home from "../client/Home";

import Audit from "./model/audit";
import Post from "./model/post";
import postRoute from "./route/postRouter";
import Viewed from "./model/viewed";
import viewedRoute from "./route/viewedRouter";


/**
 * The main file for the Express/Node.js server.  The server provides an API and
 * server side rendering
 * @author Andrew Jarombek
 * @since 4/3/2018
 */

mongoose.connect('mongodb://127.0.0.1/jarombekcom');

// API CRUD routes for a MongoDB collection
const postRouter = postRoute(Post);
const viewedRouter = viewedRoute(Viewed, Post, Audit);

global.React = React;

/**
 * Server side render the HTML using React.  Decide what to render with React Router
 * @param url - the url of the HTTP request
 * @returns {{html: *}} - HTML specific to this route
 */
const renderComponentsToHTML = (url) => ({
    html: renderToString(
        <StaticRouter location={url} context={{}}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog/:name" component={Blog}/>
                <Route path="/blog" component={Blog}/>
                <Route component={Home}/>
            </Switch>
        </StaticRouter>
    )
});

/**
 * Place the route specific HTML inside a generic HTML template
 * @param html - the route specific HTML
 * @returns {string} - HTML to be sent in the response
 */
const sendHtmlPage = ({html}) => {
    const helmet = Helmet.renderStatic();

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=700">
        <meta name="google-site-verification"
              content="axpbkHOqG9cnq6gACXKtvjaAbcEvsQ_01zoGQcA3y_M" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="stylesheet" href="/client/bundle.css">
    </head>
    <body>
        <div id="react-container">${html}</div>
        <script src="/client/vendor.js"></script>
        <script src="/client/bundle.js"></script>
    </body>
    </html>
    `
};

/**
 * First render the HTML components of the page based on the URL.  Then place this HTML body inside
 * a generic HTML template to return
 * @param url - the url of the HTTP request
 * @returns {string} - HTML to be sent in the response
 */
const htmlResponse = (url) =>
    sendHtmlPage(renderComponentsToHTML(url));

/**
 * Take the url passed in and render the HTML appropriately.  Then send it back in the response
 * @param req - HTTP request
 * @param res - HTTP response
 */
const respond = (req, res) => {
    const response = htmlResponse(req.url);
    console.debug(response);
    res.status(200).send(response);
};

const app = express();

app.use(helmet({}));
app.use('/api/post', postRouter);
app.use('/api/viewed', viewedRouter);

app.use(express.static(path.join(__dirname, '..')));

// Send the HTML and JavaScript bundle
app.use(respond);

const port = process.env.port || 8080;

module.exports = app.listen(port, () => {
   console.info(`Jarombek.com running on port ${port}`);
   console.info(__dirname);
});