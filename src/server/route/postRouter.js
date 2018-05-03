/**
 * Routes for the Post API
 * @author Andrew Jarombek
 * @since 4/19/2018
 */

const express = require('express');

const routes = (Post) => {

    const postRouter = express.Router();

    let postCountCache = null;

    postRouter.route('/')
        .get((req, res) => {

            let {page, limit} = req.query;

            page = page || 1;
            limit = limit || 5;

            const skip = (page - 1) * limit;

            find().catch(error => res.status(500).send(error));

            async function find() {

                if (!postCountCache) {
                    postCountCache = await Post.count({});
                }

                const posts = await Post.find({}).skip(skip).limit(limit).sort({date: -1}).exec();

                const {first, prev, next, last} =
                    generateLinks(postCountCache, page, limit, '/api/post');

                res.set('Link', `${first}${prev}${next}${last}`);

                res.json(posts);
            }
        });

    postRouter.use('/:name', (req, res, next) => {

        find().catch(error => res.status(500).send(error));

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

function generateLinks(count, page, limit, url) {
    const location = page * limit;

    let first = '';
    let prev = '';
    let next = '';
    let last = '';

    if (page > 1) {
        prev = `<${url}?page=${page - 1}&limit=${limit}>; rel="prev";`;
        first = `<${url}?page=1&limit=${limit}>; rel="first";`;
    }

    if (location + limit < count) {
        next = `<${url}?page=${page + 1}&limit=${limit}>; rel="next";`;
        last = `<${url}?page=1&limit=${Math.ceil(count / parseFloat(limit))}>; rel="last";`;
    }

    return {
        first,
        prev,
        next,
        last
    }
}

module.exports = routes;