import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter, Switch, Route} from 'react-router-dom';
import Blog from "../client/Blog";
import Home from "../client/Home";

/**
 * The main file for the Express/Node.js server.  The server provides an API and
 * server side rendering
 * @author Andrew Jarombek
 * @since 4/3/2018
 */

mongoose.connect('mongodb://127.0.0.1/jarombekcom');

// Mongoose model objects for MongoDB schemas
const Post = require('./model/post');

// API CRUD routes for a MongoDB collection
const postRouter = require('./route/postRouter')(Post);

global.React = React;

const renderComponentsToHTML = (url) => ({
    html: renderToString(
        <StaticRouter url={url} context={{}}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog}/>
                <Route component={Home}/>
            </Switch>
        </StaticRouter>
    )
});

const sendHtmlPage = ({html}) =>
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="author" content="Andrew Jarombek">
        <meta name="description" content="Andrew Jarombek's Personal Website 
                                            and Software Development Blog">
        <title>Andrew Jarombek</title>
        <link rel="stylesheet" href="/client/bundle.css">
    </head>
    <body>
        <div id="react-container">${html}</div>
        <script src="/client/vendor.js"></script>
        <script src="/client/bundle.js"></script>
    </body>
    </html>
    `;

const htmlResponse = (url) =>
    sendHtmlPage(renderComponentsToHTML(url));

const respond = (req, res) => {
    const response = htmlResponse(req.url);
    console.info(response);
    res.status(200).send(response);
};

const app = express();

app.use(helmet({}));
app.use('/api/post', postRouter);

app.use(express.static(path.join(__dirname, '..')));
app.use(respond);

const port = process.env.port || 8080;

app.listen(port, () => {
   console.info(`Jarombek.com running on port ${port}`);
   console.info(__dirname);
});