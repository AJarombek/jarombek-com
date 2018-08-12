/**
 * Routes for the User API
 * @author Andrew Jarombek
 * @since 6/2/2018
 */

const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const uuid = require('uuid/v4');
const base64 = require('base64-url');

const User = require('../model/user');
const Audit = require('../model/audit');
const emails = require('../fn/emails');

const routes = () => {

    const userRouter = express.Router();

    userRouter.route('/')
        .get((req, res) => {

            find().catch(error => res.status(500).send(error));

            async function find() {
                const users = await User.find().exec();

                res.json(users);
            }
        })
        .post((req, res) => {

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
                        insert(hashedUser).then(() => {

                            // If the insert succeeds, send a welcome email
                            emails.sendWelcomeEmail(hashedUser.email, verify_cd, unsub_cd);

                        }, (reason) => {
                            console.error(`User Creation Failed: ${reason}`);
                        });
                    }
                });

            } else {
                res.status(500).json({error: "User must have a Password"});
            }

            async function insert(user) {
                console.info(`Email: ${user.email}`);

                const existingUser = await findUserByEmail(user.email);

                console.info(`User: ${user}`);

                if (existingUser) {
                    console.info(`User already exists with email ${user.email}`);
                    res.status(400).json({error: 'User already exists'});
                    throw Error('User already exists');
                } else {

                    // The email isn't in use, so create the new user!
                    const newUser = await User.create(user);
                    console.info(`New User Created: ${newUser}`);

                    // Audit the creation of a new user
                    const audit = new Audit({
                        item_id: newUser._id,
                        type: 'user',
                        message: `Created User ${newUser.email}`,
                        source: 'Jarombek.com NodeJS/Express API'
                    });

                    await Audit.create(audit);

                    res.status(201).json(newUser);
                }
            }
        });

    // Route middleware for an existing user
    userRouter.use('/filter/:email', (req, res, next) => {

        findUserByEmail(req.params.email).then((user) => {
            console.info(`User with matching email: ${user.email}`);
            req.user = user;
            next();
        }, (reason) => {
            res.status(404).json({
                error: "No User found with given email",
                message: reason
            });
        });
    });

    userRouter.route('/filter/:email')
        .get((req, res) => {
            res.json(req.user);
        })
        .delete((req, res) => {
            remove().catch(error => res.status(500).send(error));

            async function remove() {
                await req.user.remove();

                // Should return null if it was successfully deleted
                const deleted = await User.findOne({email: req.user.email}).exec();

                // Call the catch() function if the user was not deleted
                if (deleted !== null) {
                    throw Error('User Still Exists');
                }

                // Audit the deletion of a user
                const audit = new Audit({
                    item_id: req.user._id,
                    type: 'user',
                    message: `Deleted User: ${req.user.email}`,
                    source: 'Jarombek.com NodeJS/Express API'
                });

                await Audit.create(audit);

                res.status(204).send();
            }
        });

    userRouter.route('/verify/:code')
        .patch((req, res) => {
            verifyUser(req.params.code).then((user) => {
                res.status(200).json(user);
            }, (reason) => {
                res.status(400).json({
                    error: "Failed to Verify user",
                    message: reason
                });
            });
        });

    userRouter.route('/unsub/:code')
        .patch((req, res) => {
            unsubUser(req.params.code).then((user) => {
                res.status(200).json(user);
            }, (reason) => {
                res.status(400).json({
                    error: "Failed to Unsubscribe user",
                    message: reason
                });
            });
        });

    return userRouter;
};

/**
 * Make a findOne() query on the User collection in MongoDB with a specific user email
 * @param email - the email of a user to search for
 * @return {Promise<*>}
 */
async function findUserByEmail(email) {
    return await User.findOne({
        email,
        deleted: false
    }).exec();
}

/**
 * Make a findOne() query on the User collection in MongoDB with a specific
 * verification code
 * @param code - the verification code of a user to search for
 * @return {Promise<*>}
 */
async function findUserByVerifyCode(code) {
    return await User.findOne({verify_cd: code}).exec();
}

/**
 * Make a findOne() query on the User collection in MongoDB with a specific
 * unsubscription code
 * @param code - the unsubscription code of a user to search for
 * @return {Promise<*>}
 */
async function findUserByUnsubCode(code) {
    return await User.findOne({unsub_cd: code}).exec();
}

/**
 * Verify a user and audit the update of the user in the database.  Will throw
 * an error if the user was already verified or if the user does not exist with
 * the given verification code.
 * @param code - the users verification code
 * @return {Promise<*>}
 */
async function verifyUser(code) {
    const user = await findUserByVerifyCode(code);

    console.info(`User with verification code: ${JSON.stringify(user.toObject())}`);

    // If the user has an email property we can assume it is valid
    if (user.email) {

        if (user.verified === false) {

            const {_id, ...userObject} = user.toObject();

            const verifiedUser = {
                ...userObject,
                verified: true
            };

            await User.update({
                email: user.email,
                deleted: false
            }, verifiedUser).exec();

            const updatedUser = findUserByEmail(user.email);

            const audit = new Audit({
                item_id: updatedUser._id,
                type: 'user',
                message: `Updated/Verified User ${updatedUser.email}`,
                source: 'Jarombek.com NodeJS/Express API'
            });

            await Audit.create(audit);

            return updatedUser;

        } else {
            throw `User already verified with email: ${user.email}`;
        }
    } else {
        throw `User does not exist with verification code: ${code}`;
    }
}

/**
 * Unsubscribe a user and audit the update of the user in the database.  Will throw
 * an error if the user was already deleted (unsubscribed) or if the user does not exist with
 * the given unsubscription code.
 * @param code - the users unsubscription code
 * @return {Promise<*>}
 */
async function unsubUser(code) {
    const user = await findUserByUnsubCode(code);

    console.info(`User with unsubscription code: ${JSON.stringify(user.toObject())}`);

    // If the user has an email property we can assume it is valid
    if (user.email) {

        if (user.deleted === false) {

            const {_id, ...userObject} = user.toObject();

            const deletedUser = {
                ...userObject,
                deleted: true
            };

            await User.update({
                email: user.email,
                deleted: false
            }, deletedUser).exec();

            const updatedUser = findUserByEmail(user.email);

            const audit = new Audit({
                item_id: updatedUser._id,
                type: 'user',
                message: `Deleted User ${updatedUser.email}`,
                source: 'Jarombek.com NodeJS/Express API'
            });

            await Audit.create(audit);

            return updatedUser;

        } else {
            throw `User already deleted with email: ${user.email}`;
        }
    } else {
        throw `User does not exist with unsubscription code: ${code}`;
    }
}

module.exports = routes;