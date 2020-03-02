import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import strings from '../res/strings';

class BasicInputExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>
          {strings.textInput.label}
        </Text>
        <TextInput
          value={this.state.value}
          onChangeText={(value) => this.setState({ value })}
          placeholder={strings.textInput.hint}
        />
        <Text>
          {this.state.value}
        </Text>
      </View>
    );
  }
}

export default BasicInputExample;
