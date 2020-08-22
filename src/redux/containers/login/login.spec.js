import React from 'react';
import { shallow } from 'enzyme';

import { findByTestIdProp } from '../../../../testUtils';
import Login from './login';

describe('connected component tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login/>);
  });

  test('renders correctly', () => {
    const loginComponent = findByTestIdProp(wrapper, 'login-component').first();
    expect(loginComponent.length).toBe(1);
  });

  test('callback called when login button pressed', () => {
    const onLoginButtonPressed = jest.fn();

    wrapper = shallow(<Login
      onLoginButtonPressed={onLoginButtonPressed}
    />);

    const expected = 'test';
    wrapper.simulate('loginButtonPressed', expected);

    expect(onLoginButtonPressed).toBeCalledTimes(1);
    expect(onLoginButtonPressed).toBeCalledWith(expected);

  });
});
