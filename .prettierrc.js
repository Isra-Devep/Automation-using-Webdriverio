module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
  plugins: [
    './node_modules/@trivago/prettier-plugin-sort-imports',
    './node_modules/prettier-plugin-sort-json',
  ],
  importOrder: ['^@(?!/).*$', '^@/.*$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
