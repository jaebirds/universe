// @flow

// Please note: this file should be named `.jest.config.js` because this way
// we can prevent calling `yarn jest` directly. It wouldn't work with config
// name `jest.config.js` because this config is being loaded automatically.

require('@babel/register'); // to be able to use non-transpiled '@kiwicom/monorepo' here

const fs = require('fs');
const path = require('path');
const { Workspaces } = require('@kiwicom/monorepo');

const TESTS_REGEXP = '__tests__/**/?(*.)+(spec|test).js';

// SEE: https://jestjs.io/docs/en/configuration.html
const commonProjectConfig = {
  // runs before each test (after test framework is installed)
  setupFilesAfterEnv: [path.join(__dirname, 'scripts/jest/setupTests.js')],
  globals: {
    __DEV__: true,
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  timers: 'fake',
};

function tryToLoadWorkspaceConfig(configPath /*: string */) /*: Object */ {
  if (fs.existsSync(configPath)) {
    console.warn(`Loaded additional config ${configPath}`);
    return require(configPath);
  }
  return {};
}

module.exports = {
  bail: 100,
  errorOnDeprecated: true,
  reporters: ['default', 'jest-junit'],
  rootDir: __dirname,
  verbose: false,
  projects: [
    {
      // TODO: get rid of this!
      // These tests are problematic because they are outside of workspaces
      // and therefore our TestsRunner doesn't know it should run them.
      // Moreover, there are some tests testing for example MD files which is
      // impossible to detect automatically (as a related test).
      displayName: null,
      ...commonProjectConfig,
      testMatch: [
        '<rootDir>/src/' + TESTS_REGEXP,
        '<rootDir>/src/apps/' + TESTS_REGEXP,
        '<rootDir>/src/packages/' + TESTS_REGEXP,
        '<rootDir>/scripts/**/' + TESTS_REGEXP,
      ],
    },

    ...Workspaces.getWorkspacesSync().map(packageJSONLocation => {
      const packageJSON = require(packageJSONLocation);
      const workspaceDirname = path.dirname(packageJSONLocation);
      return {
        displayName: packageJSON.name,
        testMatch: [workspaceDirname + '/**/' + TESTS_REGEXP],
        ...commonProjectConfig,
        ...tryToLoadWorkspaceConfig(
          path.join(workspaceDirname, 'jest.config.js'),
        ),
      };
    }),
  ],
};
