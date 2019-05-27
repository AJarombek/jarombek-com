import mockingoose from 'mockingoose';
import PostContent from '../../../src/server/model/postContent';

/**
 * Testing the PostContent Mongoose Model
 * @author Andrew Jarombek
 * @since 5/26/2019
 */

// Valid PostContent Document to Mock on MongoDB
const doc = {
    _id: '5cddf74012f3b15dfd29f603',
    name: 'may-16-2019-jest-test',
    content: [],
    contentString: 'hello'
};

describe('PostContent Mongoose Client from MongoDB', () => {

    it('should work with find', async () => {
        mockingoose(PostContent).toReturn(doc);

        const result = await PostContent.find();
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });

    it('should work with findById', async () => {
        mockingoose(PostContent).toReturn(doc, 'findOne');

        const result = await PostContent.findById({_id: '5cddf74012f3b15dfd29f603'});
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });

    it('should work with update', async () => {
        mockingoose(PostContent).toReturn(doc, 'update');

        const result = await PostContent
            .update({
                name: 'may-26-2019-jest-test'
            }).where({
                _id: '5cddf74012f3b15dfd29f603'
            });

        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });
});

describe('PostContent Mongoose Validation', () => {

    it('should fail if there are missing required fields', async () => {
        const postContent = new PostContent();

        try {
            await postContent.save();
        } catch (ex) {
            console.log(ex);
            return;
        }

        // Should not reach this point
        expect(1 + 1).toBe(4);
    });

    it('should fail if there is no title field', async () => {
        const postContent = new PostContent(doc);
        postContent.name = null;

        try {
            await postContent.save();
        } catch (ex) {
            console.log(ex);
            return;
        }

        // Should not reach this point
        expect(1 + 1).toBe(4);
    });

    it('should succeed if the fields are valid', async () => {
        const postContent = new PostContent(doc);

        try {
            await postContent.save();
            return;
        } catch (ex) {
            console.log(ex);
        }

        // Should not reach this point
        expect(1 + 1).toBe(4);
    });
});