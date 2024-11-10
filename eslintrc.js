module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // React 17부터 필요 없음
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};