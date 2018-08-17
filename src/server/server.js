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
import {renderToString} from 'react-dom/server';
import {StaticRouter, Switch, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import queryString from 'query-string';

import Blog from "../client/Blog";
import Home from "../client/Home";
import Unsub from "../client/Unsub";
import Verify from "../client/Verify";
import BlogList from "../client/BlogList";
import gs from "../client/globalStyles";

import postRoute from "./route/postRouter";
import viewedRoute from "./route/viewedRouter";
import userRoute from "./route/userRouter";
import PostDao from "./dao/postDao";

mongoose.connect('mongodb://127.0.0.1/jarombekcom');

// API CRUD routes for a MongoDB collection
const postRouter = postRoute();
const viewedRouter = viewedRoute();
const userRouter = userRoute();

global.React = React;

/**
 * Server side render the HTML using React.  Decide what to render with React Router
 * @param url - the url of the HTTP request
 * @returns {Promise<{html: *, post: *}>} - A promise containing HTML specific to this
 * route and a post object if the route is for a specific blog post
 */
const renderComponentsToHTML = async (url) => {

    console.info(`URL: ${url}`);

    let post, posts;
    let first, prev, next, last;

    const singlePostPattern = /\/blog\/([0-9-a-z]+)$/;
    const postListPattern = /\/blog.*$/;

    if (singlePostPattern.exec(url)) {
        console.info('Ahead of Time Query Single Post');

        // Get the blog post that corresponds to this URL
        post = await getUrlPost(url, singlePostPattern);

    } else if (postListPattern.exec(url)) {
        console.info('Ahead of Time Query Post List');
        const postsData = await getListOfPosts(url);

        // Get the fields out of the postsData object pertaining to the posts and associated links
        posts = postsData.posts;
        first = postsData.first;
        prev = postsData.prev;
        next = postsData.next;
        last = postsData.last;

        // toObject() must be called on the results from MongoDB
        posts = posts.map(post => post.toObject());
    }

    console.debug(`AOT Post: ${JSON.stringify(post)}`);
    console.debug(`AOT Posts: ${JSON.stringify(posts)}`);

    return {
        html: renderToString(
            <StaticRouter location={url} context={{}}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/blog/:name" render={
                        (props) => <Blog {...props} {...{post: post}}/>
                    }/>
                    <Route path="/blog" render={
                        (props) => <BlogList {...props} {...{posts, first, prev, next, last}} />
                    }/>
                    <Route path="/verify/:code" component={Verify}/>
                    <Route path="/unsub/:code" component={Unsub}/>
                    <Route component={Home}/>
                </Switch>
            </StaticRouter>
        ),
        post,
        posts,
        first,
        prev,
        next,
        last
    };
};

/**
 * Place the route specific HTML inside a generic HTML template
 * @param html - the route specific HTML
 * @param post - an initial blog post to be sent with the response
 * @param posts - an initial list of blog posts to be sent with the response
 * @param first - link to the first page of posts
 * @param prev - link to the previous page of posts
 * @param next - link to the next page of posts
 * @param last - link to the last page of posts
 * @returns {Promise<string>} - A promise containing HTML to be sent in the response
 */
const sendHtmlPage = async ({html, post, posts, first, prev, next, last}) => {
    const helmet = Helmet.renderStatic();

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
        <meta charset="utf-8">
        <meta name="viewport" content="width=700">
        <meta name="google-site-verification"
              content="axpbkHOqG9cnq6gACXKtvjaAbcEvsQ_01zoGQcA3y_M" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="stylesheet" href="/client/bundle.css">
        <style>
          ${globalStyles}
        </style>
    </head>
    <body>
        <div id="react-container">${html}</div>
        <script>
            window.__STATE__ = ${JSON.stringify({post, posts, first, prev, next, last})}
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
 * @param regex - regular expression matching a URL containing a blog post title
 * @return {Promise<*>} - a promise containing a blog post object
 */
const getUrlPost = async (url, regex) => {

    // First match the URL with a Regex of the expected pattern for accessing a blog post
    const matches = url.match(regex);

    // In case the match fails, simply return nulls
    const [ , match] = matches || [null, null];

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
 * Get a list of blog posts from MongoDB corresponding to the page query in the URL.  If there is
 * no page query, a default page of posts will be returned.  Also get links to corresponding
 * pages of blog posts.
 * @param url - the URL of the HTTP request
 * @return {Promise<*>} - a promise containing a list of blog posts
 * and links to other pages of posts
 */
const getListOfPosts = async (url) => {
    const queries = queryString.parseUrl(url);

    const page = queries && queries.query && queries.query.page ? queries.query.page : 1;

    // The number of posts per page defaults to 12
    const posts = await PostDao.getPaginatedPostPreviews(page);

    // generatePaginatedPostsLinks() expects an integer for the first argument so coerce 'page'
    const {first, prev, next, last} =
        PostDao.generatePaginatedPostsLinks(+page, 12, '/api/post/preview');

    return {
        posts,
        first,
        prev,
        next,
        last
    }
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