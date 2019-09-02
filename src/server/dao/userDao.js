/**
 * Data Access Object for Users
 * @author Andrew Jarombek
 * @since 8/2/2018
 */

import User from "../model/user";
import Audit from '../model/audit';

class UserDao {

    /**
     * Get all the users in the MongoDB database
     * @return {Promise<*>} a list of users from MongoDB
     */
    static getAll = async () => {
        return await User.find().exec();
    };

    /**
     * Make a findOne() query on the User collection in MongoDB with a specific user email
     * @param email - the email of a user to search for
     * @return {Promise<*>}
     */
    static getByEmail = async (email) => {
        return await User.findOne({
            email,
            deleted: false
        }).exec();
    };

    /**
     * Make a findOne() query on the User collection in MongoDB with a specific
     * verification code
     * @param code - the verification code of a user to search for
     * @return {Promise<*>}
     */
    static getByVerifyCode = async (code) => {
        return await User.findOne({verify_cd: code}).exec();
    };

    /**
     * Make a findOne() query on the User collection in MongoDB with a specific
     * unsubscription code
     * @param code - the unsubscription code of a user to search for
     * @return {Promise<*>}
     */
    static getByUnsubCode = async (code) => {
        return await User.findOne({unsub_cd: code}).exec();
    };

    /**
     * Insert a new user into the User collection.  A new document will be added to the audit
     * collection noting the new users creation.
     * @param user - an object representing a user
     * @return {Promise<*>} the newly created user once resolved, or an error message on failure
     */
    static insert = async (user) => {
        const existingUser = await UserDao.getByEmail(user.email);

        if (existingUser) {
            throw Error(`User already exists with email ${user.email}`);
        } else {
            // The email isn't in use, so create the new user!
            const newUser = await User.create(user);

            // Audit the creation of a new user
            const audit = new Audit({
                item_id: newUser._id,
                type: 'user',
                message: `Created User ${newUser.email}`,
                source: 'Jarombek.com NodeJS/Express API'
            });

            await Audit.create(audit);

            return newUser;
        }
    };

    /**
     * Remove a user from the database based on the users email.  A new document will be added to
     * the audit collection noting the users removal.
     * @param user - an object representing a user
     * @return {Promise<void>} a promise that resolves once the function finishes
     */
    static remove = async (user) => {
        await user.remove();

        // Should return null if it was successfully deleted
        const deleted = await User.findOne({email: user.email}).exec();

        // Call the catch() function if the user was not deleted
        if (deleted !== null) {
            throw Error('User Still Exists');
        }

        // Audit the deletion of a user
        const audit = new Audit({
            item_id: user._id,
            type: 'user',
            message: `Deleted User: ${user.email}`,
            source: 'Jarombek.com NodeJS/Express API'
        });

        await Audit.create(audit);
    };

    /**
     * Unsubscribe a user and audit the update of the user in the database.  Will throw
     * an error if the user was already deleted (unsubscribed) or if the user does not exist with
     * the given unsubscription code.
     * @param code - the users unsubscription code
     * @return {Promise<*>}
     */
    static unsub = async (code) => {
        const user = await UserDao.getByUnsubCode(code);

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

                const updatedUser = UserDao.getByEmail(user.email);

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
    };

    /**
     * Verify a user and audit the update of the user in the database.  Will throw
     * an error if the user was already verified or if the user does not exist with
     * the given verification code.
     * @param code - the users verification code
     * @return {Promise<*>}
     */
    static verify = async (code) => {
        const user = await UserDao.getByVerifyCode(code);

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

                const updatedUser = UserDao.getByEmail(user.email);

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
}

export default UserDao;