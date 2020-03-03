import React from 'react';
import { Platform, Text } from 'react-native';

function PlatformExample() {
  let text = 'android';

  if (Platform.OS === 'ios') {
    text = 'ios';
  }

  return (
    <Text>
      {text}
    </Text>
  );
}

export default PlatformExample;
