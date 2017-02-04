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

export default class SearchTab extends Component {

// var SearchTab = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>This is SearchTab !!</Text>
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

module.exports = SearchTab;

