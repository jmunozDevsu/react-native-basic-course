import React from 'react';
import { Picker } from 'react-native';
import strings from '../res/strings';

function PickerExample() {
  const [value, setValue] = React.useState(undefined);
  return (
    <Picker
      selectedValue={value}
      onValueChange={setValue}
    >
      <Picker.Item
        label={strings.picker.option1}
        value={1}
      />
      <Picker.Item
        label={strings.picker.option2}
        value={2}
      />
      <Picker.Item
        label={strings.picker.option3}
        value={3}
      />
    </Picker>
  );
}

export default PickerExample;
