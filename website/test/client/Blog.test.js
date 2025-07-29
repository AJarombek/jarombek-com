/**
 * @jest-environment node
 */

/**
 * Jest and Enzyme testing for the Blog React component
 * @author Andrew Jarombek
 * @since 5/8/2018
 */

import React from 'react';
import {mount} from 'enzyme';
import Blog from "../../src/client/Blog";
import {MemoryRouter} from 'react-router-dom';
import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';
import BlogDelegator from "../../src/client/BlogDelegator";

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

fetchMock.mock('http://localhost:8080/api/post/content/may-9-2018-test', oneResponse);
fetchMock.mock('http://localhost:8080/api/post/content', manyResponse);

fetchMock.mock('http://localhost:8080/api/viewed/post/may-10-2018-test', {});

test(`Mock of Fetch Returns As Expected`, async () => {

    const response = await BlogDelegator.fetchPost(`http://localhost:8080`, `may-9-2018-test`);
    expect(response.post).toHaveProperty(`sources`,
        [
            {
                "endName":" End",
                "link":"http://jarombek.com",
                "linkName":"Link",
                "startName":"Start "
            }
        ]);

    expect(response.post).toHaveProperty(`tags`,
        [
            {
                "color":"javascript",
                "name":"JavaScript",
                "picture":"./assets/js.png"
            }
        ]);

    expect(response.post).toHaveProperty(`name`, 'may-9-2018-test');
    expect(response.post).toHaveProperty(`title`, 'Test');
    expect(response.post).toHaveProperty(`type`, 'Discovery');
});