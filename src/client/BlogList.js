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
        console.debug('Inside BlogList constructor');

        this.baseUrl = (process.env.NODE_ENV === 'production') ?
            'https://jarombek.com' :
            'http://localhost:8080';

        console.debug(`The environment: ${process.env.NODE_ENV}`);
        console.debug(`The URL to call: ${this.baseUrl}`);

        // Cache the posts loaded from the server for when the state gets cleared
        this.postsCache = {};

        // Cache the pagination links from the server for when the state gets cleared
        this.pageCache = {};

        // Only set an empty state if it does not already exist -
        // it may have been set on the server side render
        if (!this.state) {
            this.state = {};
        }
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        posts: PropTypes.array
    };

    /**
     * Called when a component is about to mount.  Here we check if an initial state was passed
     * down from the server and act accordingly.
     * NOTE: This lifecycle call IS made on server side React.  This is simply a preparation
     * call before interacting with the DOM
     */
    componentWillMount() {
        console.debug("Inside BlogList ComponentWillMount");

        if (this.props.posts) {

            const {posts} = this.props;

            const links = [this.props.first, this.props.prev, this.props.next, this.props.last];

            console.info(links);
            const {first, prev, next, last} = BlogDelegator.generateLinks(links);

            console.info(`Mounting Component with # of Posts: ${posts.length}`);
            this.setState({
                posts: JSXConverter.createPostsJSX(posts),
                first,
                prev,
                next,
                last
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
        console.debug("Inside BlogList ComponentDidMount");

        console.debug(this.props);
        window.scrollTo(0, 0);

        const {page} = queryString.parse(this.props.location.search);
        const postPage = page || 1;

        if (!this.state.posts) {
            console.info(`Fetching All Posts`);
            this.fetchPostsAndUpdate(`/api/post/preview?page=${postPage}`, postPage)
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
        console.debug("Inside BlogList ComponentWillReceiveProps");

        // By default React doesn't move to the top of the page when new props are received
        // and the URL changes - so we have to handle it ourselves
        window.scrollTo(0, 0);
        this.setState({posts: null});

        // Get the 'page' query from the URL - defaulted to 1
        const {page} = queryString.parse(nextProps.location.search);
        const postPage = +page || 1;

        if (this.postsCache[`${postPage}`]) {

            console.info(`${postPage} Page of Posts Found in Cache`);

            const sortedPages = Object.entries(this.pageCache).sort();
            console.debug(sortedPages);

            const potentialPrevPage = sortedPages.filter(page => +page[0] === +postPage - 1);
            const potentialNextPage = sortedPages.filter(page => +page[0] === +postPage + 1);

            const prevPage = potentialPrevPage.length ? potentialPrevPage[0] : null;
            const nextPage = potentialNextPage.length ? potentialNextPage[0] : null;

            const potentialFirstPage = sortedPages[1];
            const potentialLastPage = sortedPages[sortedPages.length - 1];

            const firstPage = potentialFirstPage !== prevPage ? potentialFirstPage : null;
            const lastPage = potentialLastPage !== nextPage ? potentialLastPage : null;

            this.setState({
                posts: this.postsCache[`${postPage}`],
                first: firstPage && +firstPage[0] !== postPage ? firstPage[1] : null,
                prev: prevPage ? prevPage[1] : null,
                next: nextPage ? nextPage[1] : null,
                last: lastPage && +lastPage[0] !== postPage ? lastPage[1] : null
            });

        } else {

            console.info(`Fetching ${postPage} Page of Posts...`);
            this.fetchPostsAndUpdate(`/api/post/preview?page=${postPage}`, postPage)
                .catch(err => {
                    console.error(err);
                    this.setState({posts: []});
                });
        }
    }

    /**
     * Fetch multiple posts from the API and add it to the state/cache
     * @param url - optional url parameter.  It will default to a param-less url
     * @param pageNumber - the number representing the page of blog posts to fetch.
     * It will default to the first page (1).
     * @returns {Promise<void>}
     */
    async fetchPostsAndUpdate(url='/api/post/preview', pageNumber=1) {
        const {posts, first, prev, next, last} =
            await BlogDelegator.fetchPosts(this.baseUrl, url);

        // Add the newly fetched posts to the client side JS posts cache
        this.postsCache = {
            ...this.postsCache,
            [`${pageNumber}`]: posts
        };

        this.setState({
            posts,
            first,
            prev,
            next,
            last
        });
    }

    /**
     * Take in a bunch of urls and parse their queries.  This is done to get the page that
     * they reference.
     * @param first - the first page of blog posts
     * @param prev - the previous page of blog posts in relation to the current page being viewed
     * @param next - the next page of blog posts in relation to the current page being viewed
     * @param last - the last page of blog posts
     * @return {object} an object containing nested objects with links to other pages and other
     * page numbers
     */
    static extractPage({first, prev, next, last}) {

        // Define an empty object shell with an empty page field.  This is used to simplify the
        // return object structure, avoiding nulls
        const emptyPage = {query: {page: null}};

        const firstPage = first ? queryString.parseUrl(first) : emptyPage;
        const prevPage = prev ? queryString.parseUrl(prev) : emptyPage;
        const nextPage = next ? queryString.parseUrl(next) : emptyPage;
        const lastPage = last ? queryString.parseUrl(last) : emptyPage;

        return {
            first: {
                page: +firstPage.query.page,
                link: first
            },
            prev: {
                page: +prevPage.query.page,
                link: prev
            },
            current: {
                page: +prevPage.query.page + 1
            },
            next: {
                page: +nextPage.query.page,
                link: next
            },
            last: {
                page: +lastPage.query.page,
                link: last
            }
        }
    }

    /**
     * Render the JSX
     */
    render() {
        const {posts, ...links} = this.state;
        const {first, prev, current, next, last} = BlogList.extractPage(links);
        const {page} = queryString.parse(this.props.location.search);

        this.pageCache = {
            ...this.pageCache,
            [`${first.page}`]: first.link || this.pageCache[`${first.page}`],
            [`${prev.page}`]: prev.link || this.pageCache[`${prev.page}`],
            [`${current.page}`]: current.link || this.pageCache[`${current.page}`],
            [`${next.page}`]: next.link || this.pageCache[`${next.page}`],
            [`${last.page}`]: last.link || this.pageCache[`${last.page}`]
        };

        console.debug('Inside BlogList Render');
        console.debug(this.state);
        return (
            <WebsiteTemplate subscribeAction={ () => this.setState({subscribing: true}) }>
                <div className="jarombek-background">
                    <div className="jarombek-blog">
                        <Helmet>
                            <title>Andrew Jarombek&#39;s Software Development Blog</title>
                            <meta name="author" content="Andrew Jarombek" />
                            <meta name="description"
                                  content={`Andrew Jarombek's Software Development Blog &
                                    Discovery Posts ${page ? `- Page ${page}` : ''}`} />
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
                        <div className="jarombek-blog-list-footer">
                            <PaginationBar first={first} previous={prev} current={current}
                                           next={next} last={last} link={`/blog?page=`}/>
                        </div>
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