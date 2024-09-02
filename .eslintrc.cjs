// .eslintrc.cjs

module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended', // Extends ESLint's recommended rules
      'plugin:prettier/recommended', // Integrates Prettier with ESLint
    ],
    parserOptions: {
      ecmaVersion: 12, // Supports ECMAScript 2021 syntax
      sourceType: 'module', // Allows the use of imports
    },
    rules: {
      // Customize your rules
      'no-console': 'warn', // Warn on console statements
      'no-unused-vars': 'warn', // Warn on unused variables
      'prettier/prettier': ['error', { singleQuote: true, semi: false }], // Enforce Prettier rules
    },
    plugins: ['prettier'], // Adds Prettier plugin
    "semi" : [2, "always"]
  };
  