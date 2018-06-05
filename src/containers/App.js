import React, { Component, Fragment } from 'react';

import AppBar from './AppBar';
import Main from '../routes/Main'

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppBar />
        <Main />
      </Fragment>
    );
  }
}

export default App;
