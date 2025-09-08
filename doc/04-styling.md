# スタイリングガイド

## 概要

Katsumascore デザインシステムでは、ITCSSアーキテクチャとFLOCSS設計手法を採用し、スケーラブルで保守性の高いCSSを構築しています。

## ITCSSアーキテクチャ

### レイヤー構造

ITCSSは、CSSの特異性と詳細度を管理するための設計手法です。以下の順序でレイヤーが構成されています：

1. **Foundation（基盤）** - 最も具体的でない
2. **Global（グローバル）** - 変数、ミックスイン
3. **Layout（レイアウト）** - ページ構造
4. **Object（オブジェクト）** - 再利用可能なコンポーネント
5. **Inc（外部ライブラリ）** - サードパーティCSS
6. **Plugins（プラグイン）** - プラグイン固有スタイル

### レイヤーの詳細

#### 1. Foundation（基盤レイヤー）

```scss
// _reset.scss - CSSリセット
* {
  box-sizing: border-box;
}

// _base.scss - ベーススタイル
body {
  font-family: $font-family-base;
  line-height: $line-height-base;
}
```

#### 2. Global（グローバルレイヤー）

```scss
// variable/_colors.scss - カラー変数
$color-primary: #007bff;
$color-secondary: #6c757d;

// mixin/_screens.scss - ブレークポイント
@mixin mq-up($breakpoint) {
  @media (min-width: map-get($breakpoints, $breakpoint)) {
    @content;
  }
}
```

#### 3. Layout（レイアウトレイヤー）

```scss
// _container.scss
.l-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

// _header.scss
.l-header {
  background-color: $color-primary;
  height: 60px;
}
```

#### 4. Object（オブジェクトレイヤー）

```scss
// component/_button.scss
.c-button {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  
  &--primary {
    background-color: $color-primary;
    color: white;
  }
}

// utility/_margin.scss
.u-mb-4 {
  margin-bottom: 1rem;
}
```

## FLOCSS設計手法

### クラス命名規則

FLOCSSは以下の3つのレイヤーで構成されます：

- **Foundation**: 基盤スタイル
- **Layout**: レイアウト
- **Object**: オブジェクト（Component, Project, Utility）

### プレフィックス

```scss
// Layout
.l-container
.l-header
.l-footer

// Component
.c-button
.c-card
.c-form

// Project
.p-hero
.p-article
.p-sidebar

// Utility
.u-mb-4
.u-text-center
.u-hidden
```

## BEM記法

### 基本構造

FLOCSSに準拠し、BEM記法を採用しますが、**Modifierは使用しません**。Modifierの代わりにユーティリティクラスを使用します。

```scss
.block {
  // ブロックのスタイル
  
  &__element {
    // エレメントのスタイル
  }
  
  // モディファイアは使用しない
  // &--modifier { }
}
```

### 実例

#### ✅ 推奨パターン

```scss
.c-button {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &__icon {
    margin-right: 8px;
  }
}
```

```html
<!-- ユーティリティクラスを使用 -->
<button class="c-button c-button__icon u-bg-primary u-text-white u-p-4">
  <span class="c-button__icon">📧</span>
  送信
</button>
```

#### ❌ 非推奨パターン

```scss
.c-button {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &__element {
    // エレメントのスタイル
    &--modifier {
      display: block; // モディファイアは使用しない
    }
  }
}
```

```html
<!-- モディファイアは使用しない -->
<div class="c-button__element c-button__element--modifier"></div>
```

## 変数とミックスイン

### カラー変数

変数名は**Tailwind CSS**の命名規則を参照します。

```scss
// variable/_colors.scss
// Tailwind CSSのカラーパレットを参考
$color-primary: #007bff;
$color-secondary: #6c757d;
$color-success: #28a745;
$color-danger: #dc3545;
$color-warning: #ffc107;
$color-info: #17a2b8;

// グレースケール（Tailwind CSS準拠）
$color-white: #ffffff;
$color-gray-50: #f9fafb;
$color-gray-100: #f3f4f6;
$color-gray-200: #e5e7eb;
$color-gray-300: #d1d5db;
$color-gray-400: #9ca3af;
$color-gray-500: #6b7280;
$color-gray-600: #4b5563;
$color-gray-700: #374151;
$color-gray-800: #1f2937;
$color-gray-900: #111827;
$color-black: #000000;

// 参考: https://tailwindcss.com/docs/customizing-colors
```

### タイポグラフィ変数

Tailwind CSSのフォントサイズとウェイトを参考にします。

```scss
// variable/_fontWeight.scss
// Tailwind CSSのフォントウェイトを参考
$font-weight-thin: 100;
$font-weight-extralight: 200;
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
$font-weight-extrabold: 800;
$font-weight-black: 900;

// フォントサイズ（Tailwind CSS準拠）
$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;   // 14px
$font-size-base: 1rem;     // 16px
$font-size-lg: 1.125rem;   // 18px
$font-size-xl: 1.25rem;    // 20px
$font-size-2xl: 1.5rem;    // 24px
$font-size-3xl: 1.875rem;  // 30px
$font-size-4xl: 2.25rem;   // 36px
$font-size-5xl: 3rem;      // 48px
$font-size-6xl: 3.75rem;   // 60px

// 参考: https://tailwindcss.com/docs/font-size
```

### ブレークポイント

Tailwind CSSのブレークポイントを参考にします。

```scss
// mixin/_screens.scss
// Tailwind CSSのブレークポイントを参考
$breakpoints: (
  sm: 640px,   // 640px以上
  md: 768px,   // 768px以上
  lg: 1024px,  // 1024px以上
  xl: 1280px,  // 1280px以上
  2xl: 1536px  // 1536px以上
);

@mixin mq-up($breakpoint) {
  @media (min-width: map-get($breakpoints, $breakpoint)) {
    @content;
  }
}

@mixin mq-down($breakpoint) {
  @media (max-width: map-get($breakpoints, $breakpoint) - 1px) {
    @content;
  }
}

// 参考: https://tailwindcss.com/docs/responsive-design
```

### アニメーション

```scss
// mixin/_animation.scss
@mixin transition($property: all, $duration: 0.3s, $timing: ease) {
  transition: $property $duration $timing;
}

@mixin fade-in($duration: 0.3s) {
  opacity: 0;
  animation: fadeIn $duration ease-in-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
```

## ユーティリティクラス

**ユーティリティクラスを重視**し、Tailwind CSSの命名規則とスペーシングシステムを参考にします。

### マージン・パディング

Tailwind CSSのスペーシングシステム（0.25rem = 4px）を採用します。

```scss
// utility/_margin.scss
// Tailwind CSSのスペーシングシステムを参考
.u-m-0 { margin: 0; }
.u-m-1 { margin: 0.25rem; }  // 4px
.u-m-2 { margin: 0.5rem; }   // 8px
.u-m-3 { margin: 0.75rem; }  // 12px
.u-m-4 { margin: 1rem; }     // 16px
.u-m-5 { margin: 1.25rem; }  // 20px
.u-m-6 { margin: 1.5rem; }   // 24px
.u-m-8 { margin: 2rem; }     // 32px
.u-m-10 { margin: 2.5rem; }  // 40px
.u-m-12 { margin: 3rem; }    // 48px

// 方向別マージン
.u-mt-0 { margin-top: 0; }
.u-mt-1 { margin-top: 0.25rem; }
.u-mt-2 { margin-top: 0.5rem; }
.u-mt-3 { margin-top: 0.75rem; }
.u-mt-4 { margin-top: 1rem; }

// パディングも同様
.u-p-0 { padding: 0; }
.u-p-1 { padding: 0.25rem; }
.u-p-2 { padding: 0.5rem; }
.u-p-3 { padding: 0.75rem; }
.u-p-4 { padding: 1rem; }

// 参考: https://tailwindcss.com/docs/customizing-spacing
```

### テキスト関連

```scss
// utility/_textAlign.scss
.u-text-left { text-align: left; }
.u-text-center { text-align: center; }
.u-text-right { text-align: right; }

// utility/_textColor.scss
.u-text-primary { color: $color-primary; }
.u-text-secondary { color: $color-secondary; }
.u-text-success { color: $color-success; }
.u-text-danger { color: $color-danger; }

// utility/_fontSize.scss
.u-text-xs { font-size: $font-size-xs; }
.u-text-sm { font-size: $font-size-sm; }
.u-text-base { font-size: $font-size-base; }
.u-text-lg { font-size: $font-size-lg; }
.u-text-xl { font-size: $font-size-xl; }
```

### レイアウト

```scss
// utility/_display.scss
.u-block { display: block; }
.u-inline { display: inline; }
.u-inline-block { display: inline-block; }
.u-flex { display: flex; }
.u-grid { display: grid; }
.u-hidden { display: none; }

// utility/_flexDirection.scss
.u-flex-row { flex-direction: row; }
.u-flex-col { flex-direction: column; }

// utility/_justifyContent.scss
.u-justify-start { justify-content: flex-start; }
.u-justify-center { justify-content: center; }
.u-justify-end { justify-content: flex-end; }
.u-justify-between { justify-content: space-between; }
```

## レスポンシブデザイン

### モバイルファースト

```scss
.c-card {
  // モバイル（デフォルト）
  padding: 1rem;
  margin-bottom: 1rem;
  
  // タブレット以上
  @include mq-up(md) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  // デスクトップ以上
  @include mq-up(lg) {
    padding: 2rem;
    margin-bottom: 2rem;
  }
}
```

### コンテナクエリ（将来対応）

```scss
.c-card {
  container-type: inline-size;
  
  @container (min-width: 300px) {
    .c-card__content {
      display: flex;
      flex-direction: row;
    }
  }
}
```

## パフォーマンス最適化

### CSS最適化

```scss
// 効率的なセレクタ
.c-button {
  // 良い例：クラスセレクタ
}

// 避けるべき例
div.c-button {
  // 悪い例：要素とクラスの組み合わせ
}

.c-button .c-button__icon {
  // 悪い例：ネストが深い
}
```

### 未使用CSSの削除

```scss
// 使用されていないクラスは削除
.u-unused-class {
  // このクラスは使用されていない
}
```

## ベストプラクティス

### 1. 命名規則
- プレフィックスを適切に使用
- 意味のある名前を付ける
- 一貫性を保つ

### 2. 構造化
- ITCSSのレイヤー順序を守る
- ファイルを適切に分割
- インポート順序を管理

### 3. 保守性
- 変数とミックスインを活用
- コメントを適切に記述
- ドキュメントを更新

### 4. パフォーマンス
- 効率的なセレクタを使用
- 未使用のCSSを削除
- 適切な単位を使用

### 5. アクセシビリティ
- コントラスト比を考慮
- フォーカス状態を定義
- スクリーンリーダーに対応

## トラブルシューティング

### よくある問題

1. **スタイルが適用されない**
   - セレクタの特異性を確認
   - インポート順序を確認
   - キャッシュをクリア

2. **レスポンシブが効かない**
   - ブレークポイントの設定を確認
   - メタタグの設定を確認
   - ミックスインの使用方法を確認

3. **変数が認識されない**
   - 変数ファイルのインポートを確認
   - スコープを確認
   - 構文エラーを確認

## 関連リソース

- [Cursor AI SCSSスタイリングルール](../.cursor/rules/scss-styling.mdc) - 詳細なSCSS開発ガイドライン
- [Cursor AI パフォーマンスルール](../.cursor/rules/performance.mdc) - CSS最適化の詳細
