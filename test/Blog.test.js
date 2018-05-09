/**
 * Jest and Enzyme testing for the Blog React component
 * @author Andrew Jarombek
 * @since 5/8/2018
 */

import React from 'react';
import {mount, shallow} from 'enzyme';
import Blog from "../src/client/Blog";
import toJSON from "enzyme-to-json";

const blog = mount(<Blog/>);

test('Blog matches snapshot', () => {
    expect(toJSON(blog)).toMatchSnapshot();
});