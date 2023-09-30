/**
 * Tag Component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from "react";
import PropTypes from "prop-types";

const Tag = ({ name, picture, color, showPicture }) => {
  const size = showPicture ? "large" : "small";
  return (
    <div className={`jarombek-tag jarombek-tag-${size}`}>
      <div className={`jarombek-tag-color-${color}`}>
        {showPicture ? (
          <figure>
            <img className="jarombek-tag-picture" src={picture} alt="" />
          </figure>
        ) : null}
        <p className="jarombek-tag-name">{name}</p>
      </div>
    </div>
  );
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  color: PropTypes.string,
  showPicture: PropTypes.bool,
};

Tag.defaultProps = {
  picture: "https://asset.jarombek.com/jarombek.png",
  color: "default",
  showPicture: true,
};

export default Tag;
