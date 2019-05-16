const chai = require('chai');
const Post =  require('../../../src/server/model/post');

/**
 * Testing the Post Mongoose Model with Mocha
 * @author Andrew Jarombek
 * @since 5/15/2019
 */

const expect = chai.expect;

describe('post-model', () => {

    it('should be invalid if name is empty', function () {
        const post = Post();

        post.validate((err) => {
            expect(err.errors.name).to.exist;
            done();
        });
    });

});