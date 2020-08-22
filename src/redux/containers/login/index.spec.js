import React from 'react';
import { shallow } from 'enzyme';

import { initStore } from '../../store';
import Login from './index';
import { doLogin } from '../../actions/login';

describe('Redux integration tests', () => {
  let wrapper, store;

  beforeEach(() => {
    store = initStore({ login: {} });
    wrapper = shallow(<Login store={store}/>);
  });

  test('login saves username to state', () => {
    let expected = 'test';
    store.dispatch(doLogin(expected));
    const { login: { username } } = store.getState();

    expect(username).toBe(expected);
  });
});
