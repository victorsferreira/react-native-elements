import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

// export default class Select extends Component{
class Select extends Component{
  constructor(){
      super();
      this.options = this.props.options;
  }

  render(){
    // var options = this.props.optionsx.map(function(option){
    //   <View data-id="{option.value}"><Text>{option.label}</Text></View>
    // });
    // console.log(this.props.children[0].props.children)
    var children = this.props.children;
    var selected = null;
    // find selected option;
    children.map(function(option){
      if(!selected) selected = option;
      if(option.props.selected) selected = option;
    });

    var selected_label = selected.props.children || selected.props.label || selected.props.value;

    return (
      <View style={styles.item}>
          {this.props.children}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  item: {
    height: 120
  }
});

export class Option extends Component{
  render(){
    return (
      <View>
        <Text>
          uuu
          {this.props.children}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  item: {
    height: 120
  }
});

export default Select
export {Select}
