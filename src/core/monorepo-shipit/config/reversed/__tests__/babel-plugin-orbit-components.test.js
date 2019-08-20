// @flow strict-local

import path from 'path';

import testExportedPaths from '../../__tests__/testExportedPaths';

testExportedPaths(path.join(__dirname, '..', 'babel-plugin-orbit-components.js'), [
  ['src/packages/babel-plugin-orbit-components/package.json', 'package.json'],
  ['src/packages/babel-plugin-orbit-components/index.js', 'index.js'],

  // OSS specific:
  ['src/packages/babel-plugin-orbit-components/__github__/.travis.yml', '.travis.yml'],
  ['src/packages/babel-plugin-orbit-components/__github__/.eslintignore', '.eslintignore'],

  // invalid cases:
  ['src/packages/xyz/outsideScope.js', undefined], // correctly deleted
  ['package.json', undefined], // correctly deleted
]);
