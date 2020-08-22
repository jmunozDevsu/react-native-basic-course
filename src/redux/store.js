import { createStore } from 'redux';
import reducers from './reducers';

function initStore(initialState) {
  return createStore(reducers, initialState);
}

const store = createStore(reducers);

export default store;

export {
  initStore,
};
