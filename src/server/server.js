import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter, Switch, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import Blog from "../client/Blog";
import Home from "../client/Home";
import Unsub from "../client/Unsub";
import Verify from "../client/Verify";

import Audit from "./model/audit";
import Post from "./model/post";
import Viewed from "./model/viewed";
import User from "./model/user";
import postRoute from "./route/postRouter";
import viewedRoute from "./route/viewedRouter";
import userRoute from "./route/userRouter";

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
const userRouter = userRoute(User, Audit);

global.React = React;

/**
 * Server side render the HTML using React.  Decide what to render with React Router
 * @param url - the url of the HTTP request
 * @returns {Promise<{html: *, post: *}>} - A promise containing HTML specific to this
 * route and a post object if the route is for a specific blog post
 */
const renderComponentsToHTML = async (url) => {

    console.info(`URL: ${url}`);

    // Get the blog post that corresponds to this URL
    let post = await getUrlPost(url);

    // If a post exists for this URL, get its object from the MongoDB response object
    if (post) {
        post = post.toObject();
    }

    return {
        html: renderToString(
            <StaticRouter location={url} context={{}}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/blog/:name" render={
                        (props) => <Blog {...props} {...{posts: post}}/>
                    }/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/verify/:code" component={Verify}/>
                    <Route path="/unsub/:code" component={Unsub}/>
                    <Route component={Home}/>
                </Switch>
            </StaticRouter>
        ),
        post
    };
};

/**
 * Place the route specific HTML inside a generic HTML template
 * @param html - the route specific HTML
 * @param post - an initial blog post to be sent with the response
 * @returns {Promise<string>} - A promise containing HTML to be sent in the response
 */
const sendHtmlPage = async ({html, post}) => {
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
        <script>
            window.__STATE__ = ${JSON.stringify({posts: post})}
        </script>
        <script src="/client/vendor.js"></script>
        <script src="/client/bundle.js"></script>
    </body>
    </html>
    `
};

/**
 * Get a blog post from MongoDB corresponding to the URL's name parameter
 * @param url - the URL of the HTTP request
 * @return {Promise<*>} - a promise containing a blog post object
 */
const getUrlPost = async (url) => {

    // First match the URL with a Regex of the expected pattern for accessing a blog post
    const urlPostMatch = /\/blog\/([0-9-a-z]+)$/;
    const matches = url.match(urlPostMatch);

    // In case the match fails, simply return nulls
    const [ , match] = matches || [null, null];

    console.info(`Matching URL: ${match}`);

    let post = null;

    // If the URL is valid, find the blog post in the database
    if (match) {
        post = await Post.findOne({name: match}).exec();
        console.info(`Post with matching name: ${post.name}`);
    }

    return post;
};

/**
 * First render the HTML components of the page based on the URL.  Then place this HTML body inside
 * a generic HTML template to return
 * @param url - the url of the HTTP request
 * @returns {Promise<*>} - Promise containing HTML to be sent in the response
 */
const htmlResponse = async (url) =>
    await sendHtmlPage(await renderComponentsToHTML(url));

/**
 * Take the url passed in and render the HTML appropriately.  Then send it back in the response
 * @param req - HTTP request
 * @param res - HTTP response
 */
const respond = async (req, res) => {
    const response = await htmlResponse(req.url);
    console.debug(response);
    res.status(200).send(response);
};

const app = express();

app.use(helmet({}));
app.use(bodyParser.json({limit: '50mb'}));

app.use('/api/post', postRouter);
app.use('/api/viewed', viewedRouter);
app.use('/api/user', userRouter);

app.use(express.static(path.join(__dirname, '..')));

// Send the HTML and JavaScript bundle
app.use(respond);

const port = process.env.port || 8080;

module.exports = app.listen(port, () => {
   console.info(`Jarombek.com running on port ${port}`);
   console.info(__dirname);
});