import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

var Global = require('../lib/Global');

export default class SecondScene extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <View>
        <Text>
          Olá
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('SecondScene', () => SecondScene);
