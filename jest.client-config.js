/**
 * Jest configuration for unit testing the React.js client
 * @author Andrew Jarombek
 * @since 5/16/2019
 */

module.exports = {
    displayName: "client",
    testEnvironment: 'jsdom',
    testMatch: ["**/client/**/*.test.js"],
    setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
    maxConcurrency: 5,
    moduleNameMapper: {
        "\\.(scss|css)$": "jest-css-modules",
        "\\.(png|ttf)$": "../../mocks/fileMock.js"
    },
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    collectCoverage: true,
    collectCoverageFrom: ["src/client/**/*.js"],
    coveragePathIgnorePatterns: [
        "src/client/index.js"
    ],
    coverageThreshold: {
        "global": {
            "branches": 100,
            "functions": 100,
            "lines": 100,
            "statements": 100
        }
    },
    // https://github.com/jsdom/jsdom/issues/2304#issuecomment-408324623
    testURL: 'http://localhost/'
};
