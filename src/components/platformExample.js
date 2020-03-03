import React from 'react';
import { Platform, Text } from 'react-native';

function PlatformExample() {
  let text = Platform.select({
    ios: 'ios with select',
    android: 'android with select',
  });

  return (
    <Text>
      {text}
    </Text>
  );
}

export default PlatformExample;
