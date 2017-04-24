import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

export default class ListItem extends Component{
  render(){
    return (
      <Text style={styles.item}>
      {this.props.text}
      </Text>
    );
  }
}

var styles = StyleSheet.create({
  item: {
    height: 120
  }
});
