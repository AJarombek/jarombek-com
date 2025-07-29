/**
 * TagList Component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

/**
 * @param {{name: string, picture: string, color: string}[]} tagList
 * @param {boolean} showPictures
 * @return {JSX.Element}
 * @constructor
 */
const TagList = ({ tagList = [], showPictures = true }) => (
  <div className="jarombek-tag-list">
    {tagList.length === 0 ? (
      <p>No Tags</p>
    ) : (
      tagList.map((tag) => <Tag key={tag.name} {...tag} showPicture={showPictures} />)
    )}
  </div>
);

TagList.propTypes = {
  tagList: PropTypes.array,
  showPictures: PropTypes.bool,
};

export default TagList;
