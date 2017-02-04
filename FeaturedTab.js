import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


/*
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;
*/

export default class FeaturedTab extends Component {

// var FeaturedTab = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>This is Featured Tab !!</Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 15,
    backgroundColor: '#FFFFFF'
  }
});

module.exports = FeaturedTab;

