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
const getPreviewsByDate = MockPostDao.getPreviewsByDate;
const getContentByDate = MockPostDao.getContentByDate;
const updatePostCountCache = MockPostDao.updatePostCountCache;
const getQueried = MockPostDao.getQueried;
const getQueriedPreviews = MockPostDao.getQueriedPreviews;
const getByName = MockPostDao.getByName;

/**
 * Simulate the Mongoose skip(), limit(), and sort() functions.
 * @param skip - the number of posts to skip from the beginning of the array.
 * @param limit - the number of posts to return.  This effectively determines the page size.
 * @param descending - whether to sort posts by their dates in a descending or ascending order.
 * @param array - a collection of posts to compare
 */
const getByDate = (skip, limit, descending, array) => {
    let compare;
    if (descending) {
        compare = (a, b) => a.date > b.date ? 1 : -1
    } else {
        compare = (a, b) => a.date > b.date ? -1 : 1
    }

    return array
        .sort((a, b) => compare(a, b))
        .filter((item, index) => index >= skip && index < skip + limit)
};

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

    it('should return the expected posts', async () => {

        const postDocResult = [
            {
                ...postPreviewDocs[0],
                content: []
            },
            {
                ...postPreviewDocs[1],
                content: []
            },
            {
                ...postPreviewDocs[2],
                content: []
            },
            {
                ...postPreviewDocs[3],
                content: []
            }
        ];

        MockPostDao.getAll = getAll;

        mockingoose(Post).toReturn(postPreviewDocs);
        mockingoose(PostContent).toReturn(postContentDocs);

        const result = await MockPostDao.getAll(1, 4);
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(postDocResult);
    });

    it('should skip posts properly', async () => {

        // The expected result from invoking getAll(2,2)
        const postDocResult = [
            {
                ...postPreviewDocs[2],
                content: []
            },
            {
                ...postPreviewDocs[3],
                content: []
            }
        ];

        // Mock functions in the PostDao class
        MockPostDao.getAll = getAll;
        MockPostDao.getPreviewsByDate = (skip, limit, descending) => {
            return getByDate(skip, limit, descending, postPreviewDocs);
        };
        MockPostDao.getContentByDate = (skip, limit, descending) => {
            return getByDate(skip, limit, descending, postContentDocs);
        };
        MockPostDao.updatePostCountCache = (query, getCount) => `${query},${getCount}`;

        // Mock the toObject() function used by Mongoose
        Object.prototype.toObject = function () {return this};

        const result = await MockPostDao.getAll(2, 2);
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(postDocResult);
    });
});

describe('getAllPreviews()', () => {

    it('should return the expected post previews', async () => {
        MockPostDao.getAllPreviews = getAllPreviews;
        MockPostDao.getPreviewsByDate = getPreviewsByDate;
        MockPostDao.getContentByDate = getContentByDate;

        mockingoose(Post).toReturn(postPreviewDocs);

        const result = await PostDao.getAllPreviews(1, 4);
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(postPreviewDocs);
    });

    it('should skip post previews properly', async () => {

        // The expected result from invoking getAllPreviews(2,2)
        const postPreviewDocsResult = postPreviewDocs.slice(2, 4);

        mockingoose(Post).toReturn(postPreviewDocs);

        // Mock functions in the PostDao class
        MockPostDao.getPreviewsByDate = (skip, limit, descending) => {
            return getByDate(skip, limit, descending, postPreviewDocs);
        };

        // Mock the toObject() function used by Mongoose
        Object.prototype.toObject = function () {return this};

        const result = await PostDao.getAllPreviews(2, 2);
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(postPreviewDocsResult);
    });
});

describe('getQueried()', () => {

    const additionalProps = {
        previewString: null,
        content: [],
        score: 0
    };

    it('should return the expected posts', async () => {

        const expectedResult = postPreviewDocs.map((preview) => {
            return {...preview, ...additionalProps}
        });

        // Restore original getQueried() function
        MockPostDao.getQueried = getQueried;

        // Mock functions in the PostDao class
        MockPostDao.updatePostCountCache = (query, getCount) => `${query},${getCount}`;
        MockPostDao.getPreviewByTextSearch = () => postPreviewDocs;
        MockPostDao.getContentByTextSearch = () => postContentDocs;

        // Mock the toObject() function used by Mongoose
        Object.prototype.toObject = function () {return this};

        const result = await PostDao.getQueried(1, 4);
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(expectedResult);
    });

    it('should skip posts properly', async () => {

        const expectedResult = postPreviewDocs.slice(2, 4).map((preview) => {
            return {...preview, ...additionalProps}
        });

        // Restore original getQueried() function
        MockPostDao.getQueried = getQueried;

        // Mock functions in the PostDao class
        MockPostDao.updatePostCountCache = (query, getCount) => `${query},${getCount}`;
        MockPostDao.getPreviewByTextSearch = () => postPreviewDocs;
        MockPostDao.getContentByTextSearch = () => postContentDocs;

        // Mock the toObject() function used by Mongoose
        Object.prototype.toObject = function () {return this};

        const result = await PostDao.getQueried(2, 2);
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(expectedResult);
    });
});

describe('getQueriedPreviews()', () => {
    it('should return the expected posts', async () => {

        const expectedResult = postPreviewDocs;

        // Restore original getQueriedPreviews() function
        MockPostDao.getQueriedPreviews = getQueriedPreviews;

        // Mock functions in the PostDao class
        MockPostDao.updatePostCountCache = (query, getCount) => `${query},${getCount}`;
        MockPostDao.getPreviewByTextSearch = () => postPreviewDocs;

        // Mock the toObject() function used by Mongoose
        Object.prototype.toObject = function () {return this};

        const result = await PostDao.getQueriedPreviews(1, 4);
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(expectedResult);
    });

    it('should skip posts properly', async () => {

        const expectedResult = postPreviewDocs.slice(2, 4);

        // Restore original getQueriedPreviews() function
        MockPostDao.getQueriedPreviews = getQueriedPreviews;

        // Mock functions in the PostDao class
        MockPostDao.updatePostCountCache = (query, getCount) => `${query},${getCount}`;
        MockPostDao.getPreviewByTextSearch = () => postPreviewDocs;

        // Mock the toObject() function used by Mongoose
        Object.prototype.toObject = function () {return this};

        const result = await PostDao.getQueriedPreviews(2, 2);
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(expectedResult);
    });
});

describe('getByName()', () => {

    // Restore original getByName() function
    MockPostDao.getByName = getByName;

    // Mock functions in the PostDao class
    MockPostDao.getPreviewByName = (name) =>
        postPreviewDocs.filter(post => post.name === name)[0];
    MockPostDao.getContentByName = (name) =>
        postContentDocs.filter(post => post.name === name)[0];

    // Mock the toObject() function used by Mongoose
    Object.prototype.toObject = function () {return this};

    it('should get post by name', async () => {

        const expectedResult = {
            ...postPreviewDocs[1],
            content: postContentDocs[1].content
        };

        const result = await PostDao.getByName('jul-1-2019-jest-test-pt2');
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(expectedResult);
    });

    it('should return null if no post has a matching name', async () => {

        // Restore original getByName() function
        MockPostDao.getByName = getByName;

        const result = await PostDao.getByName(null);
        expect(result).toBeNull();
    });
});