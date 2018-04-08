/**
 * Tag Component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

import './Tag.scss';

const Tag = ({ name, picture, experience, color }) =>
    <div className="jarombek-tag">
        <figure>
            <img className="jarombek-tag-picture" src={ require(`${picture}`) } />
        </figure>
        <p className="jarombek-tag-name">{name}</p>
        <p className="jarombek-tag-experience">{experience}</p>
    </div>;

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    experience: PropTypes.string,
    color: PropTypes.string.isRequired
};

export default Tag;