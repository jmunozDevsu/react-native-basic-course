import React from 'react';
import { Image } from 'react-native';

function ImageExample() {
  return (
    <Image
      source={require('../res/images/os.jpeg')}
    />
  );
}

export default ImageExample;
