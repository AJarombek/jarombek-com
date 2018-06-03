/**
 * Routes for the User API
 * @author Andrew Jarombek
 * @since 6/2/2018
 */

const express = require('express');
const bcrypt = require('bcrypt-nodejs');

const routes = (User, Audit) => {

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

                        const hashedUser = {
                            ...user.toObject(),
                            hash
                        };

                        console.info(`Hashed User ${JSON.stringify(hashedUser)}`);

                        // Insert the new user
                        insert(hashedUser).catch((e) =>
                            res.status(500).json({error: `User Creation Failed: ${e}`})
                        );
                    }
                });

            } else {
                res.status(500).json({error: "User must have a Password"});
            }

            async function insert(user) {
                console.info(`Email: ${user.email}`);
                const existingUser = await User.findOne({email: user.email}).exec();
                console.info(`User: ${user}`);

                if (existingUser) {
                    console.info(`User already exists with email ${user.email}`);
                    res.status(400).json({error: 'User already exists'});
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
    userRouter.use('/user/:email', (req, res, next) => {

        find().catch(error => res.status(500).send(error));

        /**
         * Call of findOne() query on the User collection in MongoDB with a specific user email
         * @returns {Promise<void>}
         */
        async function find() {

            const user = await User.findOne({email: req.params.email}).exec();
            console.info(`User with matching email: ${user.email}`);

            if (user) {
                req.user = user;
                next();
            } else {
                res.status(404).send("Error: No User found with given email");
            }
        }
    });

    userRouter.route('/user/:email')
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

    return userRouter;
};

module.exports = routes;