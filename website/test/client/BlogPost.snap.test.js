/**
 * Snapshot test for the {@code BlogPost} component.
 * @author Andrew Jarombek
 * @since 12/19/2019
 */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import moment from "moment";
import BlogPost from "../../src/client/BlogPost";

describe('Snapshot Tests', () => {

    it('BlogPost matches snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <BlogPost
                    name="Test" title="Test"
                    date={ moment('2020-06-24').format('YYYY-MM-DD') }
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
                />
            </MemoryRouter>
        ).toJSON();
        console.info(tree);
        expect(tree).toMatchSnapshot();
    });

    it('BlogPost No Sources matches snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <BlogPost
                    name="Test"
                    title="Test"
                    date={ moment('2020-06-24').format('YYYY-MM-DD') }
                    type="Discovery"
                    content={[]}
                />
            </MemoryRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
