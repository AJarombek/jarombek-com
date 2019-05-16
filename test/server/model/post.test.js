import mockingoose from 'mockingoose';
import Post from '../../../src/server/model/post';

/**
 * Testing the Post Mongoose Model with Mocha
 * @author Andrew Jarombek
 * @since 5/15/2019
 */

describe('Post Mongoose Model', () => {
    it('should work with findById', async () => {
        const doc = {
            _id: '1',
            name: 'may-16-2019-jest-test',
            title: "Testing with Jest",
            description: "none",
            date: new Date('2019-05-16T12:00:00'),
            type: 'discovery',
            views: 0,
            tags: [{
                name: 'Jest',
                picture: 'jest.png',
                color: 'jest'
            }],
            preview: [],
            previewString: '',
            sources: [{
                startName: "jest",
                endName: "",
                linkName: "jest.io",
                link: "jest.io"
            }]
        };

        mockingoose(Post).toReturn(doc, 'findOne');

        const result = await Post.findById({_id: '1'})
        expect(result.toObject().toMatchObject(doc))
    });
});