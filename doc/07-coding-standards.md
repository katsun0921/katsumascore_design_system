# コーディング規約

## 概要

このドキュメントでは、Katsumascore デザインシステムのコーディング規約について説明します。一貫性のあるコードを書くことで、保守性と可読性を向上させます。

## TypeScript規約

### 基本ルール

#### 1. 型定義

```typescript
// 良い例：明示的な型定義
interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// 悪い例：型の推論に依存
const Button = ({ children, variant, onClick }) => {
  // ...
};
```

#### 2. 関数の定義

```typescript
// 良い例：アロー関数と型注釈
const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
  event.preventDefault();
  // ...
};

// 悪い例：型注釈なし
const handleClick = (event) => {
  // ...
};
```

#### 3. コンポーネントの定義

```typescript
// 良い例：React.FCを使用
const Button: React.FC<ButtonProps> = ({ children, variant, onClick }) => {
  return (
    <button className={`c-button c-button--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

// 悪い例：型注釈なし
const Button = ({ children, variant, onClick }) => {
  // ...
};
```

### 命名規則

#### 1. 変数・関数名

```typescript
// camelCaseを使用
const userName = 'John Doe';
const isVisible = true;
const handleSubmit = () => {};

// 定数はUPPER_SNAKE_CASE
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = 'https://api.example.com';
```

#### 2. 型・インターフェース名

```typescript
// PascalCaseを使用
interface UserProfile {
  id: string;
  name: string;
  email: string;
}

type ButtonVariant = 'primary' | 'secondary' | 'danger';

// ジェネリック型
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```

#### 3. ファイル名

```typescript
// PascalCaseを使用
// Button.tsx
// UserProfile.tsx
// ApiClient.ts
```

### インポート・エクスポート

#### 1. インポート順序

```typescript
// 1. React関連
import React, { useState, useEffect } from 'react';

// 2. サードパーティライブラリ
import { styled } from '@emotion/styled';
import { format } from 'date-fns';

// 3. 内部モジュール（絶対パス）
import { Button } from '@/components/Button';
import { UserService } from '@/services/UserService';

// 4. 相対パス
import './Button.scss';
import { ButtonProps } from './types';
```

#### 2. エクスポート

```typescript
// デフォルトエクスポート
export default Button;

// 名前付きエクスポート
export { Button, ButtonProps };
export type { ButtonVariant };
```

### エラーハンドリング

```typescript
// 良い例：適切なエラーハンドリング
const fetchUser = async (id: string): Promise<User | null> => {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
};

// 悪い例：エラーハンドリングなし
const fetchUser = async (id: string) => {
  const response = await fetch(`/api/users/${id}`);
  return await response.json();
};
```

## SCSS規約

### 基本ルール

#### 1. ネストの深さ

```scss
// 良い例：3レベルまで
.c-button {
  display: inline-block;
  
  &__icon {
    margin-right: 8px;
    
    &--large {
      font-size: 1.2rem;
    }
  }
}

// 悪い例：ネストが深すぎる
.c-button {
  &__icon {
    &__wrapper {
      &__content {
        // 4レベル以上は避ける
      }
    }
  }
}
```

#### 2. 変数の使用

```scss
// 良い例：変数を使用
$color-primary: #007bff;
$spacing-base: 1rem;

.c-button {
  background-color: $color-primary;
  padding: $spacing-base;
}

// 悪い例：マジックナンバー
.c-button {
  background-color: #007bff;
  padding: 16px;
}
```

#### 3. ミックスインの使用

```scss
// 良い例：ミックスインを使用
@mixin button-base {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.c-button {
  @include button-base;
  background-color: $color-primary;
}
```

### 命名規則

#### 1. クラス名

```scss
// BEM記法に従う
.c-button { }                    // ブロック
.c-button__icon { }              // エレメント
.c-button--primary { }           // モディファイア

// ユーティリティクラス
.u-mb-4 { }                      // マージンボトム
.u-text-center { }               // テキスト中央揃え
```

#### 2. 変数名

```scss
// kebab-caseを使用
$color-primary: #007bff;
$font-size-base: 1rem;
$spacing-unit: 8px;

// 悪い例：camelCase
$colorPrimary: #007bff;
$fontSizeBase: 1rem;
```

#### 3. ミックスイン名

```scss
// kebab-caseを使用
@mixin button-base { }
@mixin responsive-grid { }
@mixin text-truncate { }
```

### ファイル構造

```scss
// ファイルの先頭にコメント
/**
 * Button Component
 * ボタンコンポーネントのスタイル
 */

// インポート
@import '../global/variable/colors';
@import '../global/mixin/button-base';

// メインスタイル
.c-button {
  // スタイル定義
}
```

## React規約

### コンポーネント設計

#### 1. 単一責任の原則

```typescript
// 良い例：単一の責任
const UserAvatar: React.FC<UserAvatarProps> = ({ user, size = 'medium' }) => {
  return (
    <img
      src={user.avatar}
      alt={user.name}
      className={`c-user-avatar c-user-avatar--${size}`}
    />
  );
};

// 悪い例：複数の責任
const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <img src={user.avatar} alt={user.name} />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <button onClick={() => deleteUser(user.id)}>削除</button>
    </div>
  );
};
```

#### 2. プロパティの設計

```typescript
// 良い例：適切なプロパティ設計
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  'data-testid'?: string;
}

// 悪い例：不適切なプロパティ設計
interface ButtonProps {
  children: any;
  variant: string;
  size: string;
  disabled: boolean;
  onClick: Function;
  className: string;
  testId: string;
}
```

### フックの使用

#### 1. useState

```typescript
// 良い例：適切な型定義
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
const [isLoading, setIsLoading] = useState<boolean>(false);

// 悪い例：型定義なし
const [count, setCount] = useState(0);
const [user, setUser] = useState(null);
```

#### 2. useEffect

```typescript
// 良い例：適切な依存関係
useEffect(() => {
  const fetchUser = async () => {
    const userData = await UserService.getUser(userId);
    setUser(userData);
  };
  
  fetchUser();
}, [userId]); // 依存関係を明示

// 悪い例：依存関係の不足
useEffect(() => {
  const fetchUser = async () => {
    const userData = await UserService.getUser(userId);
    setUser(userData);
  };
  
  fetchUser();
}, []); // userIdが変更されても再実行されない
```

### イベントハンドリング

```typescript
// 良い例：適切な型定義
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // 処理
};

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  // 処理
};

// 悪い例：型定義なし
const handleSubmit = (event) => {
  // 処理
};
```

## コメント規約

### 1. 関数・コンポーネントのコメント

```typescript
/**
 * ユーザー情報を取得する
 * @param userId - ユーザーID
 * @returns ユーザー情報またはnull
 */
const fetchUser = async (userId: string): Promise<User | null> => {
  // 実装
};

/**
 * ユーザーアバターコンポーネント
 * @param user - ユーザー情報
 * @param size - アバターサイズ
 */
const UserAvatar: React.FC<UserAvatarProps> = ({ user, size = 'medium' }) => {
  // 実装
};
```

### 2. 複雑なロジックのコメント

```typescript
const calculateTotal = (items: CartItem[]): number => {
  // 税込み価格を計算
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  
  // 消費税を計算（10%）
  const tax = subtotal * 0.1;
  
  // 合計金額を返す
  return subtotal + tax;
};
```

### 3. TODOコメント

```typescript
// TODO: エラーハンドリングを改善する
const processData = (data: any) => {
  // 実装
};

// FIXME: パフォーマンスの問題を修正する
const expensiveOperation = () => {
  // 実装
};
```

## ベストプラクティス

### 1. コードの可読性

- 意味のある変数名・関数名を使用
- 適切なコメントを記述
- 適切なインデントとフォーマット

### 2. パフォーマンス

- 不要な再レンダリングを避ける
- 適切なメモ化を使用
- 効率的なデータ構造を選択

### 3. セキュリティ

- 入力値の検証
- XSS攻撃の防止
- 機密情報の適切な管理

### 4. テスト

- 単体テストの作成
- 統合テストの実装
- テストカバレッジの維持

## ツール設定

### ESLint設定

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

### Prettier設定

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

### Stylelint設定

```json
{
  "extends": ["stylelint-config-recommended-scss"],
  "rules": {
    "selector-class-pattern": "^[a-z][a-z0-9]*(__[a-z0-9]+)*(--[a-z0-9]+)*$",
    "scss/at-rule-no-unknown": true,
    "scss/selector-no-redundant-nesting-selector": true
  }
}
```

## 関連リソース

- [Cursor AI TypeScriptルール](../.cursor/rules/typescript.mdc) - 詳細なTypeScript開発ガイドライン
- [Cursor AI SCSSスタイリングルール](../.cursor/rules/scss-styling.mdc) - 詳細なSCSS開発ガイドライン
- [Cursor AI Reactコンポーネントルール](../.cursor/rules/react-components.mdc) - React開発の詳細ガイドライン
