/**
 * Snapshot Tests with Jest and Enzyme
 * @author Andrew Jarombek
 * @since 3/21/2018
 */

import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import moment from 'moment';

import App from '../src/client/Home';
import Button from '../src/client/Button';
import TitleImage from '../src/client/TitleImage';
import WebsiteNav from '../src/client/WebsiteNav';
import WebsiteTemplate from "../src/client/WebsiteTemplate";
import Tag from "../src/client/Tag";
import TagList from "../src/client/TagList";
import PictureButton from "../src/client/PictureButton";
import BlogPost from "../src/client/BlogPost";
import BlogList from "../src/client/BlogList";

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

const blogListView = <BlogList
        blogList={
            [{
                id: 1,
                name: "Test",
                title: "Test",
                date: moment().format('YYYY-MM-DD'),
                type: "Discovery",
                content: []
            }]
        }
    />;

const app = shallow(<App />);
const button = shallow(<Button/>);
const titleImage = shallow(<TitleImage src="./assets/github.png" title="Test"/>);
const titleImageLink = shallow(<TitleImage src="./assets/github.png"
                                           title="Test"
                                           link="jarombek.com"/>);
const websiteNav = shallow(<WebsiteNav />);
const websiteTemplate = shallow(<WebsiteTemplate><p>Hello</p></WebsiteTemplate>);
const tag = shallow(<Tag name="JavaScript" color="javascript" />);
const tagList = shallow(tagListView);
const tagListEmpty = shallow(<TagList/>);
const pictureButton = shallow(<PictureButton activeColor="default" picture="">Test</PictureButton>);
const blogPost = shallow(blogPostView);
const blogPostNoSources = shallow(blogPostNoSourcesView);
const blogListEmpty = shallow(<BlogList/>);
const blogList = shallow(blogListView);

// Snapshot test - every time a test is run
// Jest will compare against the previous snapshot
test('App matches snapshot', () => {
    expect(toJSON(app)).toMatchSnapshot();
});

test('Button matches snapshot', () => {
    expect(toJSON(button)).toMatchSnapshot();
});

test('TitleImage matches snapshot', () => {
    expect(toJSON(titleImage)).toMatchSnapshot();
});

test('TitleImage with Link matches snapshot', () => {
    expect(toJSON(titleImageLink)).toMatchSnapshot();
});

test('WebsiteNav matches snapshot', () => {
    expect(toJSON(websiteNav)).toMatchSnapshot();
});

test('WebsiteTemplate matches snapshot', () => {
    expect(toJSON(websiteTemplate)).toMatchSnapshot();
});

test('Tag matches snapshot', () => {
    expect(toJSON(tag)).toMatchSnapshot();
});

test('TagList matches snapshot', () => {
    expect(toJSON(tagList)).toMatchSnapshot();
});

test('Empty TagList matches snapshot', () => {
    expect(toJSON(tagListEmpty)).toMatchSnapshot();
});

test('PictureButton matches snapshot', () => {
    expect(toJSON(pictureButton)).toMatchSnapshot();
});

test('BlogPost matches snapshot', () => {
    expect(toJSON(blogPost)).toMatchSnapshot();
});

test('BlogPost No Sources matches snapshot', () => {
    expect(toJSON(blogPostNoSources)).toMatchSnapshot();
});

test('Empty BlogList matches snapshot', () => {
    expect(toJSON(blogListEmpty)).toMatchSnapshot();
});

test('BlogList matches snapshot', () => {
    expect(toJSON(blogList)).toMatchSnapshot();
});

