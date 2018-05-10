/**
 * Button component
 * @author Andrew Jarombek
 * @since 4/3/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({passiveColor, activeColor, size, children, className}) => {
    return (
        <div className={className}>
            <button className={`jarbek-button passive-color-${passiveColor}
                                active-color-${activeColor} jarbek-button-${size}`}>
                {children}
            </button>
        </div>
    );
};

Button.propTypes = {
    activeColor: PropTypes.string,
    passiveColor: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string
};

Button.defaultProps = {
    activeColor: 'default',
    passiveColor: 'default',
    size: 'large'
};

export default Button;