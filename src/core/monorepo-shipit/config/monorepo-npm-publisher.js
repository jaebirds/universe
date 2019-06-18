// @flow strict

module.exports = {
  getStaticConfig() {
    return {
      repository: 'git@github.com:kiwicom/monorepo-npm-publisher.git',
    };
  },
  getDefaultPathMappings(): Map<string, string> {
    return new Map([['src/core/monorepo-npm-publisher/', '']]);
  },
};
