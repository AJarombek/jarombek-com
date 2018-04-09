/**
 * Blog component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import WebsiteTemplate from './WebsiteTemplate';
import BlogList from './BlogList';
import moment from 'moment';

import './Blog.scss';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    title: "Creating a Simple Geographical Map with Neo4j and Cypher",
                    date: moment('2017-11-06'),
                    type: "Discovery",
                    tags: [],
                    content: "<div>Hello</div>",
                    sources: []
                }
            ]
        };
    }

    render() {
        const {blogs} = this.state;
        return (
            <WebsiteTemplate>
                <div className="jarombek-blog-background">
                    <div className="jarombek-blog">
                        <BlogList blogList={blogs} />
                    </div>
                </div>
            </WebsiteTemplate>
        );
    }
}

export default Blog;