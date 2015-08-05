#!/bin/sh

cd ./js

echo ""
while :
do
    echo "contatenate files..."
    browserify main.js > app.js
    echo "DONE."
    read -p "Press Any key to continue, [n] key to end" key
    case $key in
      "n" ) break ;;
       *  ) echo "" ;;
    esac
done

echo "終了します"