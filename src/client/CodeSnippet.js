/**
 * CodeSnippet Component
 * @author Andrew Jarombek
 * @since 4/10/2018
 */

import React from "react";
import PropTypes from "prop-types";
import hljs from "highlightjs";

class CodeSnippet extends React.Component {
  constructor(props) {
    super(props);

    this.defaultLanguage = {
      title: "",
      highlightClass: "javascript",
    };

    this.languages = [
      {
        prop: "cypher",
        title: "Cypher",
        highlightClass: "javascript",
      },
      {
        prop: "javascript",
        title: "JavaScript",
        highlightClass: "javascript",
      },
      {
        prop: "json",
        title: "JSON",
        highlightClass: "json",
      },
      {
        prop: "bash",
        title: "Bash",
        highlightClass: "bash",
      },
      {
        prop: "java",
        title: "Java",
        highlightClass: "java",
      },
      {
        prop: "swift",
        title: "Swift",
        highlightClass: "swift",
      },
      {
        prop: "python",
        title: "Python",
        highlightClass: "python",
      },
      {
        prop: "php",
        title: "PHP",
        highlightClass: "php",
      },
      {
        prop: "c",
        title: "C",
        highlightClass: "cpp",
      },
      {
        prop: "ejs",
        title: "EJS",
        highlightClass: "javascript",
      },
      {
        prop: "html",
        title: "HTML",
        highlightClass: "html",
      },
      {
        prop: "xml",
        title: "XML",
        highlightClass: "xml",
      },
      {
        prop: "typescript",
        title: "TypeScript",
        highlightClass: "typescript",
      },
      {
        prop: "sql",
        title: "SQL",
        highlightClass: "sql",
      },
      {
        prop: "yaml",
        title: "YAML",
        highlightClass: "yaml",
      },
      {
        prop: "sass",
        title: "Sass",
        highlightClass: "sass",
      },
      {
        prop: "css",
        title: "CSS",
        highlightClass: "css",
      },
      {
        prop: "groovy",
        title: "Groovy",
        highlightClass: "groovy",
      },
      {
        prop: "batch",
        title: "Batch",
        highlightClass: "dos",
      },
      {
        prop: "graphql",
        title: "GraphQL",
        highlightClass: "python",
      },
      {
        prop: "haskell",
        title: "Haskell",
        highlightClass: "haskell",
      },
      {
        prop: "hcl",
        title: "HCL",
        highlightClass: "python",
      },
      {
        prop: "velocity",
        title: "Velocity",
        highlightClass: "cpp",
      },
      {
        prop: "assembly",
        title: "Assembly",
        highlightClass: "mips",
      },
      {
        prop: "cpp",
        title: "C++",
        highlightClass: "cpp",
      },
      {
        prop: "csharp",
        title: "C#",
        highlightClass: "csharp",
      },
      {
        prop: "webassembly",
        title: "WebAssembly",
        highlightClass: "webassembly",
      },
      {
        prop: "powershell",
        title: "PowerShell",
        highlightClass: "powershell",
      },
      {
        prop: "docker",
        title: "Dockerfile",
        highlightClass: "docker",
      },
      {
        prop: "r",
        title: "R",
        highlightClass: "r",
      },
      {
        prop: "go",
        title: "Go",
        highlightClass: "go",
      },
      {
        prop: "nginx",
        title: "Nginx",
        highlightClass: "nginx",
      },
      {
        prop: "less",
        title: "Less",
        highlightClass: "less",
      },
      {
        prop: "toml",
        title: "TOML",
        highlightClass: "toml",
      },
      {
        prop: "spl",
        title: "SPL",
        highlightClass: "javascript",
      },
      {
        prop: "starlark",
        title: "Starlark",
        highlightClass: "python",
      },
    ];
  }

  static propTypes = {
    language: PropTypes.string,
    children: PropTypes.any,
  };

  static defaultProps = {
    language: null,
  };

  componentDidMount() {
    hljs.initHighlightingOnLoad();
    hljs.highlightBlock(this.highlightedCode);
  }

  /**
   * Get the object representing a language
   * @param language - a string representing a language
   * @returns {*}
   */
  languageInfo(language) {
    const matchedLanguage = this.languages.filter(
      (lang) => lang.prop === language || lang.title === language,
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
        <code
          title={title}
          ref={(code) => (this.highlightedCode = code)}
          className={`${highlightClass} hljs`}
        >
          {children}
        </code>
      </figure>
    );
  }
}

export default CodeSnippet;
