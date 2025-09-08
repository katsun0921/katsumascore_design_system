# ビルドとデプロイ

## 概要

このガイドでは、Katsumascore デザインシステムのビルドプロセスとデプロイメント手順について説明します。

## ビルドプロセス

### 開発用ビルド

```bash
npm run build
```

開発用ビルドでは以下の処理が実行されます：

- TypeScriptのコンパイル
- SCSSのコンパイル
- アセットのコピー
- ソースマップの生成

### 本番用ビルド

```bash
npm run build:prod
```

本番用ビルドでは以下の処理が実行されます：

- コードの最適化とミニファイ
- 未使用コードの削除（Tree Shaking）
- ファイル名にハッシュを付与
- ソースマップの生成（オプション）

## ビルド出力

### ファイル構造

```
dist/
├── js/
│   ├── bundle.js              # 開発用
│   └── bundle.[hash].js       # 本番用
├── css/
│   ├── foundation.css         # 開発用
│   └── foundation.[hash].css  # 本番用
└── img/
    └── [画像ファイル]
```

### アセットの最適化

- **画像**: WebP形式への変換、適切なサイズへのリサイズ
- **フォント**: 必要な文字のみのサブセット
- **CSS**: 未使用スタイルの削除
- **JavaScript**: コード分割、ミニファイ

## デプロイメント

### GitHub Pages

#### 1. リポジトリの設定

GitHubリポジトリの設定でPagesを有効化：

1. リポジトリの **Settings** タブを開く
2. **Pages** セクションに移動
3. **Source** を **GitHub Actions** に設定

#### 2. GitHub Actionsワークフロー

`.github/workflows/deploy.yml` ファイルを作成：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build:prod
      
    - name: Build Storybook
      run: npm run build-storybook
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./storybook-static
```

#### 3. デプロイの実行

```bash
# メインブランチにプッシュ
git push origin main
```

### Netlify

#### 1. ビルド設定

`netlify.toml` ファイルを作成：

```toml
[build]
  publish = "storybook-static"
  command = "npm run build-storybook"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 2. デプロイの実行

```bash
# Netlify CLIを使用
npm install -g netlify-cli
netlify deploy --prod --dir=storybook-static
```

### Vercel

#### 1. 設定ファイル

`vercel.json` ファイルを作成：

```json
{
  "buildCommand": "npm run build-storybook",
  "outputDirectory": "storybook-static",
  "framework": null,
  "installCommand": "npm ci"
}
```

#### 2. デプロイの実行

```bash
# Vercel CLIを使用
npm install -g vercel
vercel --prod
```

## 環境別設定

### 開発環境

```bash
# 環境変数
NODE_ENV=development
PUBLIC_URL=http://localhost:3000
```

### ステージング環境

```bash
# 環境変数
NODE_ENV=staging
PUBLIC_URL=https://staging.katsumascore-design-system.com
```

### 本番環境

```bash
# 環境変数
NODE_ENV=production
PUBLIC_URL=https://katsun0921.github.io/katsumascore_design_system
```

## パフォーマンス最適化

### バンドルサイズの最適化

```bash
# バンドルサイズの分析
npm run analyze
```

### 画像最適化

```bash
# 画像の最適化
npm run optimize-images
```

### キャッシュ戦略

```bash
# キャッシュバスティング
npm run build:prod
```

## 監視とログ

### パフォーマンス監視

```bash
# Lighthouse CIの実行
npm run lighthouse
```

### エラー監視

```bash
# エラーログの確認
npm run logs
```

## セキュリティ

### セキュリティヘッダー

```bash
# セキュリティヘッダーの設定
npm run security-headers
```

### 脆弱性スキャン

```bash
# 依存関係の脆弱性チェック
npm audit
```

## トラブルシューティング

### よくある問題

#### 1. ビルドエラー

```bash
# エラー: Build failed
```

**解決方法:**
```bash
# 依存関係を再インストール
rm -rf node_modules package-lock.json
npm install

# キャッシュをクリア
npm cache clean --force
```

#### 2. デプロイエラー

```bash
# エラー: Deployment failed
```

**解決方法:**
```bash
# ビルドログを確認
npm run build:prod

# 環境変数を確認
echo $NODE_ENV
```

#### 3. パフォーマンス問題

```bash
# エラー: Bundle size too large
```

**解決方法:**
```bash
# バンドルサイズを分析
npm run analyze

# 未使用の依存関係を削除
npm run remove-unused-deps
```

## ベストプラクティス

### 1. 継続的インテグレーション

- 自動テストの実行
- コード品質のチェック
- セキュリティスキャン

### 2. 継続的デプロイメント

- 自動デプロイの設定
- ロールバック戦略の準備
- 監視とアラートの設定

### 3. パフォーマンス

- バンドルサイズの監視
- 画像最適化の実施
- キャッシュ戦略の実装

### 4. セキュリティ

- 依存関係の脆弱性チェック
- セキュリティヘッダーの設定
- 機密情報の管理

## メンテナンス

### 定期的な更新

```bash
# 依存関係の更新
npm update

# セキュリティパッチの適用
npm audit fix
```

### バックアップ

```bash
# 設定ファイルのバックアップ
cp package.json package.json.backup
cp tsconfig.json tsconfig.json.backup
```

### ドキュメントの更新

```bash
# ドキュメントの更新
npm run docs:update
```
