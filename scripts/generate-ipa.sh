#!/bin/sh

npm run release-ios
rm -rf ./build/Payload
mkdir -p ./build/Payload
mv ./ios/build/Build/Products/Release-iphonesimulator/brisbane.app ./build/Payload
zip -r ./build/brisbane.ipa ./build/Payload
zip -r ./build/brisbane-appetize.zip ./build/Payload/brisbane.app
rm -rf ./build/Payload
open "https://appetize.io/manage/$APPETIZE_PRIVATE_KEY"
