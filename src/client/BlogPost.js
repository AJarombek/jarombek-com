/**
 * BlogPost Component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './BlogPost.scss';

const BlogPost = ({ title, date, tags, content, sources }) => {
    const prereqs = tags.filter(tag => tag.prerequisite === true);
    let count = 0;
    return (
        <div className="jarombek-blog-post">
            <p className="jarombek-blog-date">
                {moment(date).format('MMMM Do, YYYY')}
            </p>
            <p className="jarombek-blog-title">{title}</p>
            <div className="jarombek-blog-prereq-tags">
                <TagList tagList={prereqs}/>
            </div>
            <div className="jarombek-blog-content">
                {content}
            </div>
            <div className="jarombek-blog-all-tags">
                <TagList tagList={tags}/>
            </div>
            <div className="jarombek-blog-sources">
                {
                    sources.forEach(src => {
                        <p>
                        `[${count++}] ${src.content}`
                        </p>
                    })
                }
            </div>
        </div>
    );
};

BlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    content: PropTypes.string.isRequired
};

export default BlogPost;