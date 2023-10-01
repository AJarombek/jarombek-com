/**
 * PictureButton component
 * @author Andrew Jarombek
 * @since 5/4/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

const PictureButton = ({ activeColor, passiveColor, size, picture, children, className, onClick }) => {
  return (
    <div className={className}>
      <button
        className={`jarbek-button active-color-${activeColor} passive-color-${passiveColor} jarbek-button-${size}`}
        onClick={onClick}
      >
        <div className={'jarbek-picture-button'}>
          <div className={'jarbek-pb-picture'}>
            <img src={require(`${picture}`)} />
          </div>
          <div className={'jarbek-pb-text'}>{children}</div>
        </div>
      </button>
    </div>
  );
};

PictureButton.propTypes = {
  activeColor: PropTypes.string,
  passiveColor: PropTypes.string,
  size: PropTypes.string,
  picture: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

PictureButton.defaultProps = {
  color: 'default',
  size: 'large',
};

export default PictureButton;
