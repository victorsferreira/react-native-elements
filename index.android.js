import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import MainScene from './app/scenes/MainScene';

export default class list extends Component {
  constructor(props){
    super(props);
    this.screens = {

    };
  }

  render() {
    return (
      <Navigator
        initialRoute={ {name: 'Main'} }
        renderScene={ this._renderScene.bind(this) }
        />
    );
  }

  _renderScene(route, navigator){
    var title = this.screens[route.name];

    if(route.name == 'Main'){
      return (<MainScene navigator={navigator} {...route.props} title={title} />);
    }
  }
}

AppRegistry.registerComponent('list', () => list);
