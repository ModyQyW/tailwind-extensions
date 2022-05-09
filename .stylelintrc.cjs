module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'selector-type-no-unknown': null,
    'no-descending-specificity': null,
  },
};
