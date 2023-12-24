#!/bin/sh

echo "ビルドしたファイルのコピーを開始"

PATH_KATSUMASCORE="/c/Users/katsu/Local Sites/katsumascore/app/public/wp-content/themes/katsumascore"

echo "古いbuild.cssとbundle.jsを削除"

rm "$PATH_KATSUMASCORE"/css/build.css
rm "$PATH_KATSUMASCORE"/js/bundle.js

echo "ビルドしたファイルをkatsumascore theme へコピー"
cp ./dist/build.css "$PATH_KATSUMASCORE/css"
cp ./dist/bundle.js "$PATH_KATSUMASCORE/js"
