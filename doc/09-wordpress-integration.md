# WordPress統合ガイド

## 概要

このガイドでは、Katsumascore デザインシステムをWordPressテーマに統合する方法について説明します。ビルドされたファイルをWordPressテーマフォルダにコピーして使用します。

## ビルドとコピー

### 基本的なワークフロー

1. **デザインシステムのビルドとコピー**
   ```bash
   npm run build:copy
   ```

   このコマンドは以下を実行します：
   - `npm run build`: デザインシステムをビルド
   - `sh copy_style.sh`: ビルドファイルをWordPressテーマにコピー

### コピーされるファイル

`copy_style.sh`スクリプトは以下のファイルをコピーします：

- `dist/build.css` → `../../css/build.css`
- `dist/bundle.js` → `../../js/bundle.js`

（デザインシステムから見て2階層上のテーマディレクトリにコピー）

### ディレクトリ構造

```
katsumascore-theme/                # WordPressテーマ
├── packages/
│   └── katsumascore_design_system/ # デザインシステム
│       ├── dist/                  # ビルド出力
│       │   ├── build.css          # コンパイルされたCSS
│       │   └── bundle.js          # バンドルされたJavaScript
│       └── copy_style.sh          # コピースクリプト
├── css/
│   └── build.css                  # コピー先
└── js/
    └── bundle.js                  # コピー先
```

## 開発ワークフロー

### 1. 開発サイクル

```bash
# デザインシステムディレクトリに移動
cd packages/katsumascore_design_system

# 1. デザインシステムで開発
npm run dev

# 2. 変更をビルドしてテーマにコピー
npm run build:copy

# 3. WordPressテーマで確認
```

### 2. 自動化

#### Gitフックでの自動コピー

`package.json`の`lint-staged`設定により、コミット時に自動的にビルドとコピーが実行されます：

```json
{
  "lint-staged": {
    "src/**/*": [
      "npm run fix",
      "npm run lint",
      "npm run build:copy"
    ]
  }
}
```

#### 手動でのビルドとコピー

```bash
# デザインシステムディレクトリに移動
cd packages/katsumascore_design_system

# 開発用ビルドとコピー
npm run build:copy

# 本番用ビルド（必要に応じて）
npm run build:prod && sh copy_style.sh
```

## トラブルシューティング

### よくある問題

#### 1. ファイルがコピーされない

```bash
# デザインシステムディレクトリに移動
cd packages/katsumascore_design_system

# パスの確認
ls -la ../../css/
ls -la ../../js/

# 権限の確認
chmod +x copy_style.sh
```

#### 2. スタイルが適用されない

- CSSファイルのパスを確認
- ブラウザキャッシュをクリア
- WordPressキャッシュプラグインを無効化

#### 3. JavaScriptが動作しない

- ファイルの読み込み順序を確認
- ブラウザのコンソールでエラーをチェック
- `wp_footer()`が呼ばれているか確認

### デバッグ方法

#### 1. ファイルの存在確認

```bash
# デザインシステムディレクトリに移動
cd packages/katsumascore_design_system

# ビルドファイルの確認
ls -la dist/

# コピー先の確認
ls -la ../../css/
ls -la ../../js/
```

#### 2. ビルドログの確認

```bash
# デザインシステムディレクトリに移動
cd packages/katsumascore_design_system

# 詳細なビルドログ
npm run build:copy -- --verbose
```

## ベストプラクティス

### 1. バージョン管理

- ビルドファイルは`.gitignore`に追加
- ソースコードのみをバージョン管理
- 本番環境では必ず`npm run build:copy`を実行

### 2. パフォーマンス

- 不要なCSS/JSの削除
- 画像の最適化
- キャッシュの活用

### 3. セキュリティ

- ファイルパスの適切なエスケープ
- ユーザー入力のサニタイズ
- セキュリティヘッダーの設定

## 関連リソース

- [Cursor AI WordPress統合ルール](../.cursor/rules/wordpress-integration.mdc) - 詳細なWordPress統合ガイドライン
- [WordPress Codex](https://codex.wordpress.org/)
- [WordPress Developer Resources](https://developer.wordpress.org/)
