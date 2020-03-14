import React, { Component } from 'react';
import { Button, Image, Picker, ScrollView, Switch, Text, TextInput, View } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './form.styles';
import strings from '../../../res/strings';
import { formScreens } from '../../../navigation/screens';

const INITIAL_STATE = {
  gender: 'M',
  notification: false,
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.onValueChanged = this.onValueChanged.bind(this);
    this.onContinuePress = this.onContinuePress.bind(this);

    this.state = INITIAL_STATE;
  }

  onContinuePress() {
    const { navigation: { push } } = this.props;
    push(formScreens.RESULT, { ...this.state });
    const newState = Object.keys(this.state).reduce((result, key) => {
      return {
        ...result,
        [key]: undefined,
      };
    }, {});
    this.setState({
      ...newState,
      ...INITIAL_STATE,
    });
  }

  onValueChanged(key) {
    return (value) => this.setState({ [key]: value });
  }

  render() {
    const {
      names,
      lastNames,
      email,
      phone,
      gender,
      age,
      notification,
    } = this.state;

    return (
      <ScrollView
        styles={styles.container}
        contentContainerStyle={styles.content}
      >
        <Image
          style={styles.banner}
          source={require('../../../res/images/header.png')}
        />
        <Text>{strings.form.names}</Text>
        <TextInput
          value={names}
          style={[styles.input, styles.item]}
          onChangeText={this.onValueChanged('names')}
        />
        <Text>{strings.form.lastNames}</Text>
        <TextInput
          value={lastNames}
          style={[styles.input, styles.item]}
          onChangeText={this.onValueChanged('lastNames')}
        />
        <Text>{strings.form.email}</Text>
        <TextInput
          value={email}
          style={[styles.input, styles.item]}
          onChangeText={this.onValueChanged('email')}
        />
        <Text>{strings.form.phone}</Text>
        <TextInput
          value={phone}
          style={[styles.input, styles.item]}
          onChangeText={this.onValueChanged('phone')}
        />
        <Text>{strings.form.gender}</Text>
        <Picker
          selectedValue={gender}
          onValueChange={this.onValueChanged('gender')}
          style={styles.item}
        >
          {strings.form.genderOptions.map(({ value, label }, index) => (
            <Picker.Item
              key={index}
              label={label}
              value={value}
            />
          ))}
        </Picker>
        <Text>{strings.form.age}</Text>
        <Text style={[styles.age, styles.item]}>{age}</Text>
        <Slider
          value={age}
          step={1}
          onValueChange={this.onValueChanged('age')}
          minimumValue={1}
          style={styles.item}
          maximumValue={100}
        />
        <View style={[styles.notification, styles.item]}>
          <Text>{strings.form.notification}</Text>
          <Switch
            value={notification}
            onValueChange={this.onValueChanged('notification')}
          />
        </View>
        <Button
          title={strings.continue}
          onPress={this.onContinuePress}
        />
      </ScrollView>
    );
  }
}

export default Form;
