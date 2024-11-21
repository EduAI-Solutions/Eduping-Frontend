import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier: pluginPrettier,
      'simple-import-sort': simpleImportSort,
      import: pluginImport,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: { prettier: pluginPrettier },
    extends: ['plugin:prettier/recommended'],
  },
];
