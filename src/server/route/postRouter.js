/**
 * Routes for the Post API
 * @author Andrew Jarombek
 * @since 4/19/2018
 */

import express from 'express';
import PostDao from "../dao/postDao";

/**
 * Create the REST API for posts
 * @return {*} The express router for posts
 */
const routes = () => {

    const postRouter = express.Router();

    /**
     * GET /post
     */
    getAll(postRouter);

    /**
     * Middleware for /post/:name
     */
    nameMiddleware(postRouter);

    /**
     * GET /post/:name
     */
    get(postRouter);

    return postRouter;
};

/**
 * Configure the route for getting all the posts in the database.  Since there are so many posts,
 * by default this route paginates results.  You can however ask for all posts by setting the limit
 * to the number of documents in MongoDB
 * @param router - the express router for the posts API
 */
const getAll = (router) => {
    router.route('/')
        .get((req, res) => {

            // This API allows for two parameters:
            // [page] - the pagination of the MongoDB post collection
            // [limit] - the max number of documents to return.  Which documents depends on the page
            let {page, limit} = req.query;

            // the unary + coerces the strings to numbers.  It is the fastest way to
            // convert strings to numbers in JavaScript
            page = +page || 1;
            limit = +limit || 12;

            PostDao.getPaginatedPosts(page, limit).then((posts) => {

                // Generate API endpoints to put in the HTTP Link header
                const {first, prev, next, last} =
                    PostDao.generatePaginatedPostsLinks(page, limit, '/api/post');

                // In the headers specify the API endpoints for related documents
                // + the total document count
                res.set('Link', `${first}${prev}${next}${last}`);
                res.set('X-Total-Count', PostDao.postCountCache);

                res.json(posts);

            }, (reason => {
                res.status(400).json({
                    error: "Failed to Retrieve Page of Posts",
                    message: reason
                });
            }));
        });
};

/**
 * Middleware for routes that contain a name parameter.  Get the post with the given name from
 * MongoDB in this step.  Doing this in a middleware step will simplify further routes.
 * @param router - the express router for the posts API
 */
const nameMiddleware = (router) => {
    router.use('/:name', (req, res, next) => {

        PostDao.getByName(req.params.name).then((post) => {
            req.post = post;
            next();
        }, (reason => {
            res.status(400).json({
                error: `Failed to Retrieve Post with Name: ${req.params.name}`,
                message: reason
            });
        }));
    });
};

/**
 * Get a post with a given name.  Simply return a post retrieved by the middleware step.
 * @param router - the express router for the posts API
 */
const get = (router) => {
    router.route('/:name')
        .get((req, res) => {
            res.json(req.post);
        });
};

module.exports = routes;