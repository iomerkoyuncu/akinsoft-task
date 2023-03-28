module.exports = {
  semi: false,
  tabWidth: 2,
  useTabs: false,
  printWidth: 130,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  overrides: [
    {
      files: ['*.sass', '*.scss', '*.html'],
      options: {
        printWidth: 200
      }
    }
  ]
}
