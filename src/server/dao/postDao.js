/**
 * Data Access Object for Posts
 * @author Andrew Jarombek
 * @since 8/2/2018
 */

import Post from "../model/post";
import PostContent from "../model/postContent";

class PostDao {
  /**
   * Cache the number of existing posts so that a MongoDB query doesn't have to occur on each GET
   * @type {{}}
   * @example
   *  {
   *      javascript: 5,
   *      java: 2
   *  }
   */
  static postCountCache = {};

  /**
   * Get a certain page of posts - this method is good to use for a paginated approach that
   * doesn't access all the blog posts at once.  Optionally the database posts can be filtered
   * with a text search query.
   * @param page - the page of posts to return.  How many posts exist per page depends on the
   * limit.  The default page is 1
   * @param limit - the number of posts to return.  This effectively determines the page size.
   * The default limit is 12.
   * @param query - a string query to perform a text search with
   * @return {Promise<*>} An array of posts from MongoDB
   */
  static getPaginatedPosts = async (page = 1, limit = 12, query = "") => {
    return query && query !== "_"
      ? PostDao.getQueried(page, limit, query)
      : PostDao.getAll(page, limit);
  };

  /**
   * Get a certain page of post previews - this method is good to use for a paginated approach
   * that doesn't access all the blog posts at once.  Optionally the database post previews can
   * be filtered with a text search query.
   * @param page - the page of post previews to return.  How many posts exist per page depends on
   * the limit.  The default page is 1
   * @param limit - the number of post previews to return.  This effectively determines the page
   * size.  The default limit is 12.
   * @param query - a string query to perform a text search with
   * @return {Promise<*>} An array of post previews from MongoDB
   */
  static getPaginatedPostPreviews = async (
    page = 1,
    limit = 12,
    query = "",
  ) => {
    return query && query !== "_"
      ? PostDao.getQueriedPreviews(page, limit, query)
      : PostDao.getAllPreviews(page, limit);
  };

  /**
   * Populate the post count cache if it is empty for the current query.
   * @param query - a string that a text search was performed with.
   * @param getCount -
   * @return {Promise<void>}
   */
  static updatePostCountCache = async (query = "", getCount = (f) => f) => {
    query = query || "_";

    if (!PostDao.postCountCache[query]) {
      PostDao.postCountCache[query] = await getCount();
      console.info(
        `Set Post Count Cache To: ${JSON.stringify(PostDao.postCountCache)}`,
      );
    }
  };

  /**
   * Retrieve a page of posts.
   * @param page - the current page specified in the API call
   * @param limit - the max number of documents to return
   * @return {Promise<void>}
   */
  static getAll = async (page = 1, limit = 12) => {
    page = +page;
    limit = +limit;

    const skip = (page - 1) * limit;

    const postPreviews = await PostDao.getPreviewsByDate(skip, limit, true);
    const postContents = await PostDao.getContentByDate(skip, limit, true);

    await PostDao.updatePostCountCache("", async () => {
      const posts = await Post.find({});
      return posts.length;
    });

    return postPreviews.map((post, index) => {
      return {
        ...post.toObject(),
        content: postContents[index] ? postContents[index].content : [],
      };
    });
  };

  /**
   * Retrieve a page of post previews.
   * @param page - the current page specified in the API call
   * @param limit - the max number of documents to return
   * @return {Promise<*>}
   */
  static getAllPreviews = async (page = 1, limit = 12) => {
    page = +page;
    limit = +limit;
    const skip = (page - 1) * limit;

    await PostDao.updatePostCountCache("", async () => {
      const posts = await Post.find({});
      return posts.length;
    });

    const previews = await PostDao.getPreviewsByDate(skip, limit, true);

    return previews.map((preview) => preview.toObject());
  };

  /**
   * Retrieve a page of posts that match a given query.
   * @param page - the current page specified in the API call
   * @param limit - the max number of documents to return
   * @param query - a string query to perform a text search with
   * @return {Promise<void>}
   */
  static getQueried = async (page = 1, limit = 12, query = "") => {
    page = +page;
    limit = +limit;
    const skip = (page - 1) * limit;

    const postPreviews = await PostDao.getPreviewByTextSearch(query, {
      date: -1,
    });
    const postContents = await PostDao.getContentByTextSearch(query, {
      date: -1,
    });

    await PostDao.updatePostCountCache(query, () => postPreviews.length);

    const posts = postPreviews.map((preview, index) => {
      const combinedScore =
        (preview.score || 0) +
        (postContents[index] ? postContents[index].score || 0 : 0);

      return {
        ...preview.toObject(),
        previewString: null,
        content: postContents[index] ? postContents[index].content : [],
        score: combinedScore,
      };
    });

    const sortedPosts = posts.sort((a, b) => b.score - a.score);

    return sortedPosts.slice(skip, skip + limit);
  };

  /**
   * Retrieve a page of post previews that match a given query.
   * @param page - the current page specified in the API call
   * @param limit - the max number of documents to return
   * @param query - a string query to perform a text search with
   * @return {Promise<void>}
   */
  static getQueriedPreviews = async (page = 1, limit = 12, query = "") => {
    page = +page;
    limit = +limit;
    const skip = (page - 1) * limit;

    const postPreviews = await PostDao.getPreviewByTextSearch(query);

    await PostDao.updatePostCountCache(query, () => postPreviews.length);

    const paginatedPreviews = postPreviews.slice(skip, skip + limit);

    return paginatedPreviews.map((preview) => preview.toObject());
  };

  /**
   * Retrieve a single post by its name field.  All posts should have this field and it should
   * be unique.  The response includes the content field of the post.
   * @param name - the name of the post
   * @return {Promise<*>} - a single post from MongoDB
   */
  static getByName = async (name) => {
    const post = await PostDao.getPreviewByName(name);
    const postContent = await PostDao.getContentByName(name);

    if (post && postContent) {
      return {
        ...post.toObject(),
        content: postContent.content,
      };
    } else {
      return null;
    }
  };

  /**
   * Generate Link header strings based on the parameters of a paginated posts API call
   * @param page - the current page specified in the API call
   * @param limit - the max number of documents to return
   * @param url - the base url of the API (no parameters)
   * @param query - a string that a text search was performed with.
   * @returns {{first: string, prev: string, next: string, last: string}}
   */
  static generatePaginatedPostsLinks = (page, limit, url, query) => {
    const location = page * limit;

    let first = "";
    let prev = "";
    let next = "";
    let last = "";

    const queryUrl = query && query !== "_" ? `&query=${query}` : "";

    // If we are not on the first page of the API,
    // return the previous page and the first page urls
    if (page > 1) {
      prev = `<${url}?page=${page - 1}&limit=${limit}${queryUrl}>; rel="prev";`;
      first = `<${url}?page=1&limit=${limit}${queryUrl}>; rel="first";`;
    }

    // If we are not on the last page of the API, return the last page and the next page
    if (location < PostDao.postCountCache[query]) {
      next = `<${url}?page=${page + 1}&limit=${limit}${queryUrl}>; rel="next";`;
      last = `<${url}?page=${Math.ceil(
        PostDao.postCountCache[query] / parseFloat(limit),
      )}&limit=${limit}${queryUrl}>; rel="last";`;
    }

    return {
      first,
      prev,
      next,
      last,
    };
  };

  /*
   * MongoDB Queries
   */

  /**
   * Retrieve a single post preview by its name field.  All posts should have this field and it
   * should be unique.  The response does NOT contain the posts content field.
   * @param name - the name of the post
   * @return {Promise<*>} - a single post preview from MongoDB
   */
  static getPreviewByName = async (name) => {
    return await Post.findOne({ name: name }).exec();
  };

  /**
   * Retrieve the content of a single post based on its name.
   * @param name - the name of the post that the content is bound to
   * @return {Promise<*>} - a single post content from MongoDB
   */
  static getContentByName = async (name) => {
    return await PostContent.findOne({ name: name }).exec();
  };

  /**
   * Retrieve a certain number (max) of post previews.  Previews can be returned in descending
   * (newer previews first) or ascending (older previews first) order.
   * @param skip - How many previews to skip before retrieving.
   * @param limit - the maximum number of previews to return.
   * @param descending - whether or not the previews should be returned in descending date order.
   * @return {Promise<*>} - any number of post previews from MongoDB.
   */
  static getPreviewsByDate = async (skip = 0, limit = 1, descending = true) => {
    const order = descending ? -1 : 1;
    return await Post.find({})
      .skip(skip)
      .limit(limit)
      .sort({ date: order })
      .exec();
  };

  /**
   * Retrieve a certain number (max) of posts content.  Content can be returned in descending
   * (newer posts first) or ascending (older posts first) order.
   * @param skip - How many posts to skip before retrieving.
   * @param limit - the maximum number of post contents to return.
   * @param descending - whether or not the post contents should be returned in
   * descending date order.
   * @return {Promise<*>} - any number of posts content from MongoDB.
   */
  static getContentByDate = async (skip = 0, limit = 1, descending = true) => {
    const order = descending ? -1 : 1;
    return await PostContent.find({})
      .skip(skip)
      .limit(limit)
      .sort({ date: order })
      .exec();
  };

  /**
   * Retrieve post previews based on a text search.  MongoDB has basic text search capabilities.
   * @param query - a query to perform a text search on.
   * @param sortRule - a rule to sort previews that match the text search.
   * @return {Promise<*>} - any number of post previews from MongoDB.
   */
  static getPreviewByTextSearch = async (
    query = "",
    sortRule = { score: { $meta: "textScore" } },
  ) => {
    return await Post.find({ $text: { $search: query } })
      .select({ score: { $meta: "textScore" } })
      .sort(sortRule)
      .exec();
  };

  /**
   * Retrieve post contents based on a text search.  MongoDB has basic text search capabilities.
   * @param query - a query to perform a text search on.
   * @param sortRule - a rule to sort previews that match the text search.
   * @return {Promise<*>} - any number of post contents from MongoDB.
   */
  static getContentByTextSearch = async (
    query = "",
    sortRule = { score: { $meta: "textScore" } },
  ) => {
    return await PostContent.find({ $text: { $search: query } })
      .select({ score: { $meta: "textScore" } })
      .sort(sortRule)
      .exec();
  };
}

export default PostDao;
