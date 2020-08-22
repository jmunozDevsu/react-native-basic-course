import login from './login';
import ActionTypes from '../actions/ActionTypes';

describe('Login reducer tests', () => {

  test('returns login state with name', () => {
    const name = 'test';
    expect(login(undefined, { type: ActionTypes.DO_LOGIN, payload: name })).toEqual({ username: name });
  });
});
