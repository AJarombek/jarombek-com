/**
 * Blog component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import fetch from 'isomorphic-fetch';
import WebsiteTemplate from './WebsiteTemplate';
import BlogList from './BlogList';

import './Blog.scss';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (this.state === {}) {
            this.fetchPosts();
        }
    }

    fetchPosts() {
        fetch('localhost:8080/api/post')
            .then(res => res.json())
            .then(json => {
                console.info(`Posts JSON: ${json}`);
                const posts = this.createPostJSX(json);
                this.setState({posts});
            });
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
        return <div>
            content.map(e => {
                const Tag = e.el;
                const attributes = e.attributes;
                const children = e.children;
                const content = e.content;

                return <Tag { ...attributes }>{content}{
                        children.map(child => this.createContentJSX(child))
                    }<Tag/>;
            });
        </div>;

    }

    render() {
        const {posts} = this.state;
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