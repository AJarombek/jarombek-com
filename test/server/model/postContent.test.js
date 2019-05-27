import mockingoose from 'mockingoose';
import PostContent from '../../../src/server/model/postContent';
import Post from "../../../src/server/model/post";

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

        const result = await Post.find();
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });

    it('should work with findById', async () => {
        mockingoose(PostContent).toReturn(doc, 'findOne');

        const result = await Post.findById({_id: '5cddf74012f3b15dfd29f603'});
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });

    it('should work with update', async () => {
        mockingoose(Post).toReturn(doc, 'update');

        const result = await Post
            .update({
                name: 'may-26-2019-jest-test'
            }).where({
                _id: '5cddf74012f3b15dfd29f603'
            });

        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });
});