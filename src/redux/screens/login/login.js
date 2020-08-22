import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

class Login extends Component {

  static propTypes = {
    username: PropTypes.string,
    onUsernameChanged: PropTypes.func.isRequired,
    onLoginButtonPressed: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {};
    this.onLoginButtonPressed = this.onLoginButtonPressed.bind(this);
    this.onNameChanged = this.onNameChanged.bind(this);
  }

  onNameChanged(name) {
    const { onUsernameChanged } = this.props;
    onUsernameChanged(name);
    console.log('onNameChanged');
  }

  onLoginButtonPressed() {
    const { username, onLoginButtonPressed } = this.props;

    if (username && username.trim().length > 0) {
      onLoginButtonPressed(username);
    }
  }

  render() {

    const { name } = this.state;

    return (
      <View testID="login-component">
        <Text testID="login-label">Ingresa tu nombre</Text>
        <TextInput
          testID="login-input"
          value={name}
          onChangeText={this.onNameChanged}
        />
        <Button
          testID="login-button"
          title="Login"
          onPress={this.onLoginButtonPressed}
        />
      </View>
    );
  }
}

export default Login;
