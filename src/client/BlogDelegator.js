/**
 * Class for calling Blog APIs for the multiple blog post components.  The Blog component
 * was getting too large and complex so moving the code that delegates to the API into a separate
 * class reduces complexity and separates concerns
 * @author Andrew Jarombek
 * @since 7/28/2018
 */

import JSXConverter from "./JSXConverter";

class BlogDelegator {

    /**
     * Fetch multiple posts from the API
     * @param baseUrl - the base of the url dependent on the environment
     * @param url - the url of the API call to make
     * @param existingPosts - the existing posts cached by the component
     * @return {Promise<{posts: *[], prev, next}>} - Once resolved, will return an
     * object with the posts, previous page of posts, next page of posts, and a list
     * of the fetched posts names
     */
    static async fetchPosts(baseUrl, url, existingPosts) {

        const response = await fetch(`${baseUrl}${url}`);

        const link = response.headers.get('Link');
        const total = response.headers.get('X-Total-Count');
        console.info(`Link Header: ${link}`);
        console.info(`X-Total-Count Header: ${total}`);

        // The only important link headers to us are prev and next
        const {prev, next} = BlogDelegator.parseLinks(link);

        const json = await response.json();

        console.info(`Posts JSON: ${JSON.stringify(json)}`);

        // You cant perform a spread operator in an array on null,
        // so create an empty array if no posts exist
        existingPosts = existingPosts || [];

        // Transform JSON to JSX
        const addedPosts = JSXConverter.createPostsJSX(json);

        // Create a list of all the new posts that were loaded from the API
        const loaded = addedPosts.map(post => post.name);
        console.info(`Names of Posts in Posts JSON: ${loaded}`);

        const posts = [
            ...existingPosts,
            ...addedPosts
        ];

        // Ensure that no posts are duplicates
        const uniquePosts = BlogDelegator.uniquePosts(posts);

        return {
            posts: uniquePosts,
            prev,
            next,
            loaded
        };
    }

    /**
     * Fetch a single post from the API
     * @param baseUrl - the base of the url dependent on the environment
     * @param name - the name of the post in MongoDB
     * @return {Promise<{posts: *[]}>} - Once resolved, will return an object with the posts
     * and the fetched post name
     */
    static async fetchPost(baseUrl, name) {
        const response = await fetch(`${baseUrl}/api/post/${name}`);

        const json = await response.json();

        console.info(`Posts JSON: ${JSON.stringify(json)}`);

        const post = JSXConverter.createPostJSX(json);

        return {posts: [post], loaded: post.name};
    }

    /**
     * Parse the Link HTTP response header
     * @param links - string representation of the Link header
     * @returns {{}} - an object with all the links
     */
    static parseLinks(links) {
        // Regular Expression to Parse Links
        const globalRegex = /<([a-z0-9/?&=]+)>; rel="(\w+)"/g;
        const regex = /<([a-z0-9/?&=]+)>; rel="(\w+)"/;

        const matches = links.match(globalRegex);

        const linksObject = BlogDelegator.generateLinks(matches, regex);
        console.info(linksObject);
        return linksObject;
    }

    /**
     * Generate an object containing all the links from the HTTP header
     * @param list - a list of all the links
     * @param regex - the regular expression that will match the Link header
     * @returns {{}} - an object of all the links where the rel is the property name and the
     * contents of the angle brackets is the property value
     */
    static generateLinks(list, regex) {

        // Base case when list is empty
        if (list.length === 0) {
            return {};
        }

        const [link, ...remaining] = list;

        const [, url, destination] = link.match(regex);

        // Recursively generateLinks until the list is empty
        return {
            [`${destination}`]: url,
            ...BlogDelegator.generateLinks(remaining, regex)
        };
    }

    /**
     * Ensure that all the posts in the array are unique
     * @param posts - an array of posts
     * @returns {*[]} - an array of posts where each name property is unique
     */
    static uniquePosts(posts) {
        const postsMap = new Map(posts.map((p) => [p.name, p]));

        console.debug(postsMap);

        return [ ...postsMap.values() ];
    }

    /**
     * Take a list of viewed posts and increment the view count on the server
     * @param names - a list of post names that were viewed
     * @param baseUrl - the base of the url dependent on the environment
     */
    static viewedPosts(names, baseUrl) {
        names.forEach(name => this.viewedPost(name, baseUrl));
    }

    /**
     * Take a post name and increment the count for the corresponding post on the server
     * @param name - a post name that was viewed
     * @param baseUrl - the base of the url dependent on the environment
     */
    static viewedPost(name, baseUrl) {
        console.info(`PUT ${baseUrl}/api/viewed/post/${name}`);
        fetch(`${baseUrl}/api/viewed/post/${name}`, {method: 'PUT'});
    }
}

export default BlogDelegator;