/**
 * Button component
 * @author Andrew Jarombek
 * @since 4/3/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({passiveColor, activeColor, size, children, className, onClick}) => {
    return (
        <div className={className}>
            <button className={`jarbek-button passive-color-${passiveColor}
                                active-color-${activeColor} jarbek-button-${size}`}
                    onClick={onClick}>
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
    className: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    activeColor: 'default',
    passiveColor: 'default',
    size: 'large',
    onClick: f=>f
};

export default Button;