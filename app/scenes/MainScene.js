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

import ListItem from '../components/ListItem';
import { Select, Option} from '../components/Select';
// var ListItem = require('../components/ListItem').default

var Global = require('../lib/Global');

export default class MainScene extends Component {
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.picker = null;
    this.state = {
      dataSource: ds.cloneWithRows([
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9'
      ])
    };
  }

  componentDidMount(){
    console.log(this.textInput)
    // this.textInput.click();
  }

  _onScroll(e){
    var windowHeight = Dimensions.get('window').height,
    height = e.nativeEvent.contentSize.height,
    offset = e.nativeEvent.contentOffset.y;

    console.log(e.nativeEvent)
    // alert(e.measure)

    if( windowHeight + offset >= height ){
      // console.log('End Scroll')
      // alert('oi')
    }

    console.log('windowHeight',windowHeight,'height',height,'offset',offset)
  }

  render() {
    // On Scroll
    return (
      <View style={styles.list}>

        <Select>
          <Option value="1">
            Victor
          </Option>
          <Option value="1">
            Victor
          </Option>
        </Select>

        <Picker
          ref={(input) => { this.textInput = input; }}
          style={styles.picker}
          selectedValue={'Java'}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java"
            style={styles.pickerItem} />
          <Picker.Item label="JavaScript" value="js"
            style={styles.pickerItem} />
        </Picker>

        <ListView
          onScroll={this._onScroll}
          dataSource={this.state.dataSource}
          renderRow={
            (text) => (
              <ListItem text={text} />
            )
          }
          style={styles.list}
          />
      </View>
    );
  }
}

var styles = StyleSheet.create({
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
