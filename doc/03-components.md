# コンポーネント開発ガイド

## 概要

このガイドでは、Katsumascore デザインシステムでのReactコンポーネントの開発方法について説明します。

## コンポーネントの種類

### 1. Components（コンポーネント）
再利用可能なUIコンポーネント

### 2. Layouts（レイアウト）
ページ構造を定義するコンポーネント

### 3. Projects（プロジェクト）
プロジェクト固有のコンポーネント

## コンポーネント開発の基本

### ファイル構造

```
stories/components/ComponentName/
├── ComponentName.tsx           # メインコンポーネント
├── ComponentName.stories.tsx   # Storybookストーリー
└── index.ts                    # エクスポート（必要に応じて）
```

### コンポーネントの基本テンプレート

```tsx
import React from 'react';
import './ComponentName.scss';

interface ComponentNameProps {
  // プロパティの型定義
  children?: React.ReactNode;
  className?: string;
  // その他のプロパティ
}

const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`c-component-name ${className}`} {...props}>
      {children}
    </div>
  );
};

export default ComponentName;
```

## 命名規則

### コンポーネント名
- **PascalCase**: `ComponentName`
- **ファイル名**: `ComponentName.tsx`
- **CSSクラス**: `c-component-name`（kebab-case）

### プロパティ名
- **camelCase**: `isVisible`, `onClick`
- **イベントハンドラー**: `on` + イベント名（`onClick`, `onSubmit`）

## TypeScriptの型定義

### 基本の型定義

```tsx
interface ComponentProps {
  // 必須プロパティ
  title: string;
  
  // オプショナルプロパティ
  subtitle?: string;
  
  // 子要素
  children?: React.ReactNode;
  
  // スタイル関連
  className?: string;
  
  // イベントハンドラー
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  // その他のHTML属性
  id?: string;
  'data-testid'?: string;
}
```

### 高度な型定義

```tsx
// ユニオン型
type ButtonVariant = 'primary' | 'secondary' | 'danger';

// ジェネリック型
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// 条件付き型
interface ConditionalProps {
  variant: 'button' | 'link';
  href?: string; // variantが'link'の場合のみ必須
}
```

## Storybookストーリー

### 基本的なストーリー

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import ComponentName from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // プロパティの制御
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // デフォルトのプロパティ
  },
};

export const WithChildren: Story = {
  args: {
    children: 'サンプルテキスト',
  },
};
```

### 複数のバリエーション

```tsx
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'プライマリボタン',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'セカンダリボタン',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '無効なボタン',
  },
};
```

## スタイリング

### SCSSファイルの作成

```scss
// ComponentName.scss
.c-component-name {
  // ベーススタイル
  
  &__element {
    // 要素スタイル
  }
  
  &--modifier {
    // 修飾子スタイル
  }
  
  // 状態
  &:hover {
    // ホバー状態
  }
  
  &:focus {
    // フォーカス状態
  }
  
  // レスポンシブ
  @include mq-up(md) {
    // 中サイズ以上
  }
}
```

### ユーティリティクラスの活用

```tsx
// ユーティリティクラスを使用
<div className="c-component-name u-mb-4 u-text-center">
  {children}
</div>
```

## アクセシビリティ

### 基本的なアクセシビリティ

```tsx
const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`c-component-name ${className}`}
      role="button"
      tabIndex={0}
      aria-label="コンポーネントの説明"
      {...props}
    >
      {children}
    </div>
  );
};
```

### キーボードナビゲーション

```tsx
const handleKeyDown = (event: React.KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    // アクション実行
  }
};

return (
  <div
    onKeyDown={handleKeyDown}
    tabIndex={0}
    role="button"
  >
    {children}
  </div>
);
```

## パフォーマンス最適化

### React.memoの使用

```tsx
import React, { memo } from 'react';

const ComponentName = memo<ComponentNameProps>(({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`c-component-name ${className}`} {...props}>
      {children}
    </div>
  );
});

ComponentName.displayName = 'ComponentName';

export default ComponentName;
```

### useCallbackの使用

```tsx
import React, { useCallback } from 'react';

const ComponentName: React.FC<ComponentNameProps> = ({
  onClick,
  ...props
}) => {
  const handleClick = useCallback((event: React.MouseEvent) => {
    onClick?.(event);
  }, [onClick]);

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
```

## テスト

### 基本的なテスト

```tsx
import { render, screen } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName>テスト</ComponentName>);
    expect(screen.getByText('テスト')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<ComponentName className="custom-class">テスト</ComponentName>);
    expect(screen.getByText('テスト')).toHaveClass('custom-class');
  });
});
```

## ベストプラクティス

### 1. 単一責任の原則
- 1つのコンポーネントは1つの責任を持つ
- 複雑なロジックはカスタムフックに分離

### 2. プロパティの設計
- 必要最小限のプロパティを定義
- デフォルト値を適切に設定
- 型安全性を確保

### 3. スタイリング
- BEM記法に従う
- ユーティリティクラスを活用
- レスポンシブデザインを考慮

### 4. アクセシビリティ
- セマンティックなHTMLを使用
- キーボードナビゲーションをサポート
- スクリーンリーダーに対応

### 5. パフォーマンス
- 不要な再レンダリングを避ける
- 適切なメモ化を使用
- バンドルサイズを考慮

## トラブルシューティング

### よくある問題

1. **型エラー**
   - TypeScriptの型定義を確認
   - プロパティの型を適切に定義

2. **スタイルが適用されない**
   - CSSクラス名の確認
   - SCSSファイルのインポート確認

3. **Storybookで表示されない**
   - ストーリーファイルの構文確認
   - コンポーネントのエクスポート確認

4. **パフォーマンス問題**
   - 不要な再レンダリングの確認
   - メモ化の適用検討

## 関連リソース

- [Cursor AI Reactコンポーネントルール](../.cursor/rules/react-components.mdc) - 詳細なコンポーネント開発ガイドライン
- [Cursor AI TypeScriptルール](../.cursor/rules/typescript.mdc) - TypeScript型定義の詳細
- [Cursor AI Storybookルール](../.cursor/rules/storybook.mdc) - Storybookストーリー作成ガイド
