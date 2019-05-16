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
     * '/content' Route
     */
    contentRoute(postRouter);

    /**
     * '/content/:name' Route
     */
    contentNameRoute(postRouter);

    /**
     * '/preview' Route
     */
    previewRoute(postRouter);

    /**
     * '/preview/:name' Route
     */
    previewNameRoute(postRouter);

    return postRouter;
};

/**
 * Handler for the blog post content routes of the API ('/content' endpoints)
 * @param router - the express router for the posts API
 */
const contentRoute = (router) => {
    router.route('/content')
        .get(getAll);
};

/**
 * Handler for the blog post content routes with a specific name of the API
 * ('/content/:name' endpoints)
 * @param router - the express router for the posts API
 */
const contentNameRoute = (router) => {
    router.use('/content/:name', contentNameMiddleware);

    router.route('/content/:name')
        .get(getOne);
};

/**
 * Handler for the blog post preview routes of the API ('/preview' endpoints)
 * @param router - the express router for the posts API
 */
const previewRoute = (router) => {
    router.route('/preview')
        .get(getAllPreviews);
};

/**
 * Handler for the blog post preview routes with a specific name of the API
 * ('/preview/:name' endpoints)
 * @param router - the express router for the posts API
 */
const previewNameRoute = (router) => {
    router.use('/preview/:name', previewNameMiddleware);

    router.route('/preview/:name')
        .get(getOne);
};

/**
 * Get all the posts in the database - the posts will be paginated based on the page and limit
 * specified in the URL queries
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const getAll = (req, res) => {

    console.info("Get All Content");

    // This API allows for two parameters:
    // [page] - the pagination of the MongoDB post collection
    // [limit] - the max number of documents to return.  Which documents depends on the page
    let {page, limit, query} = req.query;

    page = +page || 1;
    limit = +limit || 12;
    query = query || "";

    PostDao.getPaginatedPosts(page, limit, query).then((posts) => {

        const cacheLookup = query || "_";

        // Generate API endpoints to put in the HTTP Link header
        const {first, prev, next, last} =
            PostDao.generatePaginatedPostsLinks(page, limit, '/api/post/content', cacheLookup);

        // In the headers specify the API endpoints for related documents
        // + the total document count
        res.set('Link', `${first}${prev}${next}${last}`);
        res.set('X-Total-Count', PostDao.postCountCache[cacheLookup]);

        res.json(posts);

    }, (reason => {
        res.status(400).json({
            error: "Failed to Retrieve Page of Posts",
            message: reason
        });
    }));
};

/**
 * Get all the post previews in the database - the posts will be paginated based on the
 * page and limit specified in the URL queries.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const getAllPreviews = (req, res) => {

    let {page, limit, query} = req.query;

    page = +page || 1;
    limit = +limit || 12;
    query = query || "";

    PostDao.getPaginatedPostPreviews(page, limit, query).then((posts) => {

        const cacheLookup = query || "_";

        const {first, prev, next, last} =
            PostDao.generatePaginatedPostsLinks(page, limit, '/api/post/preview', cacheLookup);

        res.set('Link', `${first}${prev}${next}${last}`);
        res.set('X-Total-Count', PostDao.postCountCache[cacheLookup]);
        res.json(posts);

    }, (reason => {
        res.status(400).json({
            error: "Failed to Retrieve Page of Post Previews",
            message: reason
        });
    }));
};

/**
 * Middleware for content routes that contain a name parameter.  Get the post with the given name
 * from MongoDB in this step.  Doing this in a middleware step will simplify further routes.
 * @param req - HTTP request body
 * @param res - HTTP response body
 * @param next - the next step on middleware in the router
 */
const contentNameMiddleware = (req, res, next) => {

    PostDao.getByName(req.params.name).then((post) => {
        req.post = post;
        next();
    }, (reason => {
        res.status(400).json({
            error: `Failed to Retrieve Post with Name: ${req.params.name}`,
            message: reason
        });
    }));
};

/**
 * Middleware for content routes that contain a name parameter.  Get the post with the given name
 * from MongoDB in this step.  Doing this in a middleware step will simplify further routes.
 * @param req - HTTP request body
 * @param res - HTTP response body
 * @param next - the next step on middleware in the router
 */
const previewNameMiddleware = (req, res, next) => {

    PostDao.getPreviewByName(req.params.name).then((post) => {
        req.post = post;
        next();
    }, (reason => {
        res.status(400).json({
            error: `Failed to Retrieve Post Preview with Name: ${req.params.name}`,
            message: reason
        });
    }));
};

/**
 * Get a post with a given name.  Simply return a post retrieved by the middleware step.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const getOne = (req, res) => {
    res.json(req.post);
};

export default routes;