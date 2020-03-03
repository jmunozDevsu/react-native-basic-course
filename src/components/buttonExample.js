import React from 'react';
import { Button } from 'react-native';
import strings from '../res/strings';

function ButtonExample() {
  return (
    <Button
      title={strings.button.title}
      onPress={() => alert('button pressed!')}
    />
  );
}

export default ButtonExample;
