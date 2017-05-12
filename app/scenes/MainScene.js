import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Picker,
  ScrollView,
  Dimensions,
  Animated,
  Image,
  TouchableHighlight,
  Easing
} from 'react-native';
//
// import MultiSlider from 'react-native-multi-slider';
//
// var Global = require('../lib/Global');

var Contacts = require('react-native-contacts')

export default class MainScene extends Component {
  constructor(){
    super();
    this.spinValue = new Animated.Value(0)
  }

  color(){
    return Animated.timing(
      'red',
      {
        toValue: 'blue',
        duration: 2000,
        easing: Easing.linear
      }
    )
  }

  size(){
    return Animated.timing(
      16,
      {
        toValue: 12,
        duration: 1000,
        easing: Easing.linear
      }
    ).start();
  }

    top(){
      return Animated.timing(
        30,
        {
          toValue: 10,
          duration: 1000,
          easing: Easing.linear
        }
      ).start();
    }

  // <Animated.Image
  //   style={{
  //     width: 227,
  //     height: 200,
  //     transform: [{rotate: spin}] }}
  //     source={{uri: 'http://lorempixel.com/400/200/'}}
  //     />


  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    const color = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['red', 'blue']
    })

    const size = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12]
    })

    const top = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 0]
    })

    return (
      <View style={ {flex: 1, backgroundColor: 'green'} }>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{rotate: spin}] }}
            source={{uri: 'http://lorempixel.com/400/200/'}}
            />

          <Animated.Text
            style={{
              position: 'absolute',
              top: top,
              fontSize: size,
              color: 'white'}}
              >
              Meu label
            </Animated.Text>

            <TouchableHighlight onPress={ () => {
                // alert('oi')
                // this.color()
                // this.spin()
                this.top()
                this.size()
              } }><Text>xxx</Text></TouchableHighlight>
            </View>
          );
        }

        componentDidMount () {
          // this.spin();
        }

        spin () {
          this.spinValue.setValue(0)
          Animated.timing(
            this.spinValue,
            {
              toValue: 1,
              duration: 4000,
              easing: Easing.linear
            }
            // ).start(() => this.spin());
          ).start();
        }


      }

      var styles = StyleSheet.create({

      });

      AppRegistry.registerComponent('MainScene', () => MainScene);
