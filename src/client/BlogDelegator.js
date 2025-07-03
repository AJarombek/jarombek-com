/**
 * Class for calling Blog APIs for the multiple blog post components.  The Blog component
 * was getting too large and complex so moving the code that delegates to the API into a separate
 * class reduces complexity and separates concerns
 * @author Andrew Jarombek
 * @since 7/28/2018
 */

import JSXConverter from './JSXConverter';

class BlogDelegator {
  /**
   * Fetch multiple posts from the API
   * @param {string} baseUrl - the base of the url dependent on the environment
   * @param {string} url - the url of the API call to make
   * @return {Promise<{posts: *[], prev, next}>} - Once resolved, will return an
   * object with the posts, previous page of posts, next page of posts, and a list
   * of the fetched posts names
   */
  static async fetchPosts(baseUrl, url) {
    const response = await fetch(`${baseUrl}${url}`);
    const link = response.headers.get('Link');

    // The only important link header is last
    const { last } = BlogDelegator.parseLinks(link);

    const json = await response.json();

    // Transform JSON to JSX
    const posts = JSXConverter.createPostsJSX(json);

    return { posts, last };
  }

  /**
   * Fetch a single post from the API
   * @param {string} baseUrl - the base of the url dependent on the environment
   * @param {string} name - the name of the post in MongoDB
   * @return {Promise<{post: {}, loaded: *}>} - Once resolved, will return an object with the post
   * and the fetched post name
   */
  static async fetchPost(baseUrl, name) {
    const response = await fetch(`${baseUrl}/api/post/content/${name}`);

    const json = await response.json();
    const post = JSXConverter.createPostJSX(json);

    return { post: post, loaded: post.name };
  }

  /**
   * Parse the Link HTTP response header
   * @param {string} links - string representation of the Link header
   * @returns {{}} - an object with all the links
   */
  static parseLinks(links) {
    // Regular Expression to Parse Links
    const globalRegex = /<([a-z0-9/?&="]+)>; rel="(\w+)"/g;
    const regex = /<([a-z0-9/?&="]+)>; rel="(\w+)"/;

    const matches = links.match(globalRegex);
    return BlogDelegator.generateLinks(matches, regex);
  }

  /**
   * Generate an object containing all the links from the HTTP header
   * @param {string[]} list - a list of all the links
   * @param {RegExp} regex - the regular expression that will match the Link header
   * @returns {{}} - an object of all the links where the rel is the property name and the
   * contents of the angle brackets is the property value
   */
  static generateLinks(list, regex = /<([a-z0-9/?&="]+)>; rel="(\w+)"/) {
    // Base case when list is empty
    if (!list || list.length === 0) {
      return {};
    }

    const [link, ...remaining] = list;

    if (link) {
      const [, url, destination] = link.match(regex);

      // Recursively generateLinks until the list is empty
      return {
        [`${destination}`]: url,
        ...BlogDelegator.generateLinks(remaining, regex),
      };
    } else {
      return {
        ...BlogDelegator.generateLinks(remaining, regex),
      };
    }
  }
}

export default BlogDelegator;
