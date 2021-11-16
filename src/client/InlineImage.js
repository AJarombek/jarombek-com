/**
 * InlineImage Component
 * @author Andrew Jarombek
 * @since 11/15/2021
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const InlineImage = ({ filename, paddingtop = 'false', paddingbottom = 'false' }) => {
  const src = `https://asset.jarombek.com/posts/${filename}`;

  return (
    <figure
      className={classNames(
        'jarombek-inline-image',
        paddingtop === 'true' && 'jarombek-image-padding-top',
        paddingbottom === 'true' && 'jarombek-image-padding-bottom'
      )}
    >
      <img className="jarombek-image-img" src={src} alt="" />
    </figure>
  );
};

InlineImage.propTypes = {
  filename: PropTypes.string.isRequired,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string
};

export default InlineImage;
