/**
 * Data Access Object for Posts
 * @author Andrew Jarombek
 * @since 8/2/2018
 */

import Post from "../model/post";

class PostDao {

    // Cache the number of existing posts so that a MongoDB query doesn't have to occur on each GET
    static postCountCache = 0;

    /**
     * Get a certain page of posts - this method is good to use for a paginated approach that
     * doesn't access all the blog posts at once.
     * @param page - the page of posts to return.  How many posts exist per page depends on the
     * limit.  The default page is 1
     * @param limit - the number of posts to return.  This effectively determines the page size
     * @return {Promise<*>} An array of posts from MongoDB
     */
    static getPaginatedPosts = async (page=1, limit=12) => {

        // the unary + coerces the strings to numbers.  It is the fastest way to
        // convert strings to numbers in JavaScript
        page = +page;
        limit = +limit;

        // Get the starting point within a MongoDB collection to query
        const skip = (page - 1) * limit;

        if (!PostDao.postCountCache) {
            PostDao.postCountCache = await Post.count({});
        }

        // Before selecting a page of posts, they but be in order with the newest posts first
        return await Post.find({}).skip(skip).limit(limit).sort({date: -1}).exec();
    }
}

export default PostDao;
