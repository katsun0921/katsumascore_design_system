#!/bin/sh

echo "ビルドしたファイルのコピーを開始"

PATH_KATSUMASCORE="/c/Users/katsu/Local Sites/katsumascore/app/public/wp-content/themes/katsumascore"

echo "all.cssとbundle.jsを削除"

rm "$PATH_KATSUMASCORE"/css/all.css
rm "$PATH_KATSUMASCORE"/js/bundle.js

echo "古いsytleファイルとビルドしたsytle.cssをマージ"

# Set the input file names and the output file name
build_style="./dist/build.css"
new_style="./dist/all.css"

# Use the cat command to merge the files and save the result to the output file
cat "$build_style"  > "$new_style"

echo "ビルドしたファイルをkatsumascore theme へコピー"
cp ./dist/all.css "$PATH_KATSUMASCORE/css"
cp ./dist/bundle.js "$PATH_KATSUMASCORE/js"
