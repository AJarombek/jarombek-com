module.exports = {
    setupTestFrameworkScriptFile: "./setupTests.js",
    moduleNameMapper: {
        "\\.(scss)$": "jest-css-modules",
        "\\.(png|ttf)$": "./mocks/fileMock.js"
    },
    collectCoverageFrom: [
        "../src/**"
    ],
    coveragePathIgnorePatterns: [
        "../src/client/index.js",
        "../src/client/status/*"
    ],
    coverageThreshold: {
        "global": {
            "branches": 1,
            "functions": 1,
            "lines": 1,
            "statements": 1
        }
    },
    testEnvironmentOptions: {
        beforeParse(window) {
            window.scrollTo = () => {console.info('Scrolling...')};
        }
    }
};