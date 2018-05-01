/* eslint-disable react/prop-types */
/**
 * Blog component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import WebsiteTemplate from './WebsiteTemplate';
import BlogList from './BlogList';
import CodeSnippet from './CodeSnippet';

import './Blog.scss';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        console.log('Inside Blog constructor');
        this.postsCache = null;
        this.prefix = "";
        this.state = {};
    }

    static ALL_POSTS_PREFIX = "";
    static ONE_POST_PREFIX = "../";

    static PropTypes = {
        match: PropTypes.object.isRequired
    };

    componentDidMount() {
        console.info("Inside Blog ComponentDidMount");

        console.info(this.props);

        const {name} = this.props.match.params;

        if (name) {
            console.info(`Fetching Post with name ${name}`);
            this.fetchPost(name);
            this.prefix = Blog.ONE_POST_PREFIX;
        } else {
            console.info(`Fetching All Posts`);
            this.fetchPosts();
            this.prefix = Blog.ALL_POSTS_PREFIX;
        }
    }

    componentWillReceiveProps(nextProps) {
        console.info("Inside Blog ComponentWillReceiveProps");

        const {name} = nextProps.match.params;

        if (!this.state.posts && !this.postsCache) {
            console.info("Fetching Posts...");

            if (name) {
                this.fetchPost(nextProps.params.name);
                this.prefix = Blog.ONE_POST_PREFIX;
            } else {
                this.fetchPosts();
                this.prefix = Blog.ALL_POSTS_PREFIX;
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

                this.prefix = Blog.ONE_POST_PREFIX;

            } else {
                this.fetchPosts();
                this.prefix = Blog.ALL_POSTS_PREFIX;
            }
        }
    }

    fetchPosts() {
        fetch('http://localhost:8080/api/post')
            .then(res => res.json())
            .then(json => {
                console.info(`Posts JSON: ${JSON.stringify(json)}`);
                const posts = this.createPostsJSX(json);
                this.setState({posts});
                this.postsCache = posts;
            })
            .catch(err => console.error(err));
    }

    fetchPost(name) {
        fetch(`http://localhost:8080/api/post/${name}`)
            .then(res => res.json())
            .then(json => {
                console.info(`Posts JSON: ${JSON.stringify(json)}`);
                const posts = [this.createPostJSX(json)];
                this.setState({posts});
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

    render() {
        const {posts} = this.state;
        console.log('Inside Blog Render');
        console.info(this.state);
        return (
            <WebsiteTemplate>
                <div className="jarombek-blog-background">
                    <div className="jarombek-blog">
                        <BlogList blogList={posts} />
                    </div>
                </div>
            </WebsiteTemplate>
        );
    }
}

export default Blog;