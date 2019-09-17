/**
 * Routes for the Statistics API
 * @author Andrew Jarombek
 * @since 9/16/2019
 */

import express from 'express';

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
     * '/:language' Route
     */
    languageRoute(statsRouter);

    return statsRouter;
};

/**
 *
 * @param router - the express router for the stats API
 */
const baseRoute = (router) => {

};

/**
 *
 * @param router - the express router for the stats API
 */
const languageRoute = (router) => {

};

export default routes;