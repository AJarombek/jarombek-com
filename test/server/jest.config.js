/**
 * Jest configuration for unit testing the Node.js/Express server
 * @author Andrew Jarombek
 * @since 5/16/2019
 */

module.exports = {
    displayName: "server",
    testEnvironment: 'node',
    maxConcurrency: 5,
    collectCoverageFrom: ["*"],
    coverageThreshold: {
        "global": {
            "branches": 1,
            "functions": 1,
            "lines": 1,
            "statements": 1
        }
    }
};