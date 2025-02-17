// @flow

const { ERROR, OFF } = require('../constants');

/*::

import type { EslintConfig } from '../EslintConfig.flow';

*/

module.exports = ({
  plugins: ['@next/eslint-plugin-next'],
  rules: {
    // Next.js (https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next)
    '@next/next/google-font-display': ERROR,
    '@next/next/google-font-preconnect': ERROR,
    '@next/next/inline-script-id': ERROR,
    '@next/next/next-script-for-ga': OFF, // TODO: https://github.com/vercel/next.js/issues/28635
    '@next/next/no-assign-module-variable': ERROR,
    '@next/next/no-before-interactive-script-outside-document': ERROR,
    '@next/next/no-css-tags': ERROR,
    '@next/next/no-document-import-in-page': ERROR,
    '@next/next/no-duplicate-head': ERROR,
    '@next/next/no-head-element': ERROR,
    '@next/next/no-head-import-in-document': ERROR,
    '@next/next/no-html-link-for-pages': ERROR,
    '@next/next/no-img-element': ERROR,
    '@next/next/no-page-custom-font': ERROR,
    '@next/next/no-script-component-in-head': ERROR,
    '@next/next/no-styled-jsx-in-document': ERROR,
    '@next/next/no-sync-scripts': ERROR,
    '@next/next/no-title-in-document-head': ERROR,
    '@next/next/no-typos': ERROR,
    '@next/next/no-unwanted-polyfillio': ERROR,
  },
} /*: EslintConfig */);
