/**
 * Routes for the Statistics API
 * @author Andrew Jarombek
 * @since 9/16/2019
 */

import express from 'express';
import StatisticsDao from '../dao/statisticsDao';

/**
 * Create the REST API for language statistics.
 * @return {*} The express router for statistics.
 */
const routes = () => {
  const statsRouter = express.Router();

  /**
   * '/' Route
   */
  baseRoute(statsRouter);

  /**
   * '/meta' Route
   */
  metaRoute(statsRouter);

  /**
   * '/:language' Route
   */
  languageRoute(statsRouter);

  return statsRouter;
};

/**
 * Handler for the base routes of the API ('/' endpoints)
 * @param router - the express router for the stats API
 */
const baseRoute = (router) => {
  router.route('/').get(getAll);
};

/**
 * Handler for the statistics metadata routes of the API ('/meta' endpoints)
 * @param router - the express router for the stats API
 */
const metaRoute = (router) => {
  router.route('/meta').get(getMeta);
};

/**
 * Handler for the specific language routes of the API ('/:language' endpoints)
 * @param router - the express router for the stats API
 */
const languageRoute = (router) => {
  router.use('/:language', languageMiddleware);

  router.route('/:language').get(getOne);
};

/**
 * Get all the language statistics in the database.
 * @param req - HTTP request body.
 * @param res - HTTP response body.
 */
const getAll = (req, res) => {
  StatisticsDao.getAll().then(
    (stats) => {
      res.json(stats);
    },
    (reason) => {
      res.status(400).json({
        error: 'Failed to Retrieve all language statistics',
        message: reason,
      });
    },
  );
};

/**
 * Middleware for statistics routes that contain a language name parameter.  Get the statistics for
 * a language with the given name from MongoDB in this step.  Doing this in a middleware step will
 * simplify further routes.
 * @param req - HTTP request body.
 * @param res - HTTP response body.
 * @param next - the next step on middleware in the router.
 */
const languageMiddleware = (req, res, next) => {
  StatisticsDao.getByLanguageName(req.params.name).then(
    (stats) => {
      req.stats = stats;
      next();
    },
    (reason) => {
      res.status(400).json({
        error: `Failed to Retrieve Language Statistics with Name: ${req.params.name}`,
        message: reason,
      });
    },
  );
};

/**
 * Get language statistics for a programming language with a given name.  Simply return a
 * statistics object retrieved by the middleware step.
 * @param req - HTTP request body.
 * @param res - HTTP response body.
 */
const getOne = (req, res) => {
  res.json(req.stats);
};

/**
 * Get language statistics metadata from the database.
 * @param req - HTTP request body.
 * @param res - HTTP response body.
 */
const getMeta = (req, res) => {
  StatisticsDao.getMetadata().then(
    (meta) => {
      res.json(meta);
    },
    (reason) => {
      res.status(400).json({
        error: 'Failed to Retrieve Language Statistics Metadata',
        message: reason,
      });
    },
  );
};

export default routes;
