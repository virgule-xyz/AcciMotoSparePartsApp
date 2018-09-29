#!/bin/bash

export PACKAGE_NAME=$(node -p -e "require('./package.json').name");
export VERSION_NAME=$(node -p -e "require('./package.json').version");
KEYSTORE_PASSWORD=@bee2link;

echo "** "$PACKAGE_NAME-$VERSION_NAME" **";
yarn install;
#react-native upgrade;
react-native link;

echo "** Build iOS **";
#react-native run-ios > null;
cd ios;
xcodebuild -scheme $PACKAGE_NAME archive -archivePath $PACKAGE_NAME.xcarchive -allowProvisioningUpdates;
xcodebuild -exportArchive -archivePath ./$PACKAGE_NAME.xcarchive -exportPath . -exportOptionsPlist $PACKAGE_NAME/Info.plist;
mv $PACKAGE_NAME.ipa ../$PACKAGE_NAME-$VERSION_NAME.ipa;
cd ..;

echo "** Build Android **";
#react-native run-android > null;
cd ./android;
./gradlew assembleRelease -PMYAPP_RELEASE_STORE_PASSWORD=$KEYSTORE_PASSWORD -PMYAPP_RELEASE_KEY_PASSWORD=$KEYSTORE_PASSWORD;
cd ..;
mv ./android/app/build/outputs/apk/release/app-release-unsigned.apk $PACKAGE_NAME-$VERSION_NAME-unsigned.apk;
