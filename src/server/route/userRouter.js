/**
 * Routes for the User API
 * @author Andrew Jarombek
 * @since 6/2/2018
 */

import express from 'express';
import bcrypt from 'bcrypt-nodejs';
import uuid from 'uuid/v4';
import base64 from 'base64-url';

import emails from '../fn/emails';
import UserDao from '../dao/userDao';
import User from "../model/user";

/**
 * Create the REST API for users
 * @return {*} The express router for users
 */
const routes = () => {

    const userRouter = express.Router();

    /**
     * '/' Route
     */
    baseRoute(userRouter);

    /**
     * '/filter/:email' Route
     */
    filterEmailRoute(userRouter);

    /**
     * '/verify/:code' Route
     */
    verifyCodeRoute(userRouter);

    /**
     * '/unsub/:code' Route
     */
    unsubCodeRoute(userRouter);

    return userRouter;
};

/**
 * Handler for the base routes of the API ('/' endpoints)
 * @param router - the express router for the users API
 */
const baseRoute = (router) => {
    router.route('/')
        .get(getAll)
        .post(create);
};

/**
 * Handler for the email filter routes of the API ('/filter/:email' endpoints)
 * @param router - the express router for the users API
 */
const filterEmailRoute = (router) => {
    router.use('/filter/:email', filterEmailMiddleware);

    router.route('/filter/:email')
        .get(get)
        .delete(deleteOne);
};

/**
 * Handler for the verify code routes of the API ('/verify/:code' endpoints)
 * @param router - the express router for the users API
 */
const verifyCodeRoute = (router) => {
    router.route('/verify/:code')
        .patch(verifyCode);
};

/**
 * Handler for the unsubscribe code routes of the API ('/unsub/:code' endpoints)
 * @param router - the express router for the users API
 */
const unsubCodeRoute = (router) => {
    router.route('/unsub/:code')
        .patch(unsubCode);
};

/**
 * Get all the users in the database
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const getAll = (req, res) => {

    UserDao.getAll().then((users) => {
        res.json(users);
    }, (reason => {
        res.status(400).json({
            error: "Failed to Retrieve all users",
            message: reason
        });
    }));
};

/**
 * Create a new user in the database.  The password must be hashed before being stored, and
 * new unsubscribe and verify codes are added to the user.  If all goes smoothly with user creation,
 * a welcome email is sent to the users email address.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const create = (req, res) => {

    console.info(`Request Body: ${JSON.stringify(req.body)}`);

    const user = new User(req.body);
    console.info(`Creating User: ${user}`);

    // First make sure that the user exists and that it has a password
    if (user !== undefined && user.hash) {

        // Then hash and salt the password with bcrypt - second parameter
        // is the salt rounds, third is a callback while in progress.  We
        // pass null to automatically generate a salt and because we don't
        // need any progress updates
        bcrypt.hash(user.hash, null, null, (err, hash) => {
            if (err) {
                console.error(err);
                res.status(500).json({error: err});
            } else {

                console.info(`Original User ${JSON.stringify(user)}`);

                const verify_cd = base64.encode(uuid());
                const unsub_cd = base64.encode(uuid());

                console.info(`UUID: ${uuid()}`);

                const hashedUser = {
                    ...user.toObject(),
                    hash,
                    verify_cd,
                    unsub_cd
                };

                console.info(`Hashed User ${JSON.stringify(hashedUser)}`);

                // Insert the new user
                UserDao.insert(hashedUser).then((newUser) => {

                    // If the insert succeeds, send a welcome email
                    emails.sendWelcomeEmail(hashedUser.email, verify_cd, unsub_cd);

                    res.status(201).json(newUser);

                }, (reason) => {
                    res.status(400).json({
                        error: `User Creation Failed: ${reason}`,
                        message: reason
                    });
                });
            }
        });

    } else {
        res.status(500).json({error: "User must have a Password"});
    }
};

/**
 * Middleware for routes that contain an email filter.  Find the user with a matching email in the
 * database here and pass it down to further route handlers.
 * @param req - HTTP request body
 * @param res - HTTP response body
 * @param next - the next step on middleware in the router
 */
const filterEmailMiddleware = (req, res, next) => {

    UserDao.getByEmail(req.params.email).then((user) => {
        console.info(`User with matching email: ${user.email}`);
        req.user = user;
        next();
    }, (reason) => {
        res.status(404).json({
            error: "No User found with given email",
            message: reason
        });
    });
};

/**
 * Get a single user.  The user object is simply returned as it was retrieved from the database
 * in the middleware step.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const get = (req, res) => {
    res.json(req.user);
};

/**
 * Delete a single user from the database.  The user object comes from the middleware step.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const deleteOne = (req, res) => {
    UserDao.remove(req.user).then(() => {
        res.status(204).send();
    }, (reason => {
        res.status(400).json({
            error: "Failed to remove user",
            message: reason
        });
    }));
};

/**
 * Verify a user based on a verification code.  The user will be altered if the verification code
 * passed to the DAO matches the one for this user in the database.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const verifyCode = (req, res) => {
    UserDao.verify(req.params.code).then((user) => {
        res.status(200).json(user);
    }, (reason) => {
        res.status(400).json({
            error: "Failed to Verify user",
            message: reason
        });
    });
};

/**
 * Unsubscribe a user based on a verification code.  The user will be removed if the unsub code
 * passed to the DAO matches the one for this user in the database.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const unsubCode = (req, res) => {
    UserDao.unsub(req.params.code).then((user) => {
        res.status(200).json(user);
    }, (reason) => {
        res.status(400).json({
            error: "Failed to Unsubscribe user",
            message: reason
        });
    });
};

export default routes;