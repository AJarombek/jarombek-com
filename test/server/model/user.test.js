import mockingoose from 'mockingoose';
import User from '../../../src/server/model/user';
import {saveInvalidModel, saveValidModel} from "./modelUtil";

/**
 * Testing the User Mongoose Model
 * @author Andrew Jarombek
 * @since 6/23/2019
 */

// Valid User Document to Mock on MongoDB
const doc = {
    _id: '5cddf74012f3b15dfd29f603',
    email: "test@jarombek.com",
    subscribe_date: "2019-06-23T16:00:00.000Z",
    first: "Joe",
    last: "Smoth",
    hash: '1231b1231',
    verify_cd: '010',
    unsub_cd: '101',
    verified: true,
    deleted: false
};

describe('User Mongoose Client from MongoDB', () => {

    it('should work with find', async () => {
        mockingoose(User).toReturn(doc);

        const result = await User.find();
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });

    it('should work with findById', async () => {
        mockingoose(User).toReturn(doc, 'findOne');

        const result = await User.findById({_id: '5cddf74012f3b15dfd29f603'});
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });

    it('should work with update', async () => {
        mockingoose(User).toReturn(doc, 'update');

        const result = await User
            .update({
                deleted: true
            }).where({
                _id: '5cddf74012f3b15dfd29f603'
            });

        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });
});

describe('User Mongoose Validation', () => {

    it('should fail if there are missing required fields', async () => {
        const user = new User();
        await saveInvalidModel(user);
    });

    it('should fail if there is no email field', async () => {
        const user = new User(doc);
        user.email = null;

        await saveInvalidModel(user);
    });

    it('should succeed if the fields are valid', async () => {
        const user = new User(doc);
        await saveValidModel(user);
    });
});