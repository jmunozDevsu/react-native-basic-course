import React from 'react';
import { Image } from 'react-native';

function ImageExample() {
  return (
    <Image
      source={require('../res/images/thumbsUp.jpeg')}
    />
  );
}

export default ImageExample;
