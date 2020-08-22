import ActionTypes from '../actions/ActionTypes';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ActionTypes.DO_LOGIN:
      return { username: action.payload };
    default:
      return state;
  }
}
