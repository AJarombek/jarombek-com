import mockingoose from 'mockingoose';
import Viewed from '../../../src/server/model/viewed';
import {saveInvalidModel, saveValidModel} from "./modelUtil";

/**
 * Testing the Viewed Mongoose Model
 * @author Andrew Jarombek
 * @since 6/23/2019
 */

// Valid Viewed Document to Mock on MongoDB
const doc = {
    _id: '5cddf74012f3b15dfd29f603',
    name: "test-post",
    date: "2019-06-23T16:00:00.000Z",
    type: "post",
    views: 2
};

describe('Viewed Mongoose Client from MongoDB', () => {

    it('should work with find', async () => {
        mockingoose(Viewed).toReturn(doc);

        const result = await Viewed.find();
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });

    it('should work with findById', async () => {
        mockingoose(Viewed).toReturn(doc, 'findOne');

        const result = await Viewed.findById({_id: '5cddf74012f3b15dfd29f603'});
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });

    it('should work with update', async () => {
        mockingoose(Viewed).toReturn(doc, 'update');

        const result = await Viewed
            .update({
                views: 3
            }).where({
                _id: '5cddf74012f3b15dfd29f603'
            });

        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });
});

describe('Viewed Mongoose Validation', () => {

    it('should fail if there are missing required fields', async () => {
        const viewed = new Viewed();
        await saveInvalidModel(viewed);
    });

    it('should fail if there is no name field', async () => {
        const viewed = new Viewed(doc);
        viewed.name = null;

        await saveInvalidModel(viewed);
    });

    it('should succeed if the fields are valid', async () => {
        const viewed = new Viewed(doc);
        await saveValidModel(viewed);
    });

    it('should succeed if the type is "post"', async () => {
        const viewed = new Viewed(doc);
        viewed.type = 'post';

        await saveValidModel(viewed);
    });

    it('should fail if the type is "other"', async () => {
        const viewed = new Viewed(doc);
        viewed.type = 'other';

        await saveInvalidModel(viewed);
    });
});