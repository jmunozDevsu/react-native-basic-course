import React, { Fragment } from 'react';
import HelloFunctionComponent from './helloFunctionComponent';
import HelloClassComponent from './helloClassComponent';

function App() {
  return (
    <Fragment>
      <HelloClassComponent/>
      <HelloFunctionComponent/>
    </Fragment>
  );
}

export default App;
