/**
 * Jest configuration for unit testing the Node.js/Express server
 * @author Andrew Jarombek
 * @since 5/16/2019
 */

module.exports = {
    displayName: "server",
    testEnvironment: 'node',
    testMatch: ["**/server/**/*.test.js"],
    maxConcurrency: 5,
    moduleNameMapper: {
        "\\.(scss|css)$": "jest-css-modules",
        "\\.(png|ttf)$": "mocks/fileMock.js"
    },
    collectCoverage: true,
    collectCoverageFrom: ["src/server/**/*.js"],
    coverageThreshold: {
        "global": {
            "branches": 25,
            "functions": 25,
            "lines": 50,
            "statements": 50
        }
    }
};
