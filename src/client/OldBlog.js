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
import Modal from './Modal';
import Loading from "./Loading";
import Subscribe from "./Subscribe";
import BlogDelegator from "./BlogDelegator";
import JSXConverter from "./JSXConverter";

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

        // Only set an empty state if it does not already exist -
        // it may have been set on the server side render
        if (!this.state) {
            this.state = {};
        }
    }

    static pageType = Object.freeze({SINGLE: 0, MANY: 1});

    static propTypes = {
        match: PropTypes.object.isRequired,
        posts: PropTypes.object
    };

    /**
     * Called when a component is about to mount.  Here we check if an initial state was passed
     * down from the server and act accordingly.
     * NOTE: This lifecycle call IS made on server side React.  This is simply a preparation
     * call before interacting with the DOM
     */
    componentWillMount() {
        console.info("Inside Blog ComponentWillMount");

        if (this.props.posts) {
            console.info(`Mounting Component with Post in State: ${this.props.posts.name}`);
            this.setState({
                posts: [JSXConverter.createPostJSX(this.props.posts)],
                page: Blog.pageType.SINGLE
            });
        }
    }

    /**
     * Called when the component first mounts.  Here is where we should make setup API calls
     * and initialize the state
     * NOTE: This lifecycle call is NOT made on server side React.  Mounting occurs while
     * interacting with the DOM, so this only happens on client side code
     */
    componentDidMount() {
        console.info("Inside Blog ComponentDidMount");

        console.info(this.props);

        // Get the post name from the props.  This is populated by react router
        const {name} = this.props.match.params;

        // If the post name exists, this page will display a single post.
        // Otherwise it will display many posts
        if (name) {

            if (!this.state.posts) {
                console.info(`Fetching Post with name ${name}`);
                this.fetchPostAndUpdate(name)
                    .catch(err => {
                        console.error(err);
                        this.setState({posts: []});
                    });
            } else {
                console.info(`Post Was in Initial State`);
            }

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
     * Fetch multiple posts from the API and also set the loadingNextPosts state
     * during the API call.  This will allow the component to display a loading
     * animation while the API call is made.
     * @param nextUrl - the url to load the next batch of posts
     * @return {Promise<void>}
     */
    async loadNextPosts(nextUrl) {
        this.setState({loadingNext: true});

        await this.fetchPostsAndUpdate(nextUrl)
            .catch(err => {
                console.error(err);
                this.setState({
                    posts: null,
                    loadingNext: false,
                    next: null
                });
            });

        this.setState({loadingNext: false});
    }

    /**
     * Fetch multiple posts from the API and add it to the state/cache
     * @param url - optional url parameter.  It will default to a param-less url
     * @returns {Promise<void>}
     */
    async fetchPostsAndUpdate(url='/api/post') {
        const {posts, prev, next, loaded} =
            await BlogDelegator.fetchPosts(this.baseUrl, url, this.postsCache);

        console.info(posts);

        this.postsCache = posts;
        this.nextCache = next;

        // Increment the viewed count for the loaded posts
        BlogDelegator.viewedPosts(loaded, this.baseUrl);

        this.setState({
            posts,
            prev,
            next,
            page: Blog.pageType.MANY
        });
    }

    /**
     * Fetch a single post from the API and set it to the state
     * @param name - the name of the post in MongoDB
     */
    async fetchPostAndUpdate(name) {
        const {posts, loaded} = await BlogDelegator.fetchPost(this.baseUrl, name);
        console.info(posts);

        // Increment the viewed count for the fetched post
        BlogDelegator.viewedPost(loaded, this.baseUrl);

        this.setState({
            posts,
            prev: null,
            next: null,
            page: Blog.pageType.SINGLE
        });
    }

    /**
     * Render the JSX
     */
    render() {
        const {posts, next} = this.state;
        console.log('Inside Blog Render');
        console.info(this.state);
        return (
            <WebsiteTemplate subscribeAction={ () => this.setState({subscribing: true}) }>
                <div className="jarombek-background">
                    <div className="jarombek-blog">
                        { (this.state.page === Blog.pageType.SINGLE) ?
                            <Helmet>
                                <title>{posts[0].title}</title>
                                <meta name="author" content="Andrew Jarombek" />
                                <meta name="description"
                                      content={posts[0].description ||
                                        `${posts[0].title} | Andrew Jarombek`} />
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
                            (this.state.loadingNext) ?
                                <div className="jarombek-loading-next">
                                    <Loading />
                                </div> :
                                <PictureButton className="jarombek-blog-next" activeColor="default"
                                               passiveColor="white" size="xl"
                                               picture="./assets/arrow.png"
                                               onClick={() => this.loadNextPosts(next)}>
                                    Load More
                                </PictureButton> :
                            <Link className="jarombek-blog-next" to='/'>
                                <TitleImage className="footer-icon" src="./assets/jarombek.png"
                                            title="HOME" />
                            </Link>
                        }
                    </div>
                </div>
                { (this.state.subscribing) ?
                    <Modal clickBackground={() => this.setState({subscribing: false})}>
                        <Subscribe exit={() => this.setState({subscribing: false})} />
                    </Modal> : null
                }
            </WebsiteTemplate>
        );
    }
}

export default Blog;