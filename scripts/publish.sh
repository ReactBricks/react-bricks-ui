#!/bin/bash
yarn build

cp scripts/publish/*.json dist/
cp scripts/publish/blog/*.json dist/blog/
cp scripts/publish/website/*.json dist/website/
cp LICENSE dist/
cp README.md dist/

rm dist/*.map
rm dist/**/*.map

echo 'LIBRARY GENERATED'
echo 'PLEASE UPDATE VERSION IN dist/package.json'
echo 'GO TO ./dist'
echo 'RUN "npm publish" or "npm publish --tag beta"'
