import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function HelloFunctionComponent() {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={[styles.blueText, styles.boldText]}
      >
        {'Hello '}
      </Text>
      <Text
        style={[styles.redText, styles.boldText]}
      >
        {'Functional Component'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  redText: {
    color: 'red',
  },
  blueText: {
    color: 'blue',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default HelloFunctionComponent;
