export default {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['simple-import-sort'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'no-console': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/prop-types': 'off',
    'unicorn/filename-case': 'off'
  }
};