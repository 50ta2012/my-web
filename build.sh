echo "Clear all build files on ../50ta2012.github.io/"
rm -rf ../50ta2012.github.io/*

npm run build

echo "Copy all files from dist to ../50ta2012.github.io"
cp -r dist/** ../50ta2012.github.io