/**
 * Routes for the Post API
 * @author Andrew Jarombek
 * @since 4/19/2018
 */

const express = require('express');

const routes = (Post) => {

    const postRouter = express.Router();

    postRouter.route('/')
        .get((req, res) => {

            find().catch(error => res.status(500).send(error));

            async function find() {
                const posts = await Post.find().exec();

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

module.exports = routes;