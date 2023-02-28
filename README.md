# Katsumascore.blog デザインシステム

[katsumascore.blog](https://katsumascore.blog/) のデザインシステム一覧ページです。

Storybookを使用し、各コンポーネントをまとめています。

## css

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
