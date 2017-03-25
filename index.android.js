import React from 'react';
import {
  AppRegistry
} from 'react-native';

//var MainScreen = require('./components/Main');
import Home from './components/Home';


var App = React.createClass({

  render: function() {
    return (
      <Home />
    );
  }

});

AppRegistry.registerComponent('GeoNearProject', () => App);