/**
 * Jest and Enzyme testing for the CodeSnippet React component
 * @author Andrew Jarombek
 * @since 5/8/2018
 */

import React from 'react';
import {mount} from 'enzyme';
import CodeSnippet from "../../src/client/CodeSnippet";

// We must use mount() here instead of shallow() because it works with
// refs and component lifecycles
const wrapper = mount(<CodeSnippet language="java"/>);

test('CodeSnippet has expected classes based on language prop', () => {
    expect(wrapper.find('.java')).toHaveLength(1);
});

const defaultWrapper = mount(<CodeSnippet language=""/>);

test('CodeSnippet has expected default language', () => {
    expect(defaultWrapper.find('.javascript')).toHaveLength(1);
});