import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import Login from './login';
import { findByTestIdProp } from '../../../../testUtils';

describe('Login component tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login/>);
  });

  test('renders correctly', () => {
    const loginComponent = findByTestIdProp(wrapper, 'login-component');
    expect(loginComponent.length).toBe(1);
  });

  test('displays an input label', () => {
    const loginComponent = findByTestIdProp(wrapper, 'login-label');
    expect(loginComponent.length).toBe(1);
  });

  test('displays an input', () => {
    const loginComponent = findByTestIdProp(wrapper, 'login-input');
    expect(loginComponent.length).toBe(1);
  });

  test('displays a button', () => {
    const loginComponent = findByTestIdProp(wrapper, 'login-button');
    expect(loginComponent.length).toBe(1);
  });

  test('receives a login function (check prop types)', () => {
    const error = checkPropTypes(Login.propTypes, { onLoginButtonPressed: jest.fn(), onUsernameChanged: jest.fn() }, 'prop', Login.name);
    expect(error).toBeUndefined();
  });

  test('state variable changes when login input text changes', () => {
    const onUsernameChanged = jest.fn();

    wrapper = shallow(<Login
      onUsernameChanged={onUsernameChanged}
    />);
    const input = findByTestIdProp(wrapper, 'login-input');
    const expectedName = 'test';

    input.simulate('changeText', expectedName);

    expect(onUsernameChanged).toBeCalledTimes(1);
    expect(onUsernameChanged).toBeCalledWith(expectedName);
  });

  test('login callback called on login button pressed', () => {
    let name = 'test';
    const onLoginButtonPressed = jest.fn();

    wrapper = shallow(<Login
      username={name}
      onLoginButtonPressed={onLoginButtonPressed}
    />);

    const loginButton = findByTestIdProp(wrapper, 'login-button').first();
    loginButton.simulate('press');

    expect(onLoginButtonPressed).toBeCalledTimes(1);
    expect(onLoginButtonPressed).toHaveBeenCalledWith(name);
  });
});
