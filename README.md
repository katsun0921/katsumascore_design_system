# Katsumascore.blog デザインシステム

[katsumascore.blog](https://katsumascore.blog/) のデザインシステム一覧ページです。

Storybookを使用し、各コンポーネントをまとめています。

[github page](https://katsun0921.github.io/katsumascore_design_system/)

## CSS 設計

cssクラス名は[FLOCSS](https://github.com/hiloki/flocss)を採用

[[CSS設計] 私のためのFLOCSSまとめ](https://qiita.com/super-mana-chan/items/644c6827be954c8db2c0)

### クラス名

FLOCCSに準拠する

BEM記法を取るが、Modifierは使用しない。

Modifier代わりにutilityを使用する

***OK***

```sass
.block {
    //
    &__element {
    }
}
```

```html
<div class="block__element u-block"></div>
```

***NG***

```sass
.block {
    //
    &__element {
    //
      &--modifier {
        display: block;
      }
    }
}
```

```html
<div class="block__element block__element--modifier"></div>
```

### 変数名

tailwindcssの名前を参照する

https://tailwindcss.com/docs/installation

pageのclass名はp-wordpressのファイル名とする

### Background url

background-image: url()はhttps://katsumascore.blog/images/filename で指定する

## tag ルール

```bash

# template ファイルの追加と削除
v1.0.0
↓
v2.0.0

# 機能の追加と削除
v1.0.0
↓
v1.1.0

# 現在機能の修正
v1.0.0
↓
v1.0.1

```
