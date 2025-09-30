# ユーティリティ ストーリー

このディレクトリには、デザインシステムのユーティリティクラスを表示するためのStorybookストーリーが含まれています。ユーティリティはTailwindCSSドキュメントと同様に整理されており、利用可能なすべてのユーティリティクラスの包括的なビューを提供します。

## 構造

- `UtilityComponent.tsx` - ユーティリティクラスを表示するためのベースコンポーネント
- `UtilityIndex.stories.tsx` - すべてのユーティリティを表示するメインインデックスストーリー
- 個別のユーティリティファイル:
  - `MarginUtilities.tsx` & `Margin.stories.tsx` - マージンユーティリティ
  - `PaddingUtilities.tsx` & `Padding.stories.tsx` - パディングユーティリティ
  - `DisplayUtilities.tsx` & `Display.stories.tsx` - ディスプレイユーティリティ
  - `TextAlignUtilities.tsx` & `TextAlign.stories.tsx` - テキスト配置ユーティリティ
  - `FontSizeUtilities.tsx` & `FontSize.stories.tsx` - フォントサイズユーティリティ
  - `WidthUtilities.tsx` & `Width.stories.tsx` - 幅ユーティリティ

## 機能

各ユーティリティストーリーは以下を提供します：

1. **ビジュアルプレビュー** - ユーティリティクラスが要素にどのような影響を与えるかを表示
2. **クラス名** - 使用する実際のCSSクラス名
3. **CSSプロパティ** - 変更されるCSSプロパティ
4. **CSS値** - 適用される実際のCSS値
5. **説明** - ユーティリティの機能についての簡潔な説明

## 使用方法

### すべてのユーティリティを表示
Storybookで `Utilities/Index` に移動して、すべての利用可能なユーティリティを一箇所で確認できます。

### 特定のユーティリティカテゴリを表示
以下のような個別のユーティリティストーリーに移動：
- `Utilities/Margin` - すべてのマージンユーティリティ
- `Utilities/Padding` - すべてのパディングユーティリティ
- `Utilities/Display` - すべてのディスプレイユーティリティ
- `Utilities/Text Align` - すべてのテキスト配置ユーティリティ
- `Utilities/Font Size` - すべてのフォントサイズユーティリティ
- `Utilities/Width` - すべての幅ユーティリティ

### コードでユーティリティを使用
ストーリーからクラス名をコピーして、HTML要素に適用します：

```html
<div class="u-m-4 u-p-2 u-text-center">
  マージン、パディング、中央配置を適用したコンテンツ
</div>
```

## 新しいユーティリティの追加

新しいユーティリティカテゴリを追加するには：

1. 新しいユーティリティコンポーネントファイルを作成（例：`NewUtilityUtilities.tsx`）
2. クラス名とCSSプロパティでユーティリティグループを定義
3. ビジュアル表示用のプレビューコンポーネントを作成
4. 対応するストーリーファイルを作成（例：`NewUtility.stories.tsx`）
5. `UtilityIndex.stories.tsx` を更新して新しいユーティリティを含める

## Tailwind CSS に基づく

これらのユーティリティは[TailwindCSSユーティリティ](https://tailwindcss.com/docs/margin)からインスピレーションを受け、同様のパターンにしたがっており、Tailwindのユーティリティファースト方式に慣れた開発者にとって馴染みやすいAPIを提供します。
