import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

var MainScreen = require('./components/Main');

var App = React.createClass({

  render: function() {
    return (
      <MainScreen />
    );
  }

});

AppRegistry.registerComponent('GeoNearProject', () => App);