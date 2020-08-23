module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',

    'react/no-unescaped-entities': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'react/display-name': 'warn',
    'react/jsx-key': 'warn',
    'no-prototype-builtins': 'warn',
    'no-class-assign': 'warn',
    'prefer-const': 'warn',
    'no-shadow': 'warn',
    'no-plusplus': 'warn',
    'no-unused-expressions': 'warn',
    camelcase: 'warn',
    'no-return-assign': 'warn',
    'default-case': 'warn',

    'prefer-destructuring': 'warn',
    radix: 'warn',

    'no-restricted-syntax': 'warn',
    'guard-for-in': 'warn',
    'prefer-rest-params': 'warn',
    'no-use-before-define': 'warn',
    'no-await-in-loop': 'warn',
    'no-throw-literal': 'warn',
    'import/no-unresolved': 'warn',
    'import/extensions': 'warn',
    'class-methods-use-this': 'warn',
    'import/no-duplicates': 'warn',
    'import/named': 'warn',
    'consistent-return': 'warn',
    'no-continue': 'warn',
    'no-nested-ternary': 'warn',
    'import/no-mutable-exports': 'warn',
    'no-case-declarations': 'warn',
    eqeqeq: 'warn',
  },
};
