
React-Native AWESOME!!!

Follow react native get started:
https://facebook.github.io/react-native/docs/getting-started.html#content

To run on ios emulator:
- run 'react-native run-ios'

To run on android emulator:
- make sure you have android sdk and android emulator installed
- make sure you also have Intel HAXM installed
- open another console
- run 'android avd'
- start the emulator
- run 'react-native run-android'

To stop or start Intel HAXM, use the following commands:
Stop:
sudo kextunload –b com.intel.kext.intelhaxm
Start:
sudo kextload –b com.intel.kext.intelhaxm

clearing cache and watchman
watchman watch-del-all
rm -rf node_modules/ && npm i
rm -fr $TMPDIR/react-* or npm start -- -- reset-cache