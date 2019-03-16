/**
 * Jest configuration for unit testing
 * @author Andrew Jarombek
 * @since 8/11/2018
 */

module.exports = {
    setupTestFrameworkScriptFile: "./test/setupTests.js",
    moduleNameMapper: {
        "\\.(scss|css)$": "jest-css-modules",
        "\\.(png|ttf)$": "../../mocks/fileMock.js"
    },
    collectCoverageFrom: [
        "src/**"
    ],
    coveragePathIgnorePatterns: [
        "./src/client/index.js",
        "./src/client/status/*"
    ],
    coverageThreshold: {
        "global": {
            "branches": 1,
            "functions": 1,
            "lines": 1,
            "statements": 1
        }
    }
};