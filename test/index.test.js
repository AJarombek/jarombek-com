/**
 * Test the root App component with Jest and Enzyme
 * @author Andrew Jarombek
 * @since 3/21/2018
 */

import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from '../src/App';

const app = shallow(<App />);

// Snapshot test - every time a test is run Jest will compare against the previous snapshot
test('App matches snapshot', () => {
    expect(toJSON(app)).toMatchSnapshot();
});