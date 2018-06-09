import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import WithProviders from '../hocs/withProviders';
import AppBar from './AppBar';
import Main from '../routes/Main'

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppBar />
        <Route path="/main" component={Main} />
      </Fragment>
    );
  }
}

export default WithProviders(App);
