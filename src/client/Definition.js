/**
 * Definition Component
 * @author Andrew Jarombek
 * @since 5/13/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

import './Definition.scss';

const Tag = ({ word, children }) =>
    <div className="jarombek-def">
        <p className="jarombek-def-word">{word}</p>
        <p className="jarombek-def-desc">{children}</p>
    </div>;

Tag.propTypes = {
    children: PropTypes.any,
    word: PropTypes.string.required
};

export default Tag;