/* eslint-disable react/prop-types */
/**
 * BlogList component
 * @author Andrew Jarombek
 * @since 8/1/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';
import {Helmet} from 'react-helmet';
import queryString from 'query-string';

import WebsiteTemplate from './WebsiteTemplate';
import Loading from "./Loading";
import Modal from './Modal';
import BlogPreview from "./BlogPreview";
import Subscribe from "./Subscribe";
import BlogDelegator from "./BlogDelegator";
import JSXConverter from "./JSXConverter";
import PaginationBar from "./PaginationBar";

class BlogList extends React.Component {

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

        // Cache the next and previous links from the server for when the state gets cleared
        this.nextCache = null;
        this.prevCache = null;

        // Only set an empty state if it does not already exist -
        // it may have been set on the server side render
        if (!this.state) {
            this.state = {};
        }
    }

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
            console.info(`Mounting Component with # of Posts: ${this.props.posts.length}`);
            this.setState({
                posts: [JSXConverter.createPostJSX(this.props.posts)]
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

        if (!this.state.posts) {
            console.info(`Fetching All Posts`);
            this.fetchPostsAndUpdate()
                .catch(err => {
                    console.error(err);
                    this.setState({posts: []});
                });
        } else {
            console.info(`Posts Were in Initial State`);
        }
    }

    /**
     * Called when the component is about to receive new props
     * @param nextProps - the props that are about to replace the existing props
     */
    componentWillReceiveProps(nextProps) {
        console.info("Inside Blog ComponentWillReceiveProps");

        const {page} = queryString.parse(nextProps.location.search);
        const postPage = page || 0;

        if (this.postsCache[`${postPage}`]) {

            console.info(`${postPage} Page of Posts Found in Cache`);
            this.setState({posts: this.postsCache[`${postPage}`]});

        } else {

            console.info(`Fetching ${postPage} Page of Posts...`);
            this.fetchPostsAndUpdate(`/api/post?page=${postPage}`)
                .catch(err => {
                    console.error(err);
                    this.setState({posts: []});
                });
        }
    }

    /**
     * Fetch multiple posts from the API and add it to the state/cache
     * @param url - optional url parameter.  It will default to a param-less url
     * @returns {Promise<void>}
     */
    async fetchPostsAndUpdate(url='/api/post') {
        const {posts, first, prev, next, last} =
            await BlogDelegator.fetchPosts(this.baseUrl, url, this.postsCache);

        console.info(posts);

        this.postsCache = posts;
        this.nextCache = next;
        this.prevCache = prev;

        this.setState({
            posts,
            first,
            prev,
            next,
            last
        });
    }

    /**
     * Through pagination, load a different batch of posts
     * @param url - the api link to load another batch of posts
     */
    loadOtherPosts(url) {
        this.setState({posts: null});

        this.fetchPostsAndUpdate(url)
            .catch(err => {
                console.error(err);
                this.setState({
                    posts: null,
                    next: null
                });
            });
    }

    /**
     * Render the JSX
     */
    render() {
        const {posts, first, prev, next, last} = this.state;
        console.log('Inside Blog Render');
        console.info(this.state);
        return (
            <WebsiteTemplate subscribeAction={ () => this.setState({subscribing: true}) }>
                <div className="jarombek-background">
                    <div className="jarombek-blog">
                        <Helmet>
                            <title>Andrew Jarombek&#39;s Software Development Blog</title>
                            <meta name="author" content="Andrew Jarombek" />
                            <meta name="description"
                                  content={`Andrew Jarombek's Software Development Blog &
                                    Discovery Posts`} />
                            <link rel="canonical" href="https://jarombek.com/blog" />
                            <link rel="icon" href={ require(`./assets/jarombek.png`) } />
                        </Helmet>
                        <div className="jarombek-posts-grid">
                            { (posts) ?
                                posts.map(post =>
                                    <BlogPreview key={post.name} {...post} />
                                ):
                                <Loading className="jarombek-blog-list-none" />
                            }
                        </div>
                        <p className="jarombek-blog-list-footer">
                            <PaginationBar move={(link) => this.loadOtherPosts(link)}
                                           first={first} previous={prev} current={prev + 1}
                                           next={next} last={last}/>
                        </p>
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

export default BlogList;