/**
 * Jest and Enzyme testing for the Blog React component
 * @author Andrew Jarombek
 * @since 5/8/2018
 */

import React from 'react';
import {mount, shallow} from 'enzyme';
import Blog from "../src/client/Blog";
import toJSON from "enzyme-to-json";
import {MemoryRouter} from 'react-router-dom';
import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';

const oneResponse = {
    body: {
        name: "may-9-2018-test",
        title: "Test",
        date: new Date('2018-05-09T12:00:00'),
        type: "Discovery",
        tags: [
            {
                name: "JavaScript",
                picture: "./assets/js.png",
                color: "javascript"
            }
        ],
        content: [],
        sources: [
            {
                startName: "Start ",
                endName: " End",
                linkName: "Link",
                link: "http://jarombek.com"
            }
        ]
    },
    headers: {
        'Link': `</api/post?page=2&limit=5>; rel="next";`
    }
};

const manyResponse = {
    body: [{
        name: "may-10-2018-test",
        title: "Test",
        date: new Date('2018-05-10T12:00:00'),
        type: "Discovery",
        tags: [
            {
                id: "1",
                name: "JavaScript",
                picture: "./assets/js.png",
                color: "javascript"
            }
        ],
        content: [{
            "el":"p",
            "attributes":null,
            "value":null,
            "children":[
                {
                    "el":"#text",
                    "attributes":null,
                    "value":"Hello Test.",
                    "children":null
                }
            ]
        }],
        sources: [
            {
                startName: "Start ",
                endName: " End",
                linkName: "Link",
                link: "http://jarombek.com"
            }
        ]
    }],
    headers: {
        'Link': `</api/post?page=2&limit=5>; rel="next";`
    }
};

fetchMock.mock('http://localhost:8080/api/post/may-9-2018-test', oneResponse);
fetchMock.mock('http://localhost:8080/api/post', manyResponse);

fetchMock.mock('http://localhost:8080/api/viewed/post/may-10-2018-test', {});

test(`Mock of Fetch Returns As Expected`, async () => {

    const response = await Blog.fetchPost(`http://localhost:8080`, `may-9-2018-test`);
    expect(response.posts[0]).toHaveProperty(`sources`,
        [
            {
                "endName":" End",
                "link":"http://jarombek.com",
                "linkName":"Link",
                "startName":"Start "
            }
        ]);

    expect(response.posts[0]).toHaveProperty(`tags`,
        [
            {
                "color":"javascript",
                "name":"JavaScript",
                "picture":"./assets/js.png"
            }
        ]);

    expect(response.posts[0]).toHaveProperty(`name`, 'may-9-2018-test');
    expect(response.posts[0]).toHaveProperty(`title`, 'Test');
    expect(response.posts[0]).toHaveProperty(`type`, 'Discovery');
});


test('Test Component Lifecycle', async () => {
    const wrapper = mount(
        <MemoryRouter>
            <Blog match={ {params: { name: null } } } location={{pathname: ''}} />
        </MemoryRouter>
    );

    expect(wrapper.find('.jarombek-blog')).toHaveLength(1);
});


test('Unique Posts removes duplicates', () => {
    expect(Blog.uniquePosts([{name: 'a', content: 'test1'},
        {name: 'b', content: 'test2'},
        {name: 'a', content: 'test3'}])).toHaveLength(2);
});