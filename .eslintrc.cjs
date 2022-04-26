module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    commonjs: true,
    es2022: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
};
