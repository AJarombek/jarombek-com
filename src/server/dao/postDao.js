/**
 * Data Access Object for Posts
 * @author Andrew Jarombek
 * @since 8/2/2018
 */

import Post from "../model/post";
import PostContent from "../model/postContent"

class PostDao {

    // Cache the number of existing posts so that a MongoDB query doesn't have to occur on each GET
    static postCountCache = {};

    /**
     * Get a certain page of posts - this method is good to use for a paginated approach that
     * doesn't access all the blog posts at once.
     * @param page - the page of posts to return.  How many posts exist per page depends on the
     * limit.  The default page is 1
     * @param limit - the number of posts to return.  This effectively determines the page size.
     * The default limit is 12.
     * @param query
     * @return {Promise<*>} An array of posts from MongoDB
     */
    static getPaginatedPosts = async (page=1, limit=12, query="") => {

         const skip = await PostDao.paginationPrep(page, limit);

        // Before selecting a page of posts, they but be in order with the newest posts first
        const postPreviews = await Post.find({})
                                        .skip(skip)
                                        .limit(limit)
                                        .sort({date: -1}).exec();

        const postContents = await PostContent.find({})
                                        .skip(skip)
                                        .limit(limit)
                                        .sort({date: -1}).exec();

        return postPreviews.map((post, index) => {
            return {
                ...post.toObject(),
                content: postContents[index] ? postContents[index].content : []
            }
        });
    };

    /**
     * Get a certain page of post previews - this method is good to use for a paginated approach
     * that doesn't access all the blog posts at once.
     * @param page - the page of post previews to return.  How many posts exist per page depends on
     * the limit.  The default page is 1
     * @param limit - the number of post previews to return.  This effectively determines the page
     * size.  The default limit is 12.
     * @param query
     * @return {Promise<*>} An array of post previews from MongoDB
     */
    static getPaginatedPostPreviews = async (page=1, limit=12, query="") => {
        const skip = await PostDao.paginationPrep(page, limit);

        return await Post.find({}).skip(skip).limit(limit).sort({date: -1}).exec();
    };

    /**
     * Code that both pagination post data accesses will use - reduce duplication by keeping
     * this logic in one place.  The posts to skip are determined, the page and limit inputs are
     * coerced to numbers, and the post count cache will be populated if it is empty.
     * @param page - the page of posts to return.
     * @param limit - the number of posts to return.  This effectively determines the page size.
     * @return {Promise<number>} A number of posts to skip when making the query
     */
    static paginationPrep = async (page, limit) => {
        // the unary + coerces the strings to numbers.  It is the fastest way to
        // convert strings to numbers in JavaScript
        page = +page;
        limit = +limit;

        if (!PostDao.postCountCache) {
            PostDao.postCountCache = await Post.count({});
            console.debug(`Set Post Count Cache To: ${PostDao.postCountCache}`);
        }

        // Get the starting point within a MongoDB collection to query
        return (page - 1) * limit;
    };

    static getAll = async (page=1, limit=12) => {
        page = +page;
        limit = +limit;

        const skip = (page - 1) * limit;

        const postPreviews = await Post.find({})
            .skip(skip)
            .limit(limit)
            .sort({date: -1})
            .exec();

        const postContents = await PostContent.find({})
            .skip(skip)
            .limit(limit)
            .sort({date: -1})
            .exec();

        return postPreviews.map((post, index) => {
            return {
                ...post.toObject(),
                content: postContents[index] ? postContents[index].content : []
            }
        });
    };

    static getAllPreviews = async (page=1, limit=12) => {
        page = +page;
        limit = +limit;
        const skip = (page - 1) * limit;

        return await Post.find({}).skip(skip).limit(limit).sort({date: -1}).exec();
    };

    static getQueried = async (page=1, limit=12, query="") => {
        page = +page;
        limit = +limit;
        const skip = (page - 1) * limit;

        const postPreviews = await Post.find({'$text': {'$search': query}})
            .select({'score': {'$meta': 'textScore'}})
            .sort({date: -1})
            .exec();

        const postContents = await PostContent.find({'$text': {'$search': query}})
            .select({'score': {'$meta': 'textScore'}})
            .sort({date: -1})
            .exec();

        const posts = postPreviews.map((preview, index) => {

            const combinedScore =
                (preview.score || 0) + (postContents[index] ? postContents[index].score || 0 : 0);

            return {
                ...preview.toObject(),
                previewString: null,
                content: postContents[index] ? postContents[index].content : [],
                score: combinedScore
            }
        });

        const sortedPosts = posts.sort((a, b) => b.score - a.score);
        
        return sortedPosts.slice(skip, skip + limit);
    };

    static getQueriedPreviews = async (page=1, limit=12, query="") => {
        page = +page;
        limit = +limit;
    };

    /**
     * Retrieve a single post by its name field.  All posts should have this field and it should
     * be unique.  The response includes the content field of the post.
     * @param name - the name of the post
     * @return {Promise<*>} - a single post from MongoDB
     */
    static getByName = async (name) => {
        const post = await Post.findOne({name: name}).exec();
        const postContent = await PostContent.findOne({name: name}).exec();

        return {
            ...post.toObject(),
            content: postContent.content
        }
    };

    /**
     * Retrieve a single post preview by its name field.  All posts should have this field and it
     * should be unique.  The response does NOT contain the posts content field.
     * @param name - the name of the post
     * @return {Promise<*>} - a single post preview from MongoDB
     */
    static getPreviewByName = async (name) => {
        return await Post.findOne({name: name}).exec();
    };

    /**
     * Generate Link header strings based on the parameters of a paginated posts API call
     * @param page - the current page specified in the API call
     * @param limit - the max number of documents to return
     * @param url - the base url of the API (no parameters)
     * @returns {{first: string, prev: string, next: string, last: string}}
     */
    static generatePaginatedPostsLinks = (page, limit, url) => {
        const location = page * limit;

        let first = '';
        let prev = '';
        let next = '';
        let last = '';

        // If we are not on the first page of the API,
        // return the previous page and the first page urls
        if (page > 1) {
            prev = `<${url}?page=${page - 1}&limit=${limit}>; rel="prev";`;
            first = `<${url}?page=1&limit=${limit}>; rel="first";`;
        }

        // If we are not on the last page of the API, return the last page and the next page
        if (location < PostDao.postCountCache) {
            next = `<${url}?page=${page + 1}&limit=${limit}>; rel="next";`;
            last =
                `<${url}?page=${
                        Math.ceil(PostDao.postCountCache / parseFloat(limit))
                }&limit=${limit}>; rel="last";`;
        }

        return {
            first,
            prev,
            next,
            last
        }
    }
}

export default PostDao;
