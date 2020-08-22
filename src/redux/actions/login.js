import ActionTypes from './ActionTypes';

const doLogin = (name) => ({
  type: ActionTypes.DO_LOGIN,
  payload: name,
});

export {
  doLogin,
};
