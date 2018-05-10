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

fetchMock.get('*', JSON.stringify({
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
    content: "",
    sources: [
        {
            startName: "Start ",
            endName: " End",
            linkName: "Link",
            link: "http://jarombek.com"
        }
    ]
}));

const blog = mount(<MemoryRouter>
                     <Blog match={ {params: { name: "Hey"} } } location={{pathname: ''}} />
                   </MemoryRouter>);

test(`Mock of Fetch Returns As Expected`, async () => {
    const response = await fetchResponseJson(`http://foo.bar`)
    expect(response).toHaveProperty(`Rick`, `I turned myself into a pickle, Morty!`)
})

test('Test Component Lifecycle', async () => {
    const wrapper = shallow(<Blog match={ {params: { name: null } } } location={{pathname: ''}} />);

    await wrapper.instance().componentDidMount();

    expect(wrapper.find('.jarombek-blog')).toHaveLength(1);

    expect(wrapper.state()).toHaveProperty('page', 0);
});

test('Unique Posts removes duplicates', () => {
    expect(Blog.uniquePosts([{name: 'a', content: 'test1'},
        {name: 'b', content: 'test2'},
        {name: 'a', content: 'test3'}])).toHaveLength(2);
});