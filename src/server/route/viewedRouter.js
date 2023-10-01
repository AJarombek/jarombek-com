/**
 * Routes for the Post API
 * @author Andrew Jarombek
 * @since 5/17/2018
 */

import express from 'express';
import ViewedDao from '../dao/viewedDao';
import PostDao from '../dao/postDao';

/**
 * Create the REST API for viewed items
 * @return {*} The express router for viewed items
 */
const routes = () => {
  const viewedRouter = express.Router();

  /**
   * '/post/:name' Route
   */
  postNameRoute(viewedRouter);

  return viewedRouter;
};

/**
 * Handler for the viewed post name routes of the API ('/post/:name' endpoints)
 * @param router - the express router for the viewed API
 */
const postNameRoute = (router) => {
  router.use('/post/:name', postNameMiddleware);

  router.route('/post/:name').put(update);
};

/**
 * Middleware for routes that contain a post name.  Get a post with a matching name from the
 * database to be used in the next route handler.
 * @param req - HTTP request body
 * @param res - HTTP response body
 * @param next - the next step on middleware in the router
 */
const postNameMiddleware = (req, res, next) => {
  PostDao.getByName(req.params.name).then(
    (post) => {
      req.post = post;
      next();
    },
    (reason) => {
      res.status(404).json({
        error: 'No Post found with given name',
        message: reason,
      });
    },
  );
};

/**
 * Update the viewed count for a post in the database.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const update = (req, res) => {
  ViewedDao.update(req.post).then(
    (newViewed) => {
      res.json(newViewed);
    },
    (reason) => {
      if (req.post) {
        res.status(400).json({
          error: `Failed to Update Post Viewed Count: ${req.post.name}`,
          message: reason,
        });
      } else {
        res.status(404).json({
          error: 'No Post found in the HTTP request parameters.',
          message: reason,
        });
      }
    },
  );
};

export default routes;
