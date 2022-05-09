module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require.resolve('prettier-plugin-packagejson')],
  overrides: [
    {
      files: [
        '*.css',
        '*.less',
        '*.scss',
        '*.json',
        '*.jsonc',
        '*.json5',
        '**/*.css',
        '**/*.less',
        '**/*.scss',
        '**/*.json',
        '**/*.jsonc',
        '**/*.json5',
      ],
      options: {
        singleQuote: false,
        trailingComma: 'none',
      },
    },
  ],
};
