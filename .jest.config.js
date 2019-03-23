// @flow

// Please note: this file should be named `.jest.config.js` because this way
// we can prevent calling `yarn jest` directly. It wouldn't work with config
// name `jest.config.js` because this config is being loaded automatically.

require('@babel/register'); // to be able to use non-transpiled '@kiwicom/monorepo' here

const path = require('path');
const { getWorkspacesSync } = require('@kiwicom/monorepo');

const TESTS_REGEXP = '__tests__/**/?(*.)+(spec|test).js';

// SEE: https://jestjs.io/docs/en/configuration.html
const commonProjectConfig = {
  // runs once per test file (before `setupFilesAfterEnv` and before
  // test framework is being installed)
  setupFiles: ['<rootDir>/scripts/setupTestFiles.js'],
  // runs before each test (after test framework is installed)
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTests.js'],
  globals: { __DEV__: true },
  transform: { '^.+\\.js$': 'babel-jest' },
  timers: 'fake',
  bail: 100,
  errorOnDeprecated: true,
};

module.exports = {
  rootDir: __dirname,
  verbose: false,
  reporters: ['default', 'jest-junit'],
  projects: [
    {
      // These tests are problematic because they are outside of workspaces
      // and therefore our TestsRunner doesn't know it should run them.
      // Moreover, there are some tests testing for example MD files which is
      // impossible to detect automatically (as a related test).
      displayName: null,
      ...commonProjectConfig,
      testMatch: [
        '<rootDir>/src/' + TESTS_REGEXP,
        '<rootDir>/scripts/**/' + TESTS_REGEXP,
      ],
    },

    ...getWorkspacesSync().map(packageJSONLocation => {
      const packageJSON = require(packageJSONLocation);
      return {
        displayName: packageJSON.name,
        ...commonProjectConfig,
        testMatch: [path.dirname(packageJSONLocation) + '/**/' + TESTS_REGEXP],
      };
    }),
  ],
};
