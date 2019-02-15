module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['prettier', 'react', 'jest', 'jsx-a11y'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'prefer-destructuring': 'off',
    semi: ['error', 'never'],
    'eol-last': 'off',
    'no-console': 'off',
    'no-restricted-syntax': 'warn',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'warn',
    'react/prop-types': 'warn',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['>', '"', '}'],
      },
    ],
  },
}
