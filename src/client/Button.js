/**
 * Button component
 * @author Andrew Jarombek
 * @since 4/3/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({color, size, children, className}) => {
    return (
        <div className={className}>
            <button className={`jarbek-button color-${color} jarbek-button-${size}`}>
                {children}
            </button>
        </div>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string
};

Button.defaultProps = {
    color: 'default',
    size: 'large'
};

export default Button;