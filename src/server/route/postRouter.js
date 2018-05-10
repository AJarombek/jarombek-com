/**
 * Routes for the Post API
 * @author Andrew Jarombek
 * @since 4/19/2018
 */

const express = require('express');

const routes = (Post) => {

    const postRouter = express.Router();

    // Cache the number of existing posts so that a MongoDB query doesn't have to occur on each GET
    let postCountCache = null;

    postRouter.route('/')
        .get((req, res) => {

            // This API allows for two parameters:
            // [page] - the pagination of the MongoDB post collection
            // [limit] - the max number of documents to return.  Which documents depends on the page
            let {page, limit} = req.query;

            // the unary + coerces the strings to numbers.  It is the fastest way to
            // convert strings to numbers in JavaScript
            page = +page || 1;
            limit = +limit || 5;

            // Get the starting point within a MongoDB collection to query
            const skip = (page - 1) * limit;

            find().catch(error => res.status(500).send(error));

            /**
             * Call a find({}) query on the Post collection in MongoDB
             * @returns {Promise<void>}
             */
            async function find() {

                if (!postCountCache) {
                    postCountCache = await Post.count({});
                }

                const posts = await Post.find({}).skip(skip).limit(limit).sort({date: -1}).exec();

                // Generate API endpoints to put in the HTTP Link header
                const {first, prev, next, last} =
                    generateLinks(postCountCache, page, limit, '/api/post');

                // In the headers specify the API endpoints for related documents
                // + the total document count
                res.set('Link', `${first}${prev}${next}${last}`);
                res.set('X-Total-Count', postCountCache);

                res.json(posts);
            }
        });

    postRouter.use('/:name', (req, res, next) => {

        find().catch(error => res.status(500).send(error));

        /**
         * Call of findOne() query on the Post collection in MongoDB with a specific post name
         * @returns {Promise<void>}
         */
        async function find() {

            const post = await Post.findOne({name: req.params.name}).exec();
            console.info(`Post with matching name: ${post}`);

            if (post) {
                req.post = post;
                next();
            } else {
                res.status(404).send("Error: No Post found with given name");
            }
        }
    });

    postRouter.route('/:name')
        .get((req, res) => {
            res.json(req.post);
        });

    return postRouter;
};

/**
 * Generate Link header strings based on the parameters of the current API call
 * @param count - the total number of documents in the MongoDB collection
 * @param page - the current page specified in the API call, the API is paginated
 * @param limit - the max number of documents to return
 * @param url - the base url of the API (no parameters)
 * @returns {{first: string, prev: string, next: string, last: string}}
 */
function generateLinks(count, page, limit, url) {
    const location = page * limit;

    let first = '';
    let prev = '';
    let next = '';
    let last = '';

    // If we are not on the first page of the API, return the previous page and the first page urls
    if (page > 1) {
        prev = `<${url}?page=${page - 1}&limit=${limit}>; rel="prev";`;
        first = `<${url}?page=1&limit=${limit}>; rel="first";`;
    }

    // If we are not on the last page of the API, return the last page and the next page
    if (location < count) {
        next = `<${url}?page=${page + 1}&limit=${limit}>; rel="next";`;
        last = `<${url}?page=${Math.ceil(count / parseFloat(limit))}&limit=${limit}>; rel="last";`;
    }

    return {
        first,
        prev,
        next,
        last
    }
}

module.exports = routes;