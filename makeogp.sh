#!/bin/bash
cd `dirname $0`

echo "select image path and bg color"
read path bgcolor

echo $path
echo $bgcolor

NEWFILE=${path%.*}_ogp.${path##*.}

convert $path -resize 1200x630 $NEWFILE
convert $NEWFILE -background $bgcolor -gravity center -extent 1200x630 $NEWFILE
