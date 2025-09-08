# 開発環境セットアップ

## 必要な環境

### システム要件

- **Node.js**: 18.0.0以上
- **npm**: 8.0.0以上（またはyarn 1.22.0以上）
- **Git**: 2.0.0以上

### 推奨環境

- **OS**: macOS 12.0以上、Windows 10以上、Ubuntu 20.04以上
- **メモリ**: 8GB以上
- **ストレージ**: 2GB以上の空き容量

## インストール手順

### 1. リポジトリのクローン

```bash
git clone https://github.com/katsun0921/katsumascore_design_system.git
cd katsumascore_design_system
```

### 2. 依存関係のインストール

```bash
npm install
```

または

```bash
yarn install
```

### 3. 環境の確認

```bash
node --version
npm --version
```

## 開発サーバーの起動

### Storybookの起動

```bash
npm run storybook
```

または

```bash
yarn storybook
```

ブラウザで `http://localhost:6006` にアクセスしてStorybookを確認できます。

### 開発サーバーの起動

```bash
npm run dev
```

または

```bash
yarn dev
```

## 利用可能なスクリプト

### 開発用スクリプト

```bash
# 開発サーバーの起動
npm run dev

# Storybookの起動
npm run storybook

# ビルド
npm run build

# 本番用ビルド
npm run build:prod
```

### 品質管理スクリプト

```bash
# ESLintの実行
npm run lint

# ESLintの自動修正
npm run lint:fix

# Prettierの実行
npm run format

# Stylelintの実行
npm run stylelint

# Stylelintの自動修正
npm run stylelint:fix

# 型チェック
npm run type-check
```

### テストスクリプト

```bash
# テストの実行
npm run test

# テストの監視モード
npm run test:watch

# カバレッジレポートの生成
npm run test:coverage
```

## エディタ設定

### VS Code推奨設定

#### 拡張機能

以下の拡張機能をインストールすることを推奨します：

- **ES7+ React/Redux/React-Native snippets**
- **TypeScript Importer**
- **Prettier - Code formatter**
- **ESLint**
- **Stylelint**
- **SCSS IntelliSense**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**

#### 設定ファイル

プロジェクトルートの `.vscode/settings.json` に以下の設定を追加：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "scss.validate": true,
  "css.validate": true
}
```

### その他のエディタ

#### WebStorm/IntelliJ IDEA

1. **Prettier** プラグインをインストール
2. **ESLint** プラグインをインストール
3. **Stylelint** プラグインをインストール
4. コードスタイル設定でPrettierを有効化

#### Sublime Text

1. **Package Control** をインストール
2. 以下のパッケージをインストール：
   - **SublimeLinter**
   - **SublimeLinter-eslint**
   - **SublimeLinter-stylelint**
   - **Prettier**

## トラブルシューティング

### よくある問題と解決方法

#### 1. Node.jsのバージョンエラー

```bash
# エラー: Node.js version is not supported
```

**解決方法:**
```bash
# Node.jsのバージョンを確認
node --version

# 必要に応じてNode.jsをアップデート
# nvmを使用している場合
nvm install 18
nvm use 18
```

#### 2. 依存関係のインストールエラー

```bash
# エラー: npm ERR! peer dep missing
```

**解決方法:**
```bash
# node_modulesとpackage-lock.jsonを削除
rm -rf node_modules package-lock.json

# 依存関係を再インストール
npm install
```

#### 3. ポートが使用中

```bash
# エラー: Port 6006 is already in use
```

**解決方法:**
```bash
# 使用中のプロセスを確認
lsof -i :6006

# プロセスを終了
kill -9 <PID>

# または別のポートを使用
npm run storybook -- --port 6007
```

#### 4. メモリ不足エラー

```bash
# エラー: JavaScript heap out of memory
```

**解決方法:**
```bash
# メモリ制限を増やす
export NODE_OPTIONS="--max-old-space-size=4096"

# またはpackage.jsonのスクリプトを修正
"storybook": "NODE_OPTIONS='--max-old-space-size=4096' storybook dev -p 6006"
```

#### 5. 型エラー

```bash
# エラー: TypeScript compilation failed
```

**解決方法:**
```bash
# 型チェックを実行
npm run type-check

# 型定義を再インストール
npm install @types/react @types/react-dom
```

## 開発ワークフロー

### 1. ブランチの作成

```bash
git checkout -b feature/new-component
```

### 2. 開発

```bash
# 開発サーバーを起動
npm run dev

# 別ターミナルでStorybookを起動
npm run storybook
```

### 3. 品質チェック

```bash
# リンティング
npm run lint
npm run stylelint

# フォーマット
npm run format

# 型チェック
npm run type-check
```

### 4. コミット

```bash
git add .
git commit -m "feat: add new component"
```

### 5. プッシュ

```bash
git push origin feature/new-component
```

## 環境変数

### 開発環境

`.env.development` ファイルを作成：

```env
NODE_ENV=development
STORYBOOK_PORT=6006
DEV_SERVER_PORT=3000
```

### 本番環境

`.env.production` ファイルを作成：

```env
NODE_ENV=production
PUBLIC_URL=https://katsun0921.github.io/katsumascore_design_system
```

## パフォーマンス最適化

### 開発環境の最適化

```bash
# 依存関係の最適化
npm ci

# キャッシュのクリア
npm cache clean --force
```

### ビルド最適化

```bash
# 本番用ビルド
npm run build:prod

# バンドルサイズの分析
npm run analyze
```

## セキュリティ

### 依存関係の脆弱性チェック

```bash
# 脆弱性のチェック
npm audit

# 自動修正
npm audit fix
```

### 機密情報の管理

- `.env` ファイルは `.gitignore` に追加
- APIキーやパスワードは環境変数で管理
- コミット前に機密情報をチェック
