/**
 * Snapshot test for the {@link ../../src/client/Subscribe} component.
 * @author Andrew Jarombek
 * @since 2/6/2020
 */

import React from 'react';
import Subscribe from '../../src/client/Subscribe';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<Subscribe />).toJSON();
    expect(tree).toMatchSnapshot();
});
