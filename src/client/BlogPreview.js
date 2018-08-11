/**
 * BlogPreview Component
 * @author Andrew Jarombek
 * @since 8/2/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import moment from 'moment';
import TagList from './TagList';
import Button from "./Button";

const BlogPreview = ({ name, title, type, date, tags=[], preview }) => {
    const extraTagCount = tags.length > 3 ? tags.length - 2 : 0;

    if (extraTagCount > 0) {
        tags = [
            ...tags.filter((tag, index) => index < 2),
            {name: `+${extraTagCount} More`}
        ];
    }

    return (
        <div className="jarombek-blog-preview">
            <div className="jarombek-blog-preview-headers">
                <p className="jarombek-blog-preview-type">{type.toUpperCase()}</p>
                <p className="jarombek-blog-preview-date">
                    {moment(date).format('MMMM Do, YYYY')}
                </p>
            </div>
            <Link className="jarombek-blog-preview-title" to={`/blog/${name}`}>
                <p className="jarombek-blog-preview-title-p">{title}</p>
            </Link>
            <div className="jarombek-blog-preview-tags">
                <TagList tagList={tags} showPictures={false}/>
            </div>
            <div className="jarombek-blog-preview-content">
                {preview}
            </div>
            <Link className="jarombek-blog-preview-footer" to={`/blog/${name}`}>
                <Button activeColor="secondary" passiveColor="transparent"
                        borderColor="none" size="small">
                    READ MORE
                </Button>
            </Link>
        </div>
    );
};

BlogPreview.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    preview: PropTypes.array.isRequired,
    tags: PropTypes.array,
    date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default BlogPreview;