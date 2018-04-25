/**
 * Blog component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import fetch from 'isomorphic-fetch';
import WebsiteTemplate from './WebsiteTemplate';
import BlogList from './BlogList';
import CodeSnippet from './CodeSnippet';

import './Blog.scss';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        console.log('Inside Blog constructor');
        this.state = {};
    }

    componentDidMount() {
        if (!this.state.posts) {
            console.info("Fetching Posts...");
            this.fetchPosts();
        } else {
            console.info("State Already Set");
            console.info(JSON.stringify(this.state));
        }
    }

    fetchPosts() {
        fetch('http://localhost:8080/api/post')
            .then(res => res.json())
            .then(json => {
                console.info(`Posts JSON: ${JSON.stringify(json)}`);
                const posts = this.createPostsJSX(json);
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
        console.log(JSON.stringify(content));
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
                        return <Tag key={e.toString()} { ...attributes } />
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