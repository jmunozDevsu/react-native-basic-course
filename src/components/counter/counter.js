import React, { Component } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';

class Counter extends Component {

  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    const text = `El valor del contador es: ${count}`;

    return (
      <SafeAreaView
        testID="counter-component"
      >
        <Text testID="counter-text">{text}</Text>
        <Button
          testID="increment-button"
          onPress={() => this.setState({ count: count + 1 })}
          title="Incrementar"
        />
      </SafeAreaView>
    );
  }
}

export default Counter;
