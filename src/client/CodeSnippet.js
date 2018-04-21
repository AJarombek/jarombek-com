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

        this.defaultLanguage = {
            title: "",
            highlightClass: "javascript"
        };

        this.languages = [
            {
                prop: "cypher",
                title: "Cypher",
                highlightClass: "javascript"
            },
            {
                prop: "javascript",
                title: "JavaScript",
                highlightClass: "javascript"
            }
        ];
    }

    static propTypes = {
        language: PropTypes.string.isRequired,
        children: PropTypes.any
    };

    componentDidMount() {
        hljs.initHighlightingOnLoad();
        hljs.highlightBlock(this.highlightedCode);
    }

    languageInfo(language) {
        const matchedLanguage = this.languages.filter(
            lang => lang.prop === language || lang.title === language
        )[0];

        if (matchedLanguage === null || matchedLanguage === undefined) {
            return this.defaultLanguage;
        } else {
            return matchedLanguage;
        }
    }

    render() {
        const { language, children } = this.props;

        const { title, highlightClass } = this.languageInfo(language);

        return (
           <figure className="jarombek-code-snippet">
             <code title={title} ref={code => this.highlightedCode = code}
                   className={`${highlightClass} hljs`}>
                {children}
             </code>
           </figure>
        );
    }
}

export default CodeSnippet;