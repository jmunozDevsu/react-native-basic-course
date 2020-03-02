import React from 'react';
import { Text, View } from 'react-native';
import strings from '../res/strings';
import commonStyles from '../styles/common';

function HelloFunctionComponent() {
  return (
    <View
      style={commonStyles.container}
    >
      <Text
        style={[commonStyles.blueText, commonStyles.boldText]}
      >
        {strings.hello}
      </Text>
      <Text
        style={[commonStyles.redText, commonStyles.boldText]}
      >
        {strings.functionalComponent}
      </Text>
    </View>
  );
}

export default HelloFunctionComponent;
