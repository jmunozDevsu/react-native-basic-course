import React, { Component } from 'react';
import { Button, ScrollView, Text } from 'react-native';
import styles from './result.styles';
import strings from '../../../res/strings';

class Result extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    const { navigation: { pop } } = this.props;
    pop();
  }

  render() {
    const {
      route: {
        params: {
          names, lastNames, email, phone, gender, age, notifications,
        },
      },
    } = this.props;
    return (
      <ScrollView
        styles={styles.container}
        contentContainerStyle={styles.content}
      >
        <Text>{names}</Text>
        <Text>{lastNames}</Text>
        <Text>{email}</Text>
        <Text>{phone}</Text>
        <Text>{gender}</Text>
        <Text>{age}</Text>
        <Text>{notifications}</Text>
        <Button
          title={strings.goBack}
          onPress={this.goBack}
        />
      </ScrollView>
    );
  }
}

export default Result;
