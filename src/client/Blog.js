/* eslint-disable react/prop-types */
/**
 * Blog component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import WebsiteTemplate from './WebsiteTemplate';
import BlogList from './BlogList';
import PictureButton from './PictureButton';
import TitleImage from './TitleImage';
import CodeSnippet from './CodeSnippet';

import './Blog.scss';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        console.log('Inside Blog constructor');

        this.postsCache = null;
        this.nextCache = null;

        this.page = Blog.ALL_POSTS;
        this.state = {};
    }

    static ALL_POSTS = 0;
    static ONE_POST = 1;

    static PropTypes = {
        match: PropTypes.object.isRequired
    };

    componentDidMount() {
        console.info("Inside Blog ComponentDidMount");

        console.info(this.props);

        const {name} = this.props.match.params;

        if (name) {
            this.setState({page: Blog.ONE_POST, prev: null, next: null});

            console.info(`Fetching Post with name ${name}`);
            this.fetchPost(name);
        } else {
            this.setState({page: Blog.ALL_POSTS});

            console.info(`Fetching All Posts`);
            this.fetchPosts();
        }
    }

    componentDidUpdate(prevProps) {
        console.info("Inside Blog componentDidUpdate");

        if (this.props.location.pathname !== '/blog' &&
            this.props.location.pathname !== prevProps.location.pathname) {

            console.info("Scrolling to Top");
            window.scrollTo(0, 0);
        }
    }

    componentWillReceiveProps(nextProps) {
        console.info("Inside Blog ComponentWillReceiveProps");

        const {name} = nextProps.match.params;

        if (!this.state.posts && !this.postsCache) {
            console.info("Fetching Posts...");

            if (name) {
                this.fetchPost(nextProps.params.name);
                this.setState({page: Blog.ONE_POST, prev: null, next: null});
            } else {
                this.fetchPosts();
                this.setState({page: Blog.ALL_POSTS});
            }

        } else {
            if (name) {
                const existingPost = this.postsCache.filter(post =>
                    post.name === name);

                if (existingPost.length >= 1) {
                    this.setState({posts: existingPost});
                } else {
                    this.fetchPost(name);
                }

                this.setState({
                    page: Blog.ONE_POST,
                    prev: null,
                    next: null
                });

            } else {
                this.setState({
                    posts: this.postsCache,
                    page: Blog.ALL_POSTS,
                    next: this.nextCache
                });
            }
        }
    }

    fetchPosts(url='/api/post') {
        fetch(`http://localhost:8080${url}`)
            .then(res => {
                const link = res.headers.get('Link');
                const total = res.headers.get('X-Total-Count');
                console.info(`Link Header: ${link}`);
                console.info(`X-Total-Count Header: ${total}`);

                const {prev, next} = this.parseLinks(link);
                this.setState({prev, next});
                this.nextCache = next;

                return res.json();
            })
            .then(json => {
                console.info(`Posts JSON: ${JSON.stringify(json)}`);

                // You cant perform a spread operator in an array on null,
                // so create an empty array if no posts exist
                const existingPosts = this.postsCache ? this.postsCache : [];

                const posts = [
                    ...existingPosts,
                    ...this.createPostsJSX(json)
                ];

                const uniquePosts = this.uniquePosts(posts);

                this.setState({posts: uniquePosts});
                this.postsCache = uniquePosts;
            })
            .catch(err => console.error(err));
    }

    fetchPost(name) {
        fetch(`http://localhost:8080/api/post/${name}`)
            .then(res => {
                return res.json();
            })
            .then(json => {
                console.info(`Posts JSON: ${JSON.stringify(json)}`);
                const post = this.createPostJSX(json);
                this.setState({posts: [post]});
            })
            .catch(err => console.error(err));
    }

    createPostsJSX(posts) {
        if (posts) {
            return posts.map(post => this.createPostJSX(post));
        } else {
            return null;
        }
    }

    createPostJSX({name, title, date, type, tags, content, sources}) {
        return {
            name,
            title,
            date,
            type,
            tags,
            content: this.createContentJSX(content),
            sources
        }
    }

    createContentJSX(content) {
        if (content) {
            return content.map(e => {
                    let Tag = e.el;
                    const attributes = e.attributes;
                    const children = e.children;
                    const value = e.value;

                    if (Tag === '#text') {
                        return value;
                    }

                    if (Tag === 'codesnippet') {
                        Tag = CodeSnippet;
                    }

                    if (Tag === 'img') {
                        const {src, ...others} = attributes;
                        return <Tag key={e.toString()} src={ require(`${src}`) }
                                    { ...others } />
                    }

                    return <Tag key={e.toString()} { ...attributes }>{value}{
                        (children) ? this.createContentJSX(children) : ""
                    }</Tag>;
                });
        } else {
            return null;
        }

    }

    parseLinks(links) {
        // Regular Expression to Parse Links
        const globalRegex = /<([a-z0-9/?&=]+)>; rel="(\w+)"/g;
        const regex = /<([a-z0-9/?&=]+)>; rel="(\w+)"/;

        const matches = links.match(globalRegex);

        const linksObject = this.generateLinks(matches, regex);
        console.info(linksObject);
        return linksObject;
    }

    generateLinks(list, regex) {
        if (list.length === 0) {
            return {};
        }

        const [link, ...remaining] = list;

        const [, url, destination] = link.match(regex);

        return {
            [`${destination}`]: url,
            ...this.generateLinks(remaining, regex)
        };
    }

    uniquePosts(posts) {
        const postsMap = new Map(posts.map((p) => [p.name, p]));

        console.info(postsMap);

        return [ ...postsMap.values() ];
    }

    render() {
        const {posts, next} = this.state;
        console.log('Inside Blog Render');
        console.info(this.state);
        return (
            <WebsiteTemplate>
                <div className="jarombek-blog-background">
                    <div className="jarombek-blog">
                        <BlogList blogList={posts} />
                        { (this.state.next) ?
                            <PictureButton className="jarombek-blog-next" activeColor="default"
                                           passiveColor="white" size="xl"
                                           picture="./assets/arrow.png"
                                           onClick={() => this.fetchPosts(next)}>
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