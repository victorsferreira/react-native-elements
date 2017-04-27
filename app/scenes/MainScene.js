import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Picker,
  Dimensions
} from 'react-native';
//
import MultiSlider from 'react-native-multi-slider';

var Global = require('../lib/Global');

export default class MainScene extends Component {
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.picker = null;
    this.state = {
      value_a: 750,
      value_b: 150,
      proportion_a: 50,
      proportion_b: 50,
      handler_position: 50,
      result: {
        a:0,
        b:0
      },
    };
  }

  componentDidMount(){
    var normalized_value_a = this.state.value_a / 10;
    var normalized_value_b = this.state.value_b;
    var normalized_total = normalized_value_a + normalized_value_b;
    var proportion_a = Math.round((normalized_value_a / normalized_total) * 100) ;
    var proportion_b = 100 - proportion_a;

    this._setState({
      proportion_a: proportion_a,
      proportion_b: proportion_b,
      handler_position: proportion_a
    });
  }

  // componentDidMount(){
  //   var steps = [];
  //   for(i=0;i<=10;i++){
  //
  //   }
  // }

  _setState(obj){
    this.setState(Object.assign(this.state,obj));
  }

  displayA(proportion){
    // return 1;
    // console.log(this.state.result.a, this.state.value_a, this.state.proportion_a);
    return (this.state.result.a * this.state.value_a) / this.state.proportion_a;
  }

  displayB(proportion){
    // return 1;
    // console.log(this.state.result.b, this.state.value_b, this.state.proportion_b);
    return (this.state.result.b * this.state.value_b) / this.state.proportion_b;
  }

  display(){
    // var value_a = (this.state.result.a * this.state.value_a) / this.state.proportion_a;
    var normalized_value_a = this.state.value_a / 10;
    var normalized_value_b = this.state.value_b;
    var normalized_total = normalized_value_a + normalized_value_b;

    return this.state.result.a;
  }

  render() {
    // On Scroll
    return (
      <View style={styles.list}>

        <Text>a: {this.displayA()}</Text>
        <Text>b: {this.displayB()}</Text>

          <MultiSlider
            values={ [1] }
            sliderLength={280}
            min={0}
            max={1000}
            step={10}
            onValuesChange={ (value) => {
              var b = 100;
              console.log('calculated a: ', value[0]);
              console.log('calculated b: ', (2250-value)/10);
            } }
            />

        <MultiSlider
          values={ [1] }
          sliderLength={280}
          min={0}
          max={100}
          step={1}
          onValuesChange={ (value) => {
            this._setState({
              result: {
                a: value[0],
                b: 100-value[0]
              }
            });
          } }
          />

      </View>
    );
  }
}

var styles = StyleSheet.create({
  bar: {
    flex: .8,
    backgroundColor: 'black',
    height: 5
  },
  pickerItem: {
    color: 'white'
  },
  container: {
    flex: 1
  },
  picker: {
    backgroundColor: 'blue',
    color: 'white'
  },
  list: {
    flex: 1
  }
});

AppRegistry.registerComponent('MainScene', () => MainScene);
