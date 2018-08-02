import React from 'react';
import Definition from "./Definition";
import ComparisonTableEntry from "./ComparisonTableEntry";
import CodeSnippet from "./CodeSnippet";
import ComparisonTable from "./ComparisonTable";

/**
 * Class to convert blog posts from JSON to JSX
 * @author Andrew Jarombek
 * @since 7/28/2018
 */
class JSXConverter {

    /**
     * Transform a list of posts from JSON to an object where the content property is JSX
     * so it can be displayed in the DOM
     * @param posts - a list of posts in JSON
     * @returns null if the posts is falsey, an array of posts in with the content
     * property in JSX form if posts is truthy
     */
    static createPostsJSX(posts) {
        if (posts) {
            return posts.map(post => JSXConverter.createPostJSX(post));
        } else {
            return null;
        }
    }

    /**
     * Creates a JavaScript object for a post where the content property has been
     * transformed from JSON to JSX
     * @param name - the name of the post (this is what is displayed in the URL)
     * @param title - the title of the post
     * @param date - the date the post was created
     * @param type - the type of post [Blog, Discovery]
     * @param tags - the tags for the post, these are the different technologies discussed
     * @param content - JSON representation of the content of the post.
     * This will be transformed to JSX
     * @param preview - a preview snippet of a posts content.
     * @param sources - the sources of information for the post
     * @returns {{name: *, title: *, date: *, type: *, tags: *, content: *, sources: *}}
     * - JavaScript object representing a post
     */
    static createPostJSX({name, title, date, type, tags, content, preview, sources}) {
        return {
            name,
            title,
            date,
            type,
            tags,
            content: JSXConverter.createContentJSX(content),
            preview: JSXConverter.createContentJSX(preview),
            sources
        }
    }

    /**
     * Transform a JSON representation of HTML into JSX
     * @param content - the JSON representation of HTML
     * @returns null if content is falsey, JSX if content is truthy
     */
    static createContentJSX(content) {
        if (content) {
            return content.map(e => {
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
                    const {src, ...others} = attributes;
                    return <Tag key={e.toString()} src={src} { ...others } />
                }

                return <Tag key={e.toString()} { ...attributes }>{value}{
                    (children) ? JSXConverter.createContentJSX(children) : ""
                }</Tag>;
            });
        } else {
            return null;
        }

    }

    /**
     * If the string representing an HTML element tag is a React Component element, return
     * the React Component reference.  Otherwise simply return the argument string.
     * @param tag - a string representing an HTML element tag
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
        } else {
            return tag;
        }
    }

}

export default JSXConverter;