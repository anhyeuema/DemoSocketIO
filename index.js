
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => DemoSocketIO);

import React, {Component} from 'react';
import App from './Components/App';

export default class DemoSocketIO extends Component {
  render() {
    return (
      <App />
    );
  }
}
