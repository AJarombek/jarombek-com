/**
 * Jest and Enzyme testing for the {@link ../../src/client/Subscribe} React component
 * @author Andrew Jarombek
 * @since 6/24/2018
 */

import React from 'react';
import Subscribe from '../../src/client/Subscribe';
import { mount } from 'enzyme/build/index';

import fetchMock from 'fetch-mock';

describe('unit tests', () => {
  it('Mock of Create User Returns As Expected', async () => {
    fetchMock.mock('http://localhost:8080/api/subscriber', {
      body: {},
      status: 200
    });

    const response = await Subscribe.createSubscriber(
      'andrew@jarombek.com',
      'Andy',
      'Jarombek',
      'test95test',
      'http://localhost:8080'
    );

    expect(response).toEqual(200);
  });

  it('validateEmail Function Works as Expected', () => {
    expect(Subscribe.validateEmail('andrew@jarombek.com')).toEqual({
      email: 'andrew@jarombek.com',
      emailValid: true
    });

    expect(Subscribe.validateEmail('andrew@jar.c')).toEqual({
      email: 'andrew@jar.c',
      emailValid: false
    });
  });

  it('validateFirstName Function Works as Expected', () => {
    expect(Subscribe.validateFirstName('Andrew')).toEqual({
      firstName: 'Andrew',
      firstNameValid: true
    });

    expect(Subscribe.validateFirstName('Andrew9')).toEqual({
      firstName: 'Andrew9',
      firstNameValid: false
    });
  });

  it('validateLastName Function Works as Expected', () => {
    expect(Subscribe.validateLastName('Jarombek')).toEqual({
      lastName: 'Jarombek',
      lastNameValid: true
    });

    expect(Subscribe.validateLastName('Jar95bek!')).toEqual({
      lastName: 'Jar95bek!',
      lastNameValid: false
    });
  });

  it('validatePassword Function Works as Expected', () => {
    expect(Subscribe.validatePassword('test')).toEqual({
      password: 'test',
      passwordValid: false,
      passwordProperLength: false,
      passwordContainsNonLetter: false,
      passwordContainsLetter: true
    });

    expect(Subscribe.validatePassword('test9')).toEqual({
      password: 'test9',
      passwordValid: false,
      passwordProperLength: false,
      passwordContainsNonLetter: true,
      passwordContainsLetter: true
    });

    expect(Subscribe.validatePassword('test95test')).toEqual({
      password: 'test95test',
      passwordValid: true,
      passwordProperLength: true,
      passwordContainsNonLetter: true,
      passwordContainsLetter: true
    });
  });
});

describe('integration tests', () => {
  it('displays the subscription form when enabled', () => {
    const wrapper = mount(<Subscribe />);
    wrapper.setState({ enabled: true });

    expect(wrapper.find('.jarbek-subscribe-form')).toHaveLength(1);
    expect(wrapper.find('.jarbek-subscribe-coming-soon')).toHaveLength(0);
  });

  it('displays the "coming soon" text when disabled', () => {
    const wrapper = mount(<Subscribe />);
    wrapper.setState({ enabled: false });

    expect(wrapper.find('.jarbek-subscribe-form')).toHaveLength(0);
    expect(wrapper.find('.jarbek-subscribe-coming-soon')).toHaveLength(1);
    expect(wrapper.find('.jarbek-subscribe-coming-soon').text()).toEqual('Subscription Emails Coming in 2020');
  });

  it('uses production url', () => {
    const env = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';
    const wrapper = mount(<Subscribe />);
    expect(wrapper.instance().baseUrl).toEqual('https://jarombek.com');

    process.env.NODE_ENV = env;
  });

  it('uses local url', () => {
    const env = process.env.NODE_ENV;
    process.env.NODE_ENV = 'local';
    const wrapper = mount(<Subscribe />);

    expect(wrapper.instance().baseUrl).toEqual('http://localhost:8080');

    process.env.NODE_ENV = env;
  });
});
