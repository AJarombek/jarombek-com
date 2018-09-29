/**
 * Definition Component
 * @author Andrew Jarombek
 * @since 5/13/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

const Definition = ({ word, children }) => {

    const wordId = word.replace(/\s/g, '-').toLowerCase();

    return (
        <div>
            <div id={wordId} className="jarombek-def-above"> </div>
            <div className="jarombek-def">
                <a href={`#${wordId}`}>
                    <p className="jarombek-def-word">{word}</p>
                </a>
                <p className="jarombek-def-desc">{children}</p>
            </div>
        </div>
    );
};

Definition.propTypes = {
    children: PropTypes.any,
    word: PropTypes.string.isRequired
};

export default Definition;