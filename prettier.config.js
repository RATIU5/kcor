/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss'],
};
