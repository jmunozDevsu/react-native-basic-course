import React from 'react';
import { Button, Text, View } from 'react-native';
import strings from '../res/strings';
import commonStyles from '../styles/common';

function HelloFunctionComponent({ navigation: { pop } }) {
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
      <Button
        title="back"
        onPress={() => pop()}
      />
    </View>
  );
}

export default HelloFunctionComponent;
