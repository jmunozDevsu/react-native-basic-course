import React from 'react';
import { Image, View } from 'react-native';

function ImageExample() {
  return (
    <View>
      <Image
        source={require('../res/images/thumbsUp.jpeg')}
      />
      <Image
        style={{width: 50, height: 50}}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
      <Image
        style={{width: 66, height: 58}}
        source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
      />
    </View>
  );
}

export default ImageExample;
