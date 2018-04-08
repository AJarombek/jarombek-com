/**
 * Blog component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import WebsiteTemplate from './WebsiteTemplate';
import BlogList from './BlogList';

import './Blog.scss';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
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