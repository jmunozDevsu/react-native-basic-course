import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginComponent from '../../screens/login';
import { Screens } from '../../index';

class Login extends Component {

  static propTypes = {
    onLoginButtonPressed: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.onUsernameChanged = this.onUsernameChanged.bind(this);
    this.onLoginButtonPressed = this.onLoginButtonPressed.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  onUsernameChanged(username) {
    this.setState({ username });
  }

  onLoginButtonPressed(username) {
    console.log('onLoginButtonPressed');
    const { onLoginButtonPressed } = this.props;

    onLoginButtonPressed(username);
    this.navigate();
  }

  navigate() {
    const { navigation: { push } } = this.props;
    push(Screens.Books);
  }

  render() {
    const { username } = this.state;
    return (
      <LoginComponent
        testID="login-component"
        username={username}
        onUsernameChanged={this.onUsernameChanged}
        onLoginButtonPressed={this.onLoginButtonPressed}
      />
    );
  }
}

export default Login;
