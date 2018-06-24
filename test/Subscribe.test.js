/**
 * Jest and Enzyme testing for the Subscribe React component
 * @author Andrew Jarombek
 * @since 6/24/2018
 */

import React from 'react';
import Subscribe from "../src/client/Subscribe";
import {mount} from "enzyme/build/index";

import fetchMock from 'fetch-mock';

test('Test Component Mounted', () => {
    const wrapper = mount(
        <Subscribe/>
    );

    expect(wrapper.find('.jarbek-subscribe-form')).toHaveLength(1);
});

test(`Mock of Create User Returns As Expected`, async () => {

    fetchMock.mock('http://localhost:8080/api/user', {
        body: {},
        status: 200
    });

    const response = await Subscribe.createUser(`andrew@jarombek.com`, `Andy`, `Jarombek`,
                                                `test95test`, `http://localhost:8080`);

    expect(response).toEqual(200);
});

test('validateEmail Function Works as Expected', () => {
    expect(Subscribe.validateEmail("andrew@jarombek.com")).toEqual({
        email: "andrew@jarombek.com",
        emailValid: true
    });

    expect(Subscribe.validateEmail("andrew@jar.c")).toEqual({
        email: "andrew@jar.c",
        emailValid: false
    });
});

test('validateFirstName Function Works as Expected', () => {
    expect(Subscribe.validateFirstName("Andrew")).toEqual({
        firstName: "Andrew",
        firstNameValid: true
    });

    expect(Subscribe.validateFirstName("Andrew9")).toEqual({
        firstName: "Andrew9",
        firstNameValid: false
    });
});

test('validateLastName Function Works as Expected', () => {
    expect(Subscribe.validateLastName("Jarombek")).toEqual({
        lastName: "Jarombek",
        lastNameValid: true
    });

    expect(Subscribe.validateLastName("Jar95bek!")).toEqual({
        lastName: "Jar95bek!",
        lastNameValid: false
    });
});

test('validatePassword Function Works as Expected', () => {
    expect(Subscribe.validatePassword("test")).toEqual({
        password: "test",
        passwordValid: false,
        passwordProperLength: false,
        passwordContainsNonLetter: false,
        passwordContainsLetter: true
    });

    expect(Subscribe.validatePassword("test9")).toEqual({
        password: "test9",
        passwordValid: false,
        passwordProperLength: false,
        passwordContainsNonLetter: true,
        passwordContainsLetter: true
    });

    expect(Subscribe.validatePassword("test95test")).toEqual({
        password: "test95test",
        passwordValid: true,
        passwordProperLength: true,
        passwordContainsNonLetter: true,
        passwordContainsLetter: true
    });
});