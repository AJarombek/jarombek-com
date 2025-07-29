/**
 * Jest testing for the {@link ../../src/client/BaseURL} class.
 * @author Andrew Jarombek
 * @since 2/6/2020
 */

import BaseURL from "../../src/client/BaseURL";

describe('unit tests', () => {

    it(`returns the production URL`, async () => {
        const env = process.env.NODE_ENV;
        process.env.NODE_ENV = 'production';
        expect(BaseURL.get()).toEqual('https://jarombek.com');

        process.env.NODE_ENV = env;
    });

    it(`returns the development URL`, async () => {
        const env = process.env.NODE_ENV;
        process.env.NODE_ENV = 'development';
        expect(BaseURL.get()).toEqual('https://dev.jarombek.com');

        process.env.NODE_ENV = env;
    });

    it(`returns the local URL`, async () => {
        const env = process.env.NODE_ENV;
        process.env.NODE_ENV = 'local';
        expect(BaseURL.get()).toEqual('http://localhost:8080');

        process.env.NODE_ENV = env;
    });

    it(`returns the production URL by default`, async () => {
        const env = process.env.NODE_ENV;
        process.env.NODE_ENV = 'other';
        expect(BaseURL.get()).toEqual('https://jarombek.com');

        process.env.NODE_ENV = env;
    });
});
