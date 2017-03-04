'use strict';
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
} from 'react-native';

import SimpleScreen from './SimpleScreen';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  viewpager: {
    flex: 1
  },
});

var MainScreen = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
       <SimpleScreen style={styles.viewpager} />
      </View>
    );
  }

});

module.exports = MainScreen;