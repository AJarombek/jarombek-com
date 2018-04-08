/**
 * Blog component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import WebsiteTemplate from './WebsiteTemplate';

import './Blog.scss';

const Blog = () => {
    return (
        <WebsiteTemplate>
            <div className="jarombek-blog">
                <p>Blog!</p>
            </div>
        </WebsiteTemplate>
    );
};

export default Blog;