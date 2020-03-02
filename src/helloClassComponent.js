import React, { Component } from 'react';
import { Text, View } from 'react-native';
import strings from './res/strings';
import commonStyles from './styles/common';

class HelloClassComponent extends Component {
  render() {
    return (
      <View
        style={commonStyles.container}
      >
        <Text
          style={commonStyles.blueText}
        >
          {strings.hello}
          <Text
            style={commonStyles.boldText}
          >
            {strings.classComponent}
          </Text>
        </Text>
      </View>
    );
  }
}

export default HelloClassComponent;
