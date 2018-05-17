/* eslint-disable react/prop-types */
/**
 * Blog component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import 'isomorphic-fetch';
import {Helmet} from 'react-helmet';

import WebsiteTemplate from './WebsiteTemplate';
import BlogList from './BlogList';
import PictureButton from './PictureButton';
import TitleImage from './TitleImage';
import CodeSnippet from './CodeSnippet';
import Definition from './Definition';

import './Blog.scss';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        console.log('Inside Blog constructor');

        this.baseUrl = (process.env.NODE_ENV === 'production') ?
            'https://jarombek.com' :
            'http://localhost:8080';

        console.info(`The environment: ${process.env.NODE_ENV}`);
        console.info(`The URL to call: ${this.baseUrl}`);

        // Cache the posts loaded from the server for when the state gets cleared
        this.postsCache = null;

        // Cache the next link from the server for when the state gets cleared
        this.nextCache = null;

        this.state = {};
    }

    static pageType = Object.freeze({SINGLE: 0, MANY: 1});

    static propTypes = {
        match: PropTypes.object.isRequired
    };

    /**
     * Called when the component first mounts.  Here is where we should make setup API calls
     * and initialize the state
     */
    componentDidMount() {
        console.info("Inside Blog ComponentDidMount");

        console.info(this.props);

        // Get the post name from the props.  This is populated by react router
        const {name} = this.props.match.params;

        // If the post name exists, this page will display a single post.
        // Otherwise it will display many posts
        if (name) {

            console.info(`Fetching Post with name ${name}`);
            this.fetchPostAndUpdate(name)
                .catch(err => {
                    console.error(err);
                    this.setState({posts: []});
                });

        } else {

            console.info(`Fetching All Posts`);
            this.fetchPostsAndUpdate()
                .catch(err => {
                    console.error(err);
                    this.setState({posts: []});
                });

        }
    }

    /**
     * Called after the component updated.
     * @param prevProps - the props of the component before the update occurred
     */
    componentDidUpdate(prevProps) {
        console.info("Inside Blog componentDidUpdate");

        // Check to see if we are on a page displaying a single post.
        // If so, scroll to the top of the page.  This is needed because by default
        // react router will change routes and not scroll back to the top
        if (this.props.location.pathname !== '/blog' &&
            this.props.location.pathname !== prevProps.location.pathname) {

            console.info("Scrolling to Top");
            window.scrollTo(0, 0);
        }
    }

    /**
     * Called when the component is about to receive new props
     * @param nextProps - the props that are about to replace the existing props
     */
    componentWillReceiveProps(nextProps) {
        console.info("Inside Blog ComponentWillReceiveProps");

        const {name} = nextProps.match.params;

        // When the props change, we want to change the posts that are displayed
        // First check to see if posts are currently in the state or the cache
        if (!this.state.posts && !this.postsCache) {
            console.info("Fetching Posts...");

            // If the posts are NOT in the state or cache, fetch them from the API
            if (name) {
                this.fetchPostAndUpdate(nextProps.params.name)
                    .catch(err => {
                        console.error(err);
                        this.setState({posts: []});
                    });

            } else {
                this.fetchPostsAndUpdate()
                    .catch(err => {
                        console.error(err);
                        this.setState({posts: []});
                    });
            }

        } else {
            // If the posts are in the state or cache, we can reuse the existing posts
            if (name) {

                // If the page is displaying a single post, try to find it in the cache
                const existingPost = this.postsCache.filter(post =>
                    post.name === name);

                // If you find it, set it to the state otherwise fetch it from the API
                if (existingPost.length >= 1) {
                    this.setState({
                        posts: existingPost,
                        next: null,
                        prev: null,
                        page: Blog.pageType.SINGLE
                    });
                } else {
                    this.fetchPostAndUpdate(name)
                        .catch(err => {
                            console.error(err);
                            this.setState({posts: []});
                        });
                }

            } else {

                // Make sure the cache isn't empty.  This case can happen if the user is
                // coming from an individual post and hasn't yet visited the main post page
                if (this.postsCache) {

                    // If the page is displaying multiple posts and the cache has contents,
                    // simply set the state to whatever is in the caches
                    this.setState({
                        posts: this.postsCache,
                        next: this.nextCache,
                        page: Blog.pageType.MANY
                    });
                } else {
                    // Otherwise make a fresh API call
                    this.fetchPostsAndUpdate()
                        .catch(err => {
                            console.error(err);
                            this.setState({posts: []});
                        });
                }
            }
        }
    }

    /**
     * Fetch multiple posts from the API and add it to the state/cache
     * @param url - optional url parameter.  It will default to a param-less url
     * @returns {Promise<void>}
     */
    async fetchPostsAndUpdate(url='/api/post') {
        const {posts, prev, next} = await Blog.fetchPosts(this.baseUrl, url, this.postsCache);
        console.info(posts);

        this.postsCache = posts;
        this.nextCache = next;

        this.setState({
            posts,
            prev,
            next,
            page: Blog.pageType.MANY
        });
    }

    /**
     * Fetch multiple posts from the API
     * @param baseUrl - the base of the url dependent on the environment
     * @param url - the url of the API call to make
     * @param existingPosts - the existing posts cached by the component
     * @return {Promise<{posts: *[], prev, next}>} - Once resolved, will return an
     * object with the posts, previous page of posts, and next page of posts
     */
    static async fetchPosts(baseUrl, url, existingPosts) {

        const response = await fetch(`${baseUrl}${url}`);

        const link = response.headers.get('Link');
        const total = response.headers.get('X-Total-Count');
        console.info(`Link Header: ${link}`);
        console.info(`X-Total-Count Header: ${total}`);

        // The only important link headers to us are prev and next
        const {prev, next} = Blog.parseLinks(link);

        const json = await response.json();

        console.info(`Posts JSON: ${JSON.stringify(json)}`);

        // You cant perform a spread operator in an array on null,
        // so create an empty array if no posts exist
        existingPosts = existingPosts || [];

        const posts = [
            ...existingPosts,
            ...Blog.createPostsJSX(json) // Transform JSON to JSX
        ];

        // Ensure that no posts are duplicates
        const uniquePosts = Blog.uniquePosts(posts);

        return {
            posts: uniquePosts,
            prev,
            next
        };
    }

    /**
     * Fetch a single post from the API and set it to the state
     * @param name - the name of the post in MongoDB
     * @return
     */
    async fetchPostAndUpdate(name) {
        const {posts} = await Blog.fetchPost(this.baseUrl, name);
        console.info(posts);

        this.setState({
            posts,
            prev: null,
            next: null,
            page: Blog.pageType.SINGLE
        });
    }

    /**
     * Fetch a single post from the API
     * @param baseUrl - the base of the url dependent on the environment
     * @param name - the name of the post in MongoDB
     * @return {Promise<{posts: *[]}>} - Once resolved, will return an object with the posts
     */
    static async fetchPost(baseUrl, name) {
        const response = await fetch(`${baseUrl}/api/post/${name}`);

        const json = await response.json();

        console.info(`Posts JSON: ${JSON.stringify(json)}`);

        const post = Blog.createPostJSX(json);

        return {posts: [post]};
    }

    /**
     * Transform a list of posts from JSON to an object where the content property is JSX
     * so it can be displayed in the DOM
     * @param posts - a list of posts in JSON
     * @returns null if the posts is falsey, an array of posts in with the content
     * property in JSX form if posts is truthy
     */
    static createPostsJSX(posts) {
        if (posts) {
            return posts.map(post => Blog.createPostJSX(post));
        } else {
            return null;
        }
    }

    /**
     * Creates a JavaScript object for a post where the content property has been
     * transformed from JSON to JSX
     * @param name - the name of the post (this is what is displayed in the URL)
     * @param title - the title of the post
     * @param date - the date the post was created
     * @param type - the type of post [Blog, Discovery]
     * @param tags - the tags for the post, these are the different technologies discussed
     * @param content - JSON representation of the content of the post.
     * This will be transformed to JSX
     * @param sources - the sources of information for the post
     * @returns {{name: *, title: *, date: *, type: *, tags: *, content: *, sources: *}}
     * - JavaScript object representing a post
     */
    static createPostJSX({name, title, date, type, tags, content, sources}) {
        return {
            name,
            title,
            date,
            type,
            tags,
            content: Blog.createContentJSX(content),
            sources
        }
    }

    /**
     * Transform a JSON representation of HTML into JSX
     * @param content - the JSON representation of HTML
     * @returns null if content is falsey, JSX if content is truthy
     */
    static createContentJSX(content) {
        if (content) {
            return content.map(e => {
                    let Tag = e.el;
                    const attributes = e.attributes;
                    const children = e.children;
                    const value = e.value;

                    // The #text element simply represents any plain text in the HTML
                    if (Tag === '#text') {
                        return value;
                    }

                    // If the element is the React component CodeSnippet, replace the string
                    // with the Component reference.
                    if (Tag === 'codesnippet') {
                        Tag = CodeSnippet;
                    }

                    // Do a similar replacement if the element is the React component Definition
                    if (Tag === 'definition') {
                        Tag = Definition;
                    }

                    // If the tag is img there is no closing tag and we have to treat it
                    // differently.  Also we have to require() the image so that Webpack
                    // will pick it up when creating the dependency graph
                    if (Tag === 'img') {
                        const {src, ...others} = attributes;
                        return <Tag key={e.toString()} src={ require(`${src}`) }
                                    { ...others } />
                    }

                    return <Tag key={e.toString()} { ...attributes }>{value}{
                        (children) ? Blog.createContentJSX(children) : ""
                    }</Tag>;
                });
        } else {
            return null;
        }

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

        const linksObject = Blog.generateLinks(matches, regex);
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
            ...Blog.generateLinks(remaining, regex)
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
     * Render the JSX
     */
    render() {
        const {posts, next} = this.state;
        console.log('Inside Blog Render');
        console.info(this.state);
        return (
            <WebsiteTemplate>
                <div className="jarombek-blog-background">
                    <div className="jarombek-blog">
                        { (this.state.page === Blog.pageType.SINGLE) ?
                            <Helmet>
                                <title>{posts[0].title}</title>
                                <meta name="author" content="Andrew Jarombek" />
                                <meta name="description"
                                      content={posts[0].description ||
                                        `Andrew Jarombek Blog Post: ${posts[0].title}`} />
                                <link rel="canonical"
                                      href={`https://jarombek.com/blog/${posts[0].name}`} />
                                <link rel="icon" href={ require(`./assets/jarombek.png`) } />
                            </Helmet> :
                            <Helmet>
                                <title>Andrew Jarombek&#39;s Software Development Blog</title>
                                <meta name="author" content="Andrew Jarombek" />
                                <meta name="description"
                                      content={`Andrew Jarombek's Software Development Blog &
                                        Discovery Posts`} />
                                <link rel="canonical" href="https://jarombek.com/blog" />
                                <link rel="icon" href={ require(`./assets/jarombek.png`) } />
                            </Helmet>
                        }
                        <BlogList blogList={posts} />
                        { (this.state.next) ?
                            <PictureButton className="jarombek-blog-next" activeColor="default"
                                           passiveColor="white" size="xl"
                                           picture="./assets/arrow.png"
                                           onClick={() => this.fetchPostsAndUpdate(next)
                                                               .catch(err => {
                                                                   console.error(err);
                                                                   return {posts: null};
                                                               })}>
                                Load More
                            </PictureButton> :
                            <Link className="jarombek-blog-next" to='/'>
                                <TitleImage className="footer-icon" src="./assets/jarombek.png"
                                            title="HOME" />
                            </Link>
                        }
                    </div>
                </div>
            </WebsiteTemplate>
        );
    }
}

export default Blog;