/**
 * CodeSnippet Component
 * @author Andrew Jarombek
 * @since 4/10/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlightjs';

import './CodeSnippet.scss';

class CodeSnippet extends React.Component {

    constructor() {
        super();

        this.languages = [];
    }

    static propTypes = {
        language: PropTypes.string.isRequired,
        children: PropTypes.any
    };

    static defaultProps = {
        language: "javascript"
    };

    componentDidMount() {
        hljs.initHighlightingOnLoad();
        hljs.highlightBlock(this.highlightedCode);
    }

    render() {
        const { language, children } = this.props;
        return <figure className="jarombek-code-snippet">
                 <code title="Cypher" ref={code => this.highlightedCode = code} className={`cpp hljs`}>
                    {children}
                 </code>
               </figure>;
    }
}

export default CodeSnippet;