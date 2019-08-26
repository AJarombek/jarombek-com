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
import SearchBar from "./SearchBar";

class BlogList extends React.Component {

    constructor(props) {
        super(props);

        switch (process.env.NODE_ENV) {
            case 'production':
                this.baseUrl = 'https://jarombek.com';
                break;
            case 'development':
                this.baseUrl = 'https://dev.jarombek.com';
                break;
            case 'local':
                this.baseUrl = 'http://localhost:8080';
                break;
            default:
                this.baseUrl = 'https://jarombek.com';
        }

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
        if (this.props.posts) {

            const {posts} = this.props;
            const {query} = queryString.parse(this.props.location.search);

            const links = [this.props.first, this.props.prev, this.props.next, this.props.last];
            const {first, prev, next, last} = BlogDelegator.generateLinks(links);

            this.setState({
                shouldUpdate: true,
                posts: JSXConverter.createPostsJSX(posts),
                executedQuery: query,
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

        // Remove any data that was sent from the server side render.  Forgetting to do this
        // can cause strange behavior when re-constructing components client side.
        window.__STATE__ = {};

        window.scrollTo(0, 0);

        const {page, query} = queryString.parse(this.props.location.search);
        const postPage = page || 1;
        const queryUrl = query ? `&query=${query}` : '';
        const queryStr = query || "_";

        if (!this.state.posts) {
            const url = `/api/post/preview?page=${postPage}${queryUrl}`;

            this.fetchPostsAndUpdate(url, postPage, queryStr)
                .catch(() => {
                    this.setState({
                        shouldUpdate: true,
                        posts: []
                    });
                });
        }
    }

    /**
     * Called when the component is about to receive new props
     * @param nextProps - the props that are about to replace the existing props
     */
    componentWillReceiveProps(nextProps) {

        // By default React doesn't move to the top of the page when new props are received
        // and the URL changes - so we have to handle it ourselves
        window.scrollTo(0, 0);

        // Clear out the state when new props come in
        this.setState({
            shouldUpdate: true,
            posts: null,
            potentialQuery: null,
            first: null,
            prev: null,
            next: null,
            last: null
        });

        // Get the 'page' query from the URL - defaulted to 1
        const {page, query} = queryString.parse(nextProps.location.search);
        const postPage = +page || 1;
        const queryStr = query || "_";
        const queryUrl = query ? `&query=${query}` : '';

        if (this.postsCache[queryStr] && this.postsCache[queryStr][postPage]) {

            const sortedPages = Object.entries(this.pageCache[queryStr]).sort();

            const potentialPrevPage = sortedPages.filter(page => +page[0] === +postPage - 1);
            const potentialNextPage = sortedPages.filter(page => +page[0] === +postPage + 1);

            const prevPage = potentialPrevPage.length ? potentialPrevPage[0] : null;
            const nextPage = potentialNextPage.length ? potentialNextPage[0] : null;

            const potentialFirstPage = sortedPages[0];
            const potentialLastPage = sortedPages[sortedPages.length - 1];

            const firstPage = potentialFirstPage !== prevPage ? potentialFirstPage : null;
            const lastPage = potentialLastPage !== nextPage ? potentialLastPage : null;

            this.setState({
                shouldUpdate: true,
                posts: this.postsCache[queryStr][postPage],
                executedQuery: queryStr,
                first: firstPage && +firstPage[0] !== postPage ? firstPage[1] : null,
                prev: prevPage ? prevPage[1] : null,
                next: nextPage ? nextPage[1] : null,
                last: lastPage && +lastPage[0] !== postPage ? lastPage[1] : null
            });

        } else {
            const url = `/api/post/preview?page=${postPage}${queryUrl}`;
            this.fetchPostsAndUpdate(url, postPage, queryStr)
                .catch(() => {
                    this.setState({
                        shouldUpdate: true,
                        posts: []
                    });
                });
        }
    }

    /**
     * Fetch multiple posts from the API and add it to the state/cache
     * @param url - optional url parameter.  It will default to a param-less url
     * @param pageNumber - the number representing the page of blog posts to fetch.
     * It will default to the first page (1).
     * @param query -
     * @returns {Promise<void>}
     */
    async fetchPostsAndUpdate(url='/api/post/preview', pageNumber=1, query="") {
        const {posts, first, prev, next, last} =
            await BlogDelegator.fetchPosts(this.baseUrl, url);

        query = query || "_";

        // Add the newly fetched posts to the client side JS posts cache
        this.postsCache = {
            ...this.postsCache,
            [query]: {
                ...this.postsCache[query],
                [pageNumber]: posts
            }
        };

        this.setState({
            shouldUpdate: true,
            posts,
            executedQuery: query,
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
     * Compare new properties and state with existing properties and state to determine whether
     * the changes warrant a full component update.
     * @param nextProps - the new properties
     * @param nextState - the new state
     */
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.shouldUpdate;
    }

    /**
     * When a key is typed into the text search bar.  If the enter button is pressed and the
     * search bar isn't empty, execute the text search.
     * @param e - the React event that occurred (which corresponds to a DOM event)
     */
    onKeyUpSearchBar(e) {
        const query = e.target.value;
        if (e.keyCode === 13 && query) {
            this.queryPosts(query);
        }
    }

    /**
     * When the value in the text search bar changes, add it to the state under the property
     * 'potentialQuery'.  This is a query that has yet to be executed, but can be once the enter
     * key is pressed or the execution button is pressed.
     * @param e - the React event that occurred (which corresponds to a DOM event)
     */
    onChangeSearchBar(e) {
        this.setState({
            shouldUpdate: false,
            potentialQuery: e.target.value.trim()
        });
    }

    /**
     * When clicking the button to execute a text search, check if any value was entered.
     * If so, perform the text search, otherwise do nothing.
     */
    onClickSearch() {
        const {potentialQuery} = this.state;

        if (potentialQuery) {
            this.queryPosts(potentialQuery);
        }
    }

    /**
     * Fetch posts from the database with a specific query.  Add a new posts page to the browser
     * history that we will navigate to view the query.
     * @param query - a text search to perform on the database
     */
    queryPosts(query) {
        this.props.history.push(`/blog?query=${query}&page=1`);

        this.fetchPostsAndUpdate(`/api/post/preview?query="${query}"`, 1, query)
            .catch(() => {
                this.setState({
                    shouldUpdate: true,
                    posts: []
                });
            });
    }

    /**
     * Render the JSX
     */
    render() {
        const {posts, executedQuery, ...links} = this.state;
        const {page} = queryString.parse(this.props.location.search);

        const queryVar = executedQuery || "_";
        const queryUrl = executedQuery && executedQuery !== "_" ? `query=${executedQuery}&` : '';

        // Transform URL strings into objects
        const {first, prev, current, next, last} = BlogList.extractPage(links);

        // And then update the cache with the different page links
        this.pageCache = {
            ...this.pageCache,
            [queryVar]: {
                ...this.pageCache[queryVar],
                ...first.link && {[`${first.page}`]: first.link},
                ...prev.link && {[`${prev.page}`]: prev.link},
                ...current.link && {[`${current.page}`]: current.link},
                ...next.link && {[`${next.page}`]: next.link},
                ...last.link && {[`${last.page}`]: last.link}
            }
        };

        return (
            <WebsiteTemplate subscribeAction={ () =>
                this.setState({shouldUpdate: true, subscribing: true}) }>
                <div className="jarombek-background">
                    <Helmet>
                        <title>Andrew Jarombek&#39;s Software Development Blog</title>
                        <meta name="author" content="Andrew Jarombek" />
                        <meta name="description"
                              content={`Andrew Jarombek's Software Development Blog &
                                Discovery Posts ${page ? `- Page ${page}` : ''}`} />
                        <link rel="canonical"
                              href={`https://jarombek.com/blog${page ? `?page=${page}`: ''}`} />
                        <link rel="icon" href={ require(`./assets/jarombek.png`) } />
                    </Helmet>
                    { (posts) ?
                        <div className="jarombek-blog-list">
                            <div className="jarombek-blog-list-search">
                                <SearchBar onSearch={() => this.onClickSearch()}
                                        onChangeSearch={(e) => this.onChangeSearchBar(e)}
                                        onKeyPressSearch={(e) => this.onKeyUpSearchBar(e)}/>
                            </div>
                            <div className="jarombek-posts-grid">
                                {posts.map(post =>
                                    <BlogPreview key={post.name} {...post} />
                                )}
                            </div>
                        </div> :
                        <div className="jarombek-blog-list">
                            <Loading className="jarombek-blog-list-none" />
                        </div>
                    }
                    <div className="jarombek-blog-list-footer">
                        <PaginationBar first={first} previous={prev} current={current}
                                       next={next} last={last}
                                       link={`/blog?${queryUrl}page=`}/>
                    </div>
                </div>
                { (this.state.subscribing) ?
                    <Modal clickBackground={() =>
                        this.setState({shouldUpdate: true, subscribing: false})}>
                        <Subscribe exit={() =>
                            this.setState({shouldUpdate: true, subscribing: false})} />
                    </Modal> : null
                }
            </WebsiteTemplate>
        );
    }
}

export default BlogList;