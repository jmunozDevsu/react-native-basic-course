import React from 'react';
import Slider from '@react-native-community/slider';

function SliderExample() {
  return (
    <Slider
      step={1}
      minimumValue={0}
      maximumValue={100}
      minimumTrackTintColor="blue"
      maximumTrackTintColor="#000000"
    />
  );
}

export default SliderExample;
