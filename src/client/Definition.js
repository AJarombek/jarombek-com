/**
 * Definition Component
 * @author Andrew Jarombek
 * @since 5/13/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

const Definition = ({ word, children }) =>
    <div className="jarombek-def">
        <p className="jarombek-def-word">{word}</p>
        <p className="jarombek-def-desc">{children}</p>
    </div>;

Definition.propTypes = {
    children: PropTypes.any,
    word: PropTypes.string.isRequired
};

export default Definition;