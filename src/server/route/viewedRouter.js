/**
 * Routes for the Post API
 * @author Andrew Jarombek
 * @since 5/17/2018
 */

const express = require('express');

const routes = (Viewed, Post, Audit) => {

    const viewedRouter = express.Router();

    // Route middleware for a viewed post
    viewedRouter.use('/post/:name', (req, res, next) => {

        find().catch(error => res.status(500).send(error));

        /**
         * Call of findOne() query on the Post collection in MongoDB with a specific post name
         * @returns {Promise<void>}
         */
        async function find() {

            const post = await Post.findOne({name: req.params.name}).exec();
            console.info(`Post with matching name: ${post.name}`);

            if (post) {
                req.post = post;
                next();
            } else {
                res.status(404).send("Error: No Post found with given name");
            }
        }
    });

    // Route for updating the view count on a viewed post
    viewedRouter.route('/post/:name')
        .put((req, res) => {

            update().catch(error => res.status(500).send(error));

            async function update() {

                console.info(`Adding View to Post: ${req.post.name}`);
                const {views} = req.post;
                console.info(`Views: ${views}`);
                const postAdditionalView = {...req.post.toObject(), views: views + 1};

                // Update the post with the additional view
                await Post.update(
                    {name: postAdditionalView.name},
                    postAdditionalView
                );

                const updatedPost = await Post.findOne({name: postAdditionalView.name}).exec();

                // Also update the viewed collection with the additional view

                const viewed = await Viewed.findOne({item_id: updatedPost._id}).exec();
                console.info(`Viewed: ${viewed}`);
                let newViewed;

                // If the viewed document already exists, update it.  Otherwise create it
                if (viewed) {
                    console.info(`Already Viewed`);

                    const updatedViewed = {...viewed.toObject(), views: updatedPost.views};
                    console.info(`Updated Viewed ${JSON.stringify(updatedViewed)}`);

                    await Viewed.update(
                        {name: viewed.name},
                        updatedViewed
                    );

                    newViewed = await Viewed.findOne({name: viewed.name}).exec();

                } else {
                    console.info(`Never Viewed, Creating New Viewed Document`);

                    const newViewedObject = new Viewed({
                        item_id: updatedPost._id,
                        name: updatedPost.name,
                        type: 'post',
                        views: updatedPost.views
                    });

                    newViewed = await Viewed.create(newViewedObject);
                }

                // Add a document to the audit collection saying that someone viewed the post
                const audit = new Audit({
                    item_id: updatedPost._id,
                    type: 'post',
                    message: `Post was Viewed with Name: ${updatedPost.title}`,
                    source: 'Jarombek.com NodeJS/Express API'
                });

                await Audit.create(audit);

                res.json(newViewed);
            }
        });

    return viewedRouter;
};

module.exports = routes;