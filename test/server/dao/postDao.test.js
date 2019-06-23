/**
 * Testing the Post Data Access Object
 * @author Andrew Jarombek
 * @since 6/23/2019
 */

import PostDao from '../../../src/server/dao/postDao';
import mockingoose from 'mockingoose';
import Post from '../../../src/server/model/post';
import PostContent from '../../../src/server/model/postContent';

describe('getPaginatedPosts()', () => {

    const MockPostDao = PostDao;
    MockPostDao.getAll = (page, limit) => `${page},${limit}`;
    MockPostDao.getQueried = (page, limit, query) => `${page},${limit},${query}`;

    it('should invoke getAll() if query is null', async () => {
        const reponse = await MockPostDao.getPaginatedPosts(1, 12, null);
        expect(reponse).toEqual("1,12");
    });

    it('should invoke getAll() if query is "_"', async () => {
        const reponse = await MockPostDao.getPaginatedPosts(2, 6, "_");
        expect(reponse).toEqual("2,6");
    });

    it('should invoke getQueried() if query is "javascript"', async () => {
        const reponse = await MockPostDao.getPaginatedPosts(1, 12, "javascript");
        expect(reponse).toEqual("1,12,javascript");
    });
});

describe('getPaginatedPostPreviews()', () => {

    const MockPostDao = PostDao;
    MockPostDao.getAllPreviews = (page, limit) => `${page},${limit}`;
    MockPostDao.getQueriedPreviews = (page, limit, query) => `${page},${limit},${query}`;

    it('should invoke getAllPreviews() if query is null', async () => {
        const reponse = await MockPostDao.getPaginatedPostPreviews(1, 12, null);
        expect(reponse).toEqual("1,12");
    });

    it('should invoke getAllPreviews() if query is "_"', async () => {
        const reponse = await MockPostDao.getPaginatedPostPreviews(2, 6, "_");
        expect(reponse).toEqual("2,6");
    });

    it('should invoke getQueriedPreviews() if query is "javascript"', async () => {
        const reponse = await MockPostDao.getPaginatedPostPreviews(1, 12, "javascript");
        expect(reponse).toEqual("1,12,javascript");
    });
});

describe('updatePostCountCache()', () => {

    const MockPostDao = PostDao;
    MockPostDao.postCountCache = {
        javascript: 5,
        java: 2
    };

    it('should update "_" if query is empty', async () => {
        await MockPostDao.updatePostCountCache("", () => 20);
        expect(MockPostDao.postCountCache["_"]).toEqual(20);
    });

    it("should set 'react' since it doesn't exist", async () => {
        await MockPostDao.updatePostCountCache("react", () => 3);
        expect(MockPostDao.postCountCache["react"]).toEqual(3);
    });

    it('should not update "javascript" since it already exists', async () => {
        await MockPostDao.updatePostCountCache("javascript", () => 10);
        expect(MockPostDao.postCountCache["javascript"]).not.toEqual(10);
        expect(MockPostDao.postCountCache["javascript"]).toEqual(5);
    });
});

describe('getAll()', () => {

    const postDoc = {
        _id: '5cddf74012f3b15dfd29f603'
    };

    const postContentDoc = {
        _id: '5cddf12012f3b31dfd29f603'
    };

    const postDocResult = {

    };

    it('should return the expected posts', async () => {
        mockingoose(Post).toReturn(postDoc);
        mockingoose(PostContent).toReturn(postContentDoc);

        const result = await PostDao.getAll(1, 12);
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(postDocResult);
    });
});