/**
 * BlogPost Component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import moment from 'moment';
import TagList from './TagList';

import './BlogPost.scss';

const BlogPost = ({ name, title, type, date, tags=[], content, sources=[] }) => {
    let count = 0;
    return (
        <div className="jarombek-blog-post">
            <p className="jarombek-blog-type">{type.toUpperCase()}</p>
            <p className="jarombek-blog-date">
                {moment(date).format('MMMM Do, YYYY')}
            </p>
            <Link className="jarombek-blog-title" to={`/blog/${name}`}>
                <p className="jarombek-blog-title-content">{title}</p>
            </Link>
            <div className="jarombek-blog-tags">
                <TagList tagList={tags}/>
            </div>
            <div className="jarombek-blog-content">
                {content}
            </div>
            <div className="jarombek-blog-sources">
                {
                    sources.map(src =>
                        <p key={count} className="jarombek-blog-source">
                            {`[${++count}] ${src.startName}`}
                                <a href={`${src.link}`}>{`${src.linkName}`}</a>
                            {`${src.endName}`}
                        </p>
                    )
                }
            </div>
        </div>
    );
};

BlogPost.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array,
    sources: PropTypes.array
};

export default BlogPost;