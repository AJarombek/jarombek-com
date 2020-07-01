import request from 'supertest';
//import server from '../../src/server/server';

/**
 * Setup server tests for the Express/Node.js APIs with Jest and Supertest
 * @author Andrew Jarombek
 * @since 5/23/2018
 */

// Tests for the postRouter GET requests for Article Content
describe.skip("GET '/api/post/content'", () => {
    it('It responded with a 200', () => {
        return request(server).get('/api/post/content').expect(200);
    });
});

// Tests for the postRouter GET requests for Article Previews
describe.skip("GET '/api/post/preview'", () => {
    it('It responded with a 200', () => {
        return request(server).get('/api/post/preview').expect(200);
    });
});

// Tests for the viewedRouter PUT requests
describe.skip("PUT '/api/viewed/post/'", () => {
    it('It responded with a 404', () => {
        return request(server).put('/api/viewed/post/test-post').expect(404);
    });
});
