import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
//import io from 'react-native-socket.io-client/socket.io';﻿
import io from 'socket.io-client/dist/socket.io.js';// npm install socket.io-client// neu loi thi cai them npm audit fix

var e;
export default class App extends Component {
  constructor(props) {
    super(props);
    e = this;
    this.socket = io('http://192.168.0.104:3000', { jsonp: false });
    this.state = {
      maunen : 'green',
      text: '..'
    };
    this.socket.on('server-send-color', function(data) {
      e.setState({
        maunen: data,
        text: data,
      });
    });
  }

  clickme() {
    this.socket.emit('client-send-color', this.state.text);

  }
  render() {
    return (
          <View style={{ flex: 1, backgroundColor: this.state.maunen }}>
            <Text> Componet App </Text>
            <TextInput
              style={{ height: 40, borderColor: 'white' , padding: 5, borderWidth: 1 }}
              placeholder="nhap du lieu"
              value={this.state.text}
              onChangeText={text => this.setState({ text: text })}
            />

            <TouchableOpacity
                style={{ height: 40, borderColor: 'white', padding: 5, borderWidth: 1, marginTop: 5}}
                onPress={() => this.clickme()}
            >
              <Text>change color</Text>
            </TouchableOpacity>
          </View>
    );
  }
}
