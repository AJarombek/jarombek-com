/**
 * BlogList Component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost';

import './BlogList.scss';

const BlogList = ({ blogList=[] }) =>
    <div className="jarombek-blog-list">
        { (blogList.length === 0) ?
            <p>No Posts Found</p> :
            blogList.map(blog =>
                <BlogPost key={blog.id} {...blog} />
            )
        }
    </div>;

BlogList.propTypes = {
    blogList: PropTypes.array
};

export default BlogList;