import mockingoose from 'mockingoose';
import Audit from '../../../src/server/model/audit';

/**
 * Testing the Audit Mongoose Model
 * @author Andrew Jarombek
 * @since 5/27/2019
 */

// Valid Audit Document to Mock on MongoDB
const doc = {
    _id: '5cddf74012f3b15dfd29f603',
    time: "2019-05-27T16:00:00.000Z",
    item_id: "5cddf74012f3b15dfd29f603",
    type: "post",
    message: "test post viewed",
    source: 'jarombek.com'
};

describe('Audit Mongoose Client from MongoDB', () => {

    it('should work with find', async () => {
        mockingoose(Audit).toReturn(doc);

        const result = await Audit.find();
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });

    it('should work with findById', async () => {
        mockingoose(Audit).toReturn(doc, 'findOne');

        const result = await Audit.findById({_id: '5cddf74012f3b15dfd29f603'});
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });
});