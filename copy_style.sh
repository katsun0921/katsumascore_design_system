#!/bin/sh

echo "ビルドしたsytleファイルのコピーを開始"

PATH_KATSUMASCORE="/c/Users/katsu/Local Sites/katsumascore/app/public/wp-content/themes/katsumascore"

echo "style.cssとbundle.jsを削除"

rm "$PATH_KATSUMASCORE"/style.css
rm "$PATH_KATSUMASCORE"/js/bundle.js

echo "古いsytleファイルとビルドしたsytle.cssをマージ"

# Set the input file names and the output file name
build_style="./dist/build.css"
new_style="./dist/style.css"

# Use the cat command to merge the files and save the result to the output file
cat "$build_style"  > "$new_style"

echo "ビルドしたsytle.cssをコピー"
cp ./dist/style.css "$PATH_KATSUMASCORE"
cp ./dist/bundle.js "$PATH_KATSUMASCORE/js"
