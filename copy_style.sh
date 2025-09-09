#!/bin/sh

echo "ビルドしたファイルのコピーを開始"

PATH_KATSUMASCORE="../../"

echo "古いcssとjsを削除"

rm "$PATH_KATSUMASCORE"/css/build.css
rm "$PATH_KATSUMASCORE"/js/bundle.js

echo "ビルドしたファイルをkatsumascore theme へコピー"
cp ./dist/*.css "$PATH_KATSUMASCORE/css"
cp ./dist/*.js "$PATH_KATSUMASCORE/js"
