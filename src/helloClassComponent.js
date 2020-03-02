import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

class HelloClassComponent extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text>{'Hello Class Component'}</Text>
      </SafeAreaView>
    );
  }
}

export default HelloClassComponent;
