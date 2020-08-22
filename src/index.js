import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Component from './redux';

function App() {
  return (
    <Provider
      store={store}
    >
      <Component/>
    </Provider>
  );
}

export default App;
