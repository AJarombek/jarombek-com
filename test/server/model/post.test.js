import mockingoose from 'mockingoose';
import Post from '../../../src/server/model/post';
import {saveInvalidModel, saveValidModel} from "./modelUtil";

/**
 * Testing the Post Mongoose Model
 * @author Andrew Jarombek
 * @since 5/15/2019
 */

// Valid Post Document to Mock on MongoDB
const doc = {
    _id: '5cddf74012f3b15dfd29f603',
    name: 'may-16-2019-jest-test',
    title: "Testing with Jest",
    description: "none",
    date: "2019-05-16T16:00:00.000Z",
    type: 'discovery',
    views: 0,
    tags: [{
        name: 'Jest',
        picture: 'jest.png',
        color: 'jest'
    }],
    preview: [],
    previewString: 'hello',
    sources: [{
        startName: "jest",
        endName: "",
        linkName: "jest.io",
        link: "jest.io"
    }]
};

describe('Post Mongoose Client from MongoDB', () => {

    it('should work with find', async () => {
        mockingoose(Post).toReturn(doc);

        const result = await Post.find();
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });

    it('should work with findById', async () => {
        mockingoose(Post).toReturn(doc, 'findOne');

        const result = await Post.findById({_id: '5cddf74012f3b15dfd29f603'});
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });

    it('should work with update', async () => {
        mockingoose(Post).toReturn(doc, 'update');

        const result = await Post
            .update({
                name: 'may-17-2019-jest-test',
                date: '2019-05-17T16:00:00.000Z'
            }).where({
                _id: '5cddf74012f3b15dfd29f603'
            });

        expect(JSON.parse(JSON.stringify(result))).toMatchObject(doc);
    });
});

describe('Post Mongoose Validation', () => {

    it('should fail if there are missing required fields', async () => {
        const post = new Post();
        await saveInvalidModel(post);
    });

    it('should fail if there is no title field', async () => {
        const post = new Post(doc);
        post.title = null;

        await saveInvalidModel(post);
    });

    it('should succeed if the fields are valid', async () => {
        const post = new Post(doc);
        await saveValidModel(post);
    });

    it('should succeed if the type is "retrospective"', async () => {
        const post = new Post(doc);
        post.type = 'retrospective';

        await saveValidModel(post);
    });

    it('should fail if the type is "other"', async () => {
        const post = new Post(doc);
        post.type = 'other';

        await saveInvalidModel(post);
    });
});