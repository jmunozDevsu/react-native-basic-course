import React from 'react';
import { Switch } from 'react-native';

function SwitchExample() {
  const [value, setValue] = React.useState(false);
  return (
    <Switch
      value={value}
      onValueChange={setValue}
    />
  );
}

export default SwitchExample;
