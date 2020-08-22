import { doLogin } from './login';
import ActionTypes from './ActionTypes';

describe('Login action creator tests', () => {
  test('returns login action when called', () => {
    const name = 'test';
    expect(doLogin(name)).toEqual({ type: ActionTypes.DO_LOGIN, payload: name });
  });
});
