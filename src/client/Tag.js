/**
 * Tag Component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

import './Tag.scss';

const Tag = ({ name, picture, color }) =>
    <div className="jarombek-tag">
        <div className={`jarombek-tag-color-${color}`}>
            <figure>
                <img className="jarombek-tag-picture" src={ require(`${picture}`) } />
            </figure>
            <p className="jarombek-tag-name">{name}</p>
        </div>
    </div>;

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string,
    color: PropTypes.string
};

Tag.defaultProps = {
    picture: "./assets/jarombek.png",
    color: "default"
};

export default Tag;