/**
 * Test the root App component with Jest and Enzyme
 * @author Andrew Jarombek
 * @since 3/21/2018
 */

import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from '../src/client/Home';
import Button from '../src/client/Button';
import TitleImage from '../src/client/TitleImage';

const app = shallow(<App />);
const button = shallow(<Button/>);
const titleImage = shallow(<TitleImage src="./assets/github.png" title="Test"/>);

// Snapshot test - every time a test is run Jest will compare against the previous snapshot
test('App matches snapshot', () => {
    expect(toJSON(app)).toMatchSnapshot();
});

test('Button matches snapshot', () => {
    expect(toJSON(button)).toMatchSnapshot();
});

test('TitleImage matches snapshot', () => {
    expect(toJSON(titleImage)).toMatchSnapshot();
});