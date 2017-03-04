react-native run-ios

To stop or start Intel HAXM, use the following commands:

Stop:

sudo kextunload –b com.intel.kext.intelhaxm
Start:

sudo kextload –b com.intel.kext.intelhaxm

https://github.com/shyjal/reactnative-android-production/blob/master/README.md

watchman watch-del-all

rm -rf node_modules/ && npm i

rm -fr $TMPDIR/react-* or npm start -- -- reset-cache