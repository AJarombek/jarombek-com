import React from 'react';
import Definition from './Definition';
import ComparisonTableEntry from './ComparisonTableEntry';
import CodeSnippet from './CodeSnippet';
import ComparisonTable from './ComparisonTable';
import { v4 as uuid } from 'uuid';
import SectionTitle from './SectionTitle';
import MathNotation from './MathNotation';
import UpdateInfo from './UpdateInfo';
import SubTitle from './SubTitle';
import Note from './Note';
import InlineImage from './InlineImage';

/**
 * Class to convert blog posts from JSON to JSX
 * @author Andrew Jarombek
 * @since 7/28/2018
 */
class JSXConverter {
  /**
   * Transform a list of posts from JSON to an object where the content property is JSX that can be displayed in
   * the DOM.
   * @param {{name: string, title: string, date: string, type: string, tags: Object[], content: *,
   * sources: Object[]}[]} posts - a list of posts in JSON.
   * @returns {{name: string, title: string, date: string, type: string, tags: Object[], content: *,
   * sources: Object[]}[] | null} null if the posts is falsy, an array of posts in with the content property in JSX
   * form if posts is truthy.
   */
  static createPostsJSX(posts) {
    if (posts) {
      return posts.map((post) => JSXConverter.createPostJSX(post));
    } else {
      return null;
    }
  }

  /**
   * Creates a JavaScript object for a post where the content property has been
   * transformed from JSON to JSX
   * @param {string} name - the name of the post (this is what is displayed in the URL)
   * @param {string} title - the title of the post
   * @param {string} date - the date the post was created
   * @param {string} type - the type of post [Blog, Discovery]
   * @param {Object[]} tags - the tags for the post, these are the different technologies discussed
   * @param {*} content - JSON representation of the content of the post.  This will be transformed to JSX.
   * @param {*} preview - a preview snippet of a posts content.
   * @param {Object[]} sources - the sources of information for the post
   * @returns {{name: string, title: string, date: string, type: string, tags: Object[], content: *, sources: Object[]}}
   * - JavaScript object representing a post
   */
  static createPostJSX({ name, title, date, type, tags, content, preview, sources }) {
    return {
      name,
      title,
      date,
      type,
      tags,
      content: JSXConverter.createContentJSX(content),
      preview: JSXConverter.createContentJSX(preview),
      sources,
    };
  }

  /**
   * Transform a JSON representation of HTML into JSX
   * @param {*} content - the JSON representation of HTML
   * @returns {JSX.Element | null} null if content is falsey, JSX if content is truthy
   */
  static createContentJSX(content) {
    if (content) {
      return content.map((e) => {
        let Tag = e.el;
        const attributes = e.attributes;
        const children = e.children;
        const value = e.value;

        // The #text element simply represents any plain text in the HTML
        if (Tag === '#text') {
          return value;
        }

        // If the element a React component, replace the string with the
        // Component reference.
        Tag = JSXConverter.convertStringToComponent(Tag);

        // If the tag is img there is no closing tag and we have to treat it differently.
        if (Tag === 'img') {
          const { src, ...others } = attributes;
          return <Tag key={uuid()} src={src} {...others} />;
        }

        return (
          <Tag key={uuid()} {...attributes}>
            {value}
            {children ? JSXConverter.createContentJSX(children) : ''}
          </Tag>
        );
      });
    } else {
      return null;
    }
  }

  /**
   * If the string representing an HTML element tag is a React Component element, return
   * the React Component reference.  Otherwise simply return the argument string.
   * @param {string} tag - a string representing an HTML element tag
   * @return {*} - either a string tag or a React Component reference
   */
  static convertStringToComponent(tag) {
    if (tag === 'codesnippet') {
      return CodeSnippet;
    } else if (tag === 'definition') {
      return Definition;
    } else if (tag === 'comparisontable') {
      return ComparisonTable;
    } else if (tag === 'comparisontableentry') {
      return ComparisonTableEntry;
    } else if (tag === 'sectiontitle') {
      return SectionTitle;
    } else if (tag === 'subtitle') {
      return SubTitle;
    } else if (tag === 'mathnotation') {
      return MathNotation;
    } else if (tag === 'note') {
      return Note;
    } else if (tag === 'updateinfo') {
      return UpdateInfo;
    } else if (tag === 'inlineimage') {
      return InlineImage;
    } else {
      return tag;
    }
  }
}

export default JSXConverter;
