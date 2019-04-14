/**
 * Snapshot Tests with Jest and Enzyme
 * @author Andrew Jarombek
 * @since 3/21/2018
 */

import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import moment from 'moment';

import App from '../../src/client/Home';
import Button from '../../src/client/Button';
import TitleImage from '../../src/client/TitleImage';
import WebsiteNav from '../../src/client/WebsiteNav';
import WebsiteTemplate from "../../src/client/WebsiteTemplate";
import Tag from "../../src/client/Tag";
import TagList from "../../src/client/TagList";
import PictureButton from "../../src/client/PictureButton";
import BlogPost from "../../src/client/BlogPost";
import Definition from "../../src/client/Definition";

/* App Component */

const app = shallow(<App />);

// Snapshot test - every time a test is run
// Jest will compare against the previous snapshot
test('App matches snapshot', () => {
    expect(toJSON(app)).toMatchSnapshot();
});

/* Button Component */

const button = shallow(<Button/>);

test('Button matches snapshot', () => {
    expect(toJSON(button)).toMatchSnapshot();
});

/* TitleImage Component */

const titleImage = shallow(<TitleImage src="./assets/github.png" title="Test"/>);
const titleImageLink = shallow(<TitleImage src="./assets/github.png"
                                           title="Test"
                                           link="jarombek.com"/>);

test('TitleImage matches snapshot', () => {
    expect(toJSON(titleImage)).toMatchSnapshot();
});

test('TitleImage with Link matches snapshot', () => {
    expect(toJSON(titleImageLink)).toMatchSnapshot();
});

/* WebsiteNav Component */

const websiteNav = shallow(<WebsiteNav />);

test('WebsiteNav matches snapshot', () => {
    expect(toJSON(websiteNav)).toMatchSnapshot();
});

/* WebsiteTemplate Component */

const websiteTemplate = shallow(<WebsiteTemplate><p>Hello</p></WebsiteTemplate>);

test('WebsiteTemplate matches snapshot', () => {
    expect(toJSON(websiteTemplate)).toMatchSnapshot();
});

/* Definition Component */

const definition = shallow(<Definition word="Snapshot Testing" > </Definition>);

test('Definition matches snapshot', () => {
    expect(toJSON(definition)).toMatchSnapshot();
});

/* Tag Component */

const tag = shallow(<Tag name="JavaScript" color="javascript" />);

test('Tag matches snapshot', () => {
    expect(toJSON(tag)).toMatchSnapshot();
});

/* TagList Component */

const tagListView = <TagList
        tagList={
            [{
                id: "js",
                name: "JavaScript",
                picture: "",
                color: "javascript"
            }]
        }
    />;

const tagList = shallow(tagListView);
const tagListEmpty = shallow(<TagList/>);

test('TagList matches snapshot', () => {
    expect(toJSON(tagList)).toMatchSnapshot();
});

test('Empty TagList matches snapshot', () => {
    expect(toJSON(tagListEmpty)).toMatchSnapshot();
});

/* PictureButton Component */

const pictureButton = shallow(<PictureButton activeColor="default" picture="">Test</PictureButton>);

test('PictureButton matches snapshot', () => {
    expect(toJSON(pictureButton)).toMatchSnapshot();
});

/* BlogPost Component */

const blogPostView = <BlogPost
        name="Test" title="Test"
        date={ moment().format('YYYY-MM-DD') }
        type="Discovery"
        content={[]}
        sources={
           [{
               startName: "Start",
               endName: "End",
               linkName: "Link",
               link: "jarombek.com"
           }]
        }
    />;

const blogPostNoSourcesView = <BlogPost
        name="Test"
        title="Test"
        date={ moment().format('YYYY-MM-DD') }
        type="Discovery"
        content={[]}
    />;

const blogPost = shallow(blogPostView);
const blogPostNoSources = shallow(blogPostNoSourcesView);

test('BlogPost matches snapshot', () => {
    expect(toJSON(blogPost)).toMatchSnapshot();
});

test('BlogPost No Sources matches snapshot', () => {
    expect(toJSON(blogPostNoSources)).toMatchSnapshot();
});