import React from 'react';
import { ScrollView, View } from 'react-native';

function ScrollViewExample() {
  return (
    <ScrollView
      style={{ flex: 1 }}
    >
      <View
        style={{
          backgroundColor: 'red',
          height: 300,
        }}
      />
      <View
        style={{
          backgroundColor: 'blue',
          height: 300,
        }}
      />
      <View
        style={{
          backgroundColor: 'green',
          height: 300,
        }}
      />
      <View
        style={{
          backgroundColor: 'black',
          height: 300,
        }}
      />
    </ScrollView>
  );
}

export default ScrollViewExample;
