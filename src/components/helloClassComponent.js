import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import strings from '../res/strings';
import commonStyles from '../styles/common';
import { stackScreens } from '../navigation/screens';

class HelloClassComponent extends Component {
  render() {
    const { navigation: { push } } = this.props;
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
        <Button
          title="navigate"
          onPress={() => push(stackScreens.FUNCTION)}
        />
      </View>
    );
  }
}

export default HelloClassComponent;
