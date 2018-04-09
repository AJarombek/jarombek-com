/**
 * BlogPost Component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TagList from './TagList';

import './BlogPost.scss';

const BlogPost = ({ title, type, date, tags=[], content, sources=[] }) => {
    let count = 0;
    return (
        <div className="jarombek-blog-post">
            <p className="jarombek-blog-type">{type.toUpperCase()}</p>
            <p className="jarombek-blog-date">
                {moment(date).format('MMMM Do, YYYY')}
            </p>
            <p className="jarombek-blog-title">{title}</p>
            <div className="jarombek-blog-tags">
                <TagList tagList={tags}/>
            </div>
            <div className="jarombek-blog-content">
                {content}
            </div>
            <div className="jarombek-blog-sources">
                {
                    sources.forEach(src => {
                        return <p>
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
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array,
    sources: PropTypes.array
};

export default BlogPost;