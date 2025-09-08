# アーキテクチャ

## プロジェクト構造

Katsumascore デザインシステムは、モジュラーで拡張可能なアーキテクチャを採用しています。

## ディレクトリ構成

### ルートディレクトリ

```
katsumascore_design_system/
├── doc/                    # ドキュメント
├── public/                 # 静的ファイル
├── src/                    # ソースコード
├── package.json            # 依存関係とスクリプト
├── tsconfig.json           # TypeScript設定
├── vite.config.ts          # Vite設定
└── README.md               # プロジェクト概要
```

### src/ ディレクトリ

```
src/
├── stories/                # Storybook関連
│   ├── components/         # 再利用可能なUIコンポーネント
│   ├── layouts/            # レイアウトコンポーネント
│   ├── projects/           # プロジェクト固有コンポーネント
│   └── styles/             # スタイルドキュメント
├── scss/                   # SCSSスタイルシート
├── ts/                     # TypeScriptモジュール
├── assets/                 # 静的アセット
├── inc/                    # サードパーティライブラリ
└── admin/                  # WordPress管理画面
```

## ITCSSアーキテクチャ

SCSSはITCSS（Inverted Triangle CSS）アーキテクチャに従って構成されています。

### レイヤー構造

```
scss/
├── foundation/             # 1. 基盤レイヤー
│   ├── _reset.scss         # CSSリセット
│   ├── _base.scss          # ベーススタイル
│   └── index.scss          # エントリーポイント
├── global/                 # 2. グローバルレイヤー
│   ├── mixin/              # ミックスイン
│   ├── variable/           # 変数
│   └── index.scss          # エントリーポイント
├── layout/                 # 3. レイアウトレイヤー
│   ├── _container.scss     # コンテナ
│   ├── _header.scss        # ヘッダー
│   ├── _footer.scss        # フッター
│   └── index.scss          # エントリーポイント
├── object/                 # 4. オブジェクトレイヤー
│   ├── component/          # UIコンポーネント
│   ├── project/            # プロジェクト固有
│   ├── utility/            # ユーティリティクラス
│   └── index.scss          # エントリーポイント
├── inc/                    # 5. 外部ライブラリ
│   └── index.scss          # エントリーポイント
└── plugins/                # 6. プラグイン固有
    └── index.scss          # エントリーポイント
```

### レイヤーの詳細

#### 1. Foundation（基盤）
- **目的**: ブラウザのデフォルトスタイルをリセット
- **ファイル**: `_reset.scss`, `_base.scss`
- **特徴**: 最も具体的でないセレクタ

#### 2. Global（グローバル）
- **目的**: 変数、ミックスイン、関数の定義
- **ファイル**: `variable/`, `mixin/`
- **特徴**: プロジェクト全体で使用される設定

#### 3. Layout（レイアウト）
- **目的**: ページの大まかな構造
- **ファイル**: `_header.scss`, `_footer.scss`, `_container.scss`
- **特徴**: グリッドシステム、ヘッダー、フッターなど

#### 4. Object（オブジェクト）
- **目的**: 再利用可能なUIコンポーネント
- **ファイル**: `component/`, `project/`, `utility/`
- **特徴**: ボタン、フォーム、カードなどのコンポーネント

#### 5. Inc（外部ライブラリ）
- **目的**: サードパーティのCSS
- **ファイル**: Font Awesome、Pe Icon 7 Stroke
- **特徴**: 外部ライブラリのスタイル

#### 6. Plugins（プラグイン）
- **目的**: WordPressプラグイン固有のスタイル
- **ファイル**: `_postViewCounter.scss`
- **特徴**: プラグインに依存するスタイル

## コンポーネントアーキテクチャ

### Reactコンポーネント構造

```
stories/components/ComponentName/
├── ComponentName.tsx           # メインコンポーネント
├── ComponentName.stories.tsx   # Storybookストーリー
└── index.ts                    # エクスポート（必要に応じて）
```

### コンポーネント分類

#### Components（コンポーネント）
- **目的**: 再利用可能なUIコンポーネント
- **例**: Button, Icon, Link, Search
- **特徴**: プロジェクト間で共通利用可能

#### Layouts（レイアウト）
- **目的**: ページ構造を定義するコンポーネント
- **例**: Header, Footer, Navigation, Sidebar
- **特徴**: サイト全体の構造に関わる

#### Projects（プロジェクト）
- **目的**: プロジェクト固有のコンポーネント
- **例**: Post, Content, Info, Summary
- **特徴**: 特定のプロジェクトでのみ使用

## TypeScriptアーキテクチャ

### モジュール構造

```
ts/
├── index.ts                    # メインエントリーポイント
├── hamburgerMenu/              # ハンバーガーメニュー
│   └── hamburgerMenu.ts
├── navigation/                 # ナビゲーション
│   ├── index.ts
│   └── resize.ts
└── preloader/                  # プリローダー
    └── preloader.ts
```

### 型定義

- **グローバル型**: `index.d.ts`で定義
- **コンポーネント型**: 各コンポーネントファイル内で定義
- **ユーティリティ型**: 共通の型定義を`types/`ディレクトリに配置

## ビルドアーキテクチャ

### Vite設定

- **エントリーポイント**: `src/ts/index.ts`
- **SCSSエントリーポイント**: `src/scss/index.scss`
- **出力**: `public/js/bundle.js`, `public/css/foundation.css`

### 開発環境

- **ホットリロード**: ViteのHMR機能
- **型チェック**: TypeScriptコンパイラ
- **リンティング**: ESLint + Prettier + Stylelint

### 本番環境

- **バンドル最適化**: コード分割、ミニファイ
- **アセット最適化**: 画像圧縮、CSS最適化
- **キャッシュ戦略**: ファイルハッシュによるキャッシュバスティング

## パフォーマンス考慮事項

### CSS最適化

- **Critical CSS**: 重要なスタイルの優先読み込み
- **CSS分割**: コンポーネント単位でのCSS分割
- **未使用CSS削除**: PurgeCSSによる未使用スタイルの削除

### JavaScript最適化

- **Tree Shaking**: 未使用コードの削除
- **Code Splitting**: 動的インポートによる分割
- **Lazy Loading**: 必要時のみの読み込み

### アセット最適化

- **画像最適化**: WebP形式、適切なサイズ
- **フォント最適化**: 必要な文字のみのサブセット
- **CDN活用**: 静的アセットの配信最適化

## 関連リソース

- [Cursor AI プロジェクト構造ルール](../.cursor/rules/project-structure.mdc) - 詳細なアーキテクチャガイドライン
