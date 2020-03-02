import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import strings from '../res/strings';

class BasicInputExample extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);

    this.state = {};
  }

  render() {
    const { value } = this.state;
    return (
      <View>
        <Text>
          {strings.textInput.label}
        </Text>
        <TextInput
          value={value}
          onChangeText={this.handleTextChange}
          placeholder={strings.textInput.hint}
        />
        <Text>
          {value}
        </Text>
      </View>
    );
  }

  handleTextChange(value) {
    this.setState({ value });
  }
}

export default BasicInputExample;
