# ツール設定

## 概要

このドキュメントでは、Katsumascore デザインシステムで使用される開発ツールの設定について説明します。

## ESLint

### 設定ファイル

```json
{
  "extends": [
    "@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
}
```

### 実行コマンド

```bash
# リンティング実行
npm run lint

# 自動修正
npm run lint:fix
```

## Prettier

### 設定ファイル

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### 実行コマンド

```bash
# フォーマット実行
npm run format
```

## Stylelint

### 設定ファイル

```javascript
module.exports = {
  extends: ['stylelint-config-recommended-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules',
      'rules'
    ],
    'order/properties-order': []
  }
};
```

### 実行コマンド

```bash
# スタイルリンティング実行
npm run stylelint

# 自動修正
npm run stylelint:fix
```

## TypeScript

### 設定ファイル

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

### 実行コマンド

```bash
# 型チェック実行
npm run type-check
```

## Vite

### 設定ファイル

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
```

## Storybook

### 設定ファイル

```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
};

export default config;
```

## エディタ設定

### VS Code

#### 推奨拡張機能

- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Prettier - Code formatter
- ESLint
- Stylelint

#### 設定

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

## トラブルシューティング

### よくある問題

1. **ESLintエラー**
   - 設定ファイルの確認
   - 依存関係の再インストール

2. **Prettierエラー**
   - 設定ファイルの構文確認
   - エディタの設定確認

3. **Stylelintエラー**
   - SCSSファイルの構文確認
   - 設定ファイルの確認

4. **TypeScriptエラー**
   - 型定義の確認
   - 設定ファイルの確認

## 関連リソース

- [Cursor AI TypeScriptルール](../.cursor/rules/typescript.mdc) - 詳細なTypeScript設定ガイドライン
- [Cursor AI ツール設定ルール](../.cursor/rules/project-structure.mdc) - プロジェクト設定の詳細
