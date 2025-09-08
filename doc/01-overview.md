# プロジェクト概要

## プロジェクトの目的

Katsumascore デザインシステムは、[katsumascore.blog](https://katsumascore.blog/) のための再利用可能なUIコンポーネントとスタイルシステムです。

## 主な特徴

- **コンポーネント駆動開発**: React + TypeScript による再利用可能なUIコンポーネント
- **Storybook統合**: コンポーネントの開発・テスト・ドキュメント化
- **ITCSSアーキテクチャ**: スケーラブルなCSS設計手法
- **WordPress統合**: WordPressテーマとの連携
- **モダンな開発環境**: Vite、ESLint、Prettier、Stylelint

## 技術スタック

### フロントエンド
- **React 18+**: UIコンポーネントライブラリ
- **TypeScript**: 型安全なJavaScript
- **SCSS**: CSSプリプロセッサ
- **Vite**: 高速なビルドツール

### 開発ツール
- **Storybook**: コンポーネント開発環境
- **ESLint**: JavaScript/TypeScriptの静的解析
- **Prettier**: コードフォーマッター
- **Stylelint**: CSS/SCSSの静的解析

### スタイリング
- **ITCSS**: CSS設計手法
- **FLOCSS**: CSSクラス命名規則
- **BEM記法**: コンポーネント命名

## プロジェクト構造

```
src/
├── stories/           # Storybookストーリーとコンポーネント
│   ├── components/    # 再利用可能なUIコンポーネント
│   ├── layouts/       # レイアウトコンポーネント
│   ├── projects/      # プロジェクト固有のコンポーネント
│   └── styles/        # スタイルドキュメント
├── scss/              # SCSSスタイルシート（ITCSS）
│   ├── foundation/    # リセット、ベーススタイル
│   ├── global/        # 変数、ミックスイン
│   ├── layout/        # レイアウトコンポーネント
│   ├── object/        # UIコンポーネント、ユーティリティ
│   ├── inc/           # サードパーティスタイル
│   └── plugins/       # プラグイン固有のスタイル
├── ts/                # TypeScriptモジュール
├── assets/            # 静的アセット（画像、アイコン）
└── admin/             # WordPress管理画面スタイル
```

## 主要な機能

### コンポーネントライブラリ
- ボタン、リンク、アイコンなどの基本UIコンポーネント
- ヘッダー、フッター、ナビゲーションなどのレイアウトコンポーネント
- 投稿、検索、ウィジェットなどのプロジェクト固有コンポーネント

### スタイルシステム
- 一貫したデザイントークン（色、フォント、スペーシング）
- レスポンシブデザイン対応
- ユーティリティクラスによる柔軟なスタイリング

### 開発体験
- ホットリロード対応の開発サーバー
- 自動的な型チェックとリンティング
- コンポーネントの視覚的テスト環境

## 対象ユーザー

- **フロントエンド開発者**: React/TypeScriptでのコンポーネント開発
- **デザイナー**: Storybookでのデザインシステム確認
- **WordPress開発者**: テーマ開発でのスタイル活用

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](../LICENSE)ファイルを参照してください。

## 関連リンク

- [GitHub Pages](https://katsun0921.github.io/katsumascore_design_system/)
- [katsumascore.blog](https://katsumascore.blog/)
- [Storybook](https://storybook.js.org/)
- [ITCSS](https://itcss.io/)
- [FLOCSS](https://github.com/hiloki/flocss)
