
React-Native GeoNear!!!

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

Clearing cache and watchman
- run 'watchman watch-del-all'
- run 'rm -rf node_modules/ && npm i'
- run 'rm -fr $TMPDIR/react-* or npm start -- -- reset-cache'