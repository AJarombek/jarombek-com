/**
 * CodeSnippet Component
 * @author Andrew Jarombek
 * @since 4/10/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlightjs';

import './CodeSnippet.scss';

const CodeSnippet = ({ language, children }) => {
    hljs.initHighlightingOnLoad();
    return <figure className="jarombek-code-snippet">
        <code className={`cpp hljs`}>
            {children}
        </code>
    </figure> };

CodeSnippet.propTypes = {
    language: PropTypes.string.isRequired,
    children: PropTypes.any
};

CodeSnippet.defaultProps = {
    language: "javascript"
};

export default CodeSnippet;