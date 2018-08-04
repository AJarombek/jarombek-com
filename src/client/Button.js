/**
 * Button component
 * @author Andrew Jarombek
 * @since 4/3/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({passiveColor, activeColor, borderColor, size, children, className, onClick}) => {

    // By default, the border color is the same as the active color
    if (!borderColor) {
        borderColor = activeColor;
    }

    return (
        <div className={className}>
            <button className={`jarbek-button passive-color-${passiveColor}
                                active-color-${activeColor} border-color-${borderColor}
                                jarbek-button-${size}`}
                    onClick={onClick}>
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