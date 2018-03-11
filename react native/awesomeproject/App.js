import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { About } from './application/about';
import {Contact} from './application/form'

export default class App extends Component {
  render() {
    let img = {
      uri: "https://nativeyewear.com/public/images/np1-tmp/More_From_Native_1x.jpg"
    }
    return (
      <View style={{ flex: 1 }}>
        <Contact title="click me"/>
        {/* <Image source={{ uri: "https://nativeyewear.com/public/images/np1-tmp/More_From_Native_1x.jpg" }} style={{ width: 100, height: 100 }} />
        <Text>
          Welcome to React Native!
        </Text> */}

      </View>
    );
  }
}
