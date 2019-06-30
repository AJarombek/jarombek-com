/**
 * Testing the Post Data Access Object
 * @author Andrew Jarombek
 * @since 6/23/2019
 */

import PostDao from '../../../src/server/dao/postDao';
import mockingoose from 'mockingoose';
import Post from '../../../src/server/model/post';
import PostContent from '../../../src/server/model/postContent';

// Post Documents for testing

const postPreviewDocs = [
    {
        _id: '5cddf74012f3b15dfd29f603',
        name: 'jun-30-2019-jest-test-pt1',
        title: "Testing with Jest Part I",
        description: "none",
        date: "2019-06-30T16:00:00.000Z",
        type: 'discovery',
        preview: [],
        previewString: 'jest I'
    },
    {
        _id: '5cddf74012f3b31dfd29f603',
        name: 'jul-1-2019-jest-test-pt2',
        title: "Testing with Jest Part II",
        description: "none",
        date: "2019-07-01T16:00:00.000Z",
        type: 'discovery',
        preview: [],
        previewString: 'jest II'
    },
    {
        _id: '5cddf74031f3b12dfd29f603',
        name: 'jul-2-2019-jest-test-pt3',
        title: "Testing with Jest Part III",
        description: "none",
        date: "2019-07-02T16:00:00.000Z",
        type: 'discovery',
        preview: [],
        previewString: 'jest III'
    },
    {
        _id: '5cddf74002f3b26dfd29f603',
        name: 'jul-3-2019-jest-test-pt4',
        title: "Testing with Jest Part IV",
        description: "none",
        date: "2019-07-03T16:00:00.000Z",
        type: 'discovery',
        preview: [],
        previewString: 'jest IV'
    }
];

const postContentDocs = [
    {
        _id: '5cddf74012f3b15dfd29f603',
        name: 'jun-30-2019-jest-test-pt1',
        content: [],
        contentString: 'Jest 1'
    },
    {
        _id: '5cddf74012f3b31dfd29f603',
        name: 'jul-1-2019-jest-test-pt2',
        content: [],
        contentString: 'Jest 2'
    },
    {
        _id: '5cddf74031f3b12dfd29f603',
        name: 'jul-2-2019-jest-test-pt3',
        content: [],
        contentString: 'Jest 3'
    },
    {
        _id: '5cddf74002f3b26dfd29f603',
        name: 'jul-3-2019-jest-test-pt4',
        content: [],
        contentString: 'Jest 4'
    }
];

// Create a mock of the PostDao class.  Save methods which are monkey-patched for future use.
const MockPostDao = PostDao;
const getAll = MockPostDao.getAll;
const getAllPreviews = MockPostDao.getAllPreviews;

describe('getPaginatedPosts()', () => {

    it('should invoke getAll() if query is null', async () => {
        MockPostDao.getAll = (page, limit) => `${page},${limit}`;

        const reponse = await MockPostDao.getPaginatedPosts(1, 12, null);
        expect(reponse).toEqual("1,12");
    });

    it('should invoke getAll() if query is "_"', async () => {
        MockPostDao.getAll = (page, limit) => `${page},${limit}`;

        const reponse = await MockPostDao.getPaginatedPosts(2, 6, "_");
        expect(reponse).toEqual("2,6");
    });

    it('should invoke getQueried() if query is "javascript"', async () => {
        MockPostDao.getQueried = (page, limit, query) => `${page},${limit},${query}`;

        const reponse = await MockPostDao.getPaginatedPosts(1, 12, "javascript");
        expect(reponse).toEqual("1,12,javascript");
    });
});

describe('getPaginatedPostPreviews()', () => {

    it('should invoke getAllPreviews() if query is null', async () => {
        MockPostDao.getAllPreviews = (page, limit) => `${page},${limit}`;

        const reponse = await MockPostDao.getPaginatedPostPreviews(1, 12, null);
        expect(reponse).toEqual("1,12");
    });

    it('should invoke getAllPreviews() if query is "_"', async () => {
        MockPostDao.getAllPreviews = (page, limit) => `${page},${limit}`;

        const reponse = await MockPostDao.getPaginatedPostPreviews(2, 6, "_");
        expect(reponse).toEqual("2,6");
    });

    it('should invoke getQueriedPreviews() if query is "javascript"', async () => {
        MockPostDao.getQueriedPreviews = (page, limit, query) => `${page},${limit},${query}`;

        const reponse = await MockPostDao.getPaginatedPostPreviews(1, 12, "javascript");
        expect(reponse).toEqual("1,12,javascript");
    });
});

describe('updatePostCountCache()', () => {

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

    const postDocResult = [{
        _id: '5cddf74012f3b15dfd29f603',
        name: 'jun-30-2019-jest-test',
        title: "Testing with Jest Part IV",
        description: "none",
        date: "2019-06-30T16:00:00.000Z",
        type: 'discovery',
        preview: [],
        previewString: 'jest 4',
        content: []
    }];

    it('should return the expected posts', async () => {
        MockPostDao.getAll = getAll;

        mockingoose(Post).toReturn(postPreviewDocs);
        mockingoose(PostContent).toReturn(postContentDocs);

        const result = await PostDao.getAll(1, 1);
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(postDocResult);
    });
});

describe('getAllPreviews()', () => {

    it('should return the expected post previews', async () => {
        MockPostDao.getAllPreviews = getAllPreviews;

        mockingoose(Post).toReturn(postPreviewDocs);

        const result = await PostDao.getAllPreviews(1, 4);
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(postPreviewDocs);
    });
});