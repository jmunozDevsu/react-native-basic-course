import React, { Component } from 'react';
import { StyleSheet, StyleSheet, Text , View } from 'react-native';

class HelloClassComponent extends Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Text
          style={styles.blueText}
        >
          {'Hello '}
          <Text
            style={styles.boldText}
          >
            {'Class Component'}
          </Text>
        </Text>
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  blueText: {
    color: 'blue',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  blueText: {
    color: 'blue',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default HelloClassComponent;
