import React from 'react';
import { Text, TextInput, View } from 'react-native';
import strings from '../res/strings';

function BasicInputExample() {
  return (
    <View>
      <Text>
        {strings.textInput.label}
      </Text>
      <TextInput
        placeholder={strings.textInput.hint}
      />
    </View>
  );
}

export default BasicInputExample;
