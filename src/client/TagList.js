/**
 * TagList Component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

import './TagList.scss';

const TagList = ({ tagList=[] }) =>
    <div className="jarombek-tag-list">
        { (tagList.length === 0) ?
            <p>No Tags</p> :
            tagList.map(tag =>
                <Tag key={tag.name} {...tag} />
            )
        }
    </div>;

TagList.propTypes = {
    tagList: PropTypes.array
};

export default TagList;