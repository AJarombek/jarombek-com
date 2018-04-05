
import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({color, size, children}) => {
    return (
        <div>
            <button className={`jarbek-button color-${color} jarbek-button-${size}`}>
                {children}
            </button>
        </div>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.any
};

Button.defaultProps = {
    color: 'default',
    size: 'large'
};

export default Button;