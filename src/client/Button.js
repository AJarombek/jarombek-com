/**
 * Button component
 * @author Andrew Jarombek
 * @since 4/3/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * @param {string} passiveColor
 * @param {string} activeColor
 * @param {string} passiveDarkColor
 * @param {string} activeDarkColor
 * @param {string} borderColor
 * @param {string} size
 * @param {string} font
 * @param {JSX.Element} children
 * @param {string} className
 * @param {function} onClick
 * @return {JSX.Element}
 * @constructor
 */
const Button = ({
  passiveColor,
  activeColor,
  passiveDarkColor,
  activeDarkColor,
  borderColor,
  size,
  font,
  children,
  className,
  onClick,
}) => {
  // By default, the border color is the same as the active color
  if (!borderColor) {
    borderColor = activeColor;
  }

  return (
    <div className={className}>
      <button
        className={classnames(
          'jarbek-button',
          `passive-color-${passiveColor}`,
          `passive-dark-color-${passiveDarkColor}`,
          `active-color-${activeColor}`,
          `active-dark-color-${activeDarkColor}`,
          `border-color-${borderColor}`,
          `jarbek-button-${size}`,
          `jarbek-button-font-${font}`,
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  activeColor: PropTypes.string,
  passiveColor: PropTypes.string,
  borderColor: PropTypes.string,
  size: PropTypes.string,
  font: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  activeColor: 'default',
  passiveColor: 'default',
  activeDarkColor: 'default',
  passiveDarkColor: 'default',
  size: 'large',
  font: 'sylexiad',
  onClick: (f) => f,
};

export default Button;
