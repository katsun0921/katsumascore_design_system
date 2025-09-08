import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';

export default [
  // 基本のJavaScriptルール
  js.configs.recommended,

  // TypeScriptファイル用の設定
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true,
        es2020: true,
        window: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        console: 'readonly',
        globalVar: 'writable',
        globalObj: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      'storybook': storybook,
    },
    rules: {
      // TypeScriptルール
      ...typescript.configs.recommended.rules,

      // Reactルール
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Storybookルール
      ...storybook.configs.recommended.rules,

      // カスタムルール
      '@next/next/no-img-element': 'off',
      'prefer-arrow-callback': 'error',
      'react/react-in-jsx-scope': 'off', // React 17+では不要
      'react/prop-types': 'off', // TypeScriptを使用しているため
      'react/no-unescaped-entities': 'off', // 日本語テキストのため
      'no-empty-pattern': 'off', // 空のオブジェクトパターンを許可
      'no-undef': 'off', // TypeScriptが型チェックを行うため
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off', // 戻り値の型を必須にしない
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // JavaScriptファイル用の設定
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        browser: true,
        es2020: true,
        window: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        console: 'readonly',
        globalVar: 'writable',
        globalObj: 'readonly',
      },
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Storybookファイル用の設定
  {
    files: ['**/*.stories.{ts,tsx,js,jsx}'],
    rules: {
      ...storybook.configs.recommended.rules,
      'storybook/hierarchy-separator': 'warn',
      'storybook/default-exports': 'warn',
      '@typescript-eslint/no-unused-vars': 'off', // Storybookでは未使用変数が多くなる
      'no-undef': 'off', // Storybookのグローバル変数
    },
  },

  // 除外ファイル
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.ts',
    ],
  },
];
