import React, { Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { compose } from 'redux';

import withProviders from '../hocs/withProviders';
import WithAppData from '../hocs/WithAppData';
import AppBar from './AppBar';
import Main from '../routes/Main';
import BrowseEvent from '../routes/BrowseEvent';
import SingIn from '../routes/SingIn';

const Content = styled.div`
  background: rgb(239, 242, 245, .5);
  min-height: calc(100vh - 64px);
`;

const App = () =>
  <Fragment>
    <AppBar />
    <Content>
      <Route path="/main" component={Main} />
      <Route path="/browse-events" component={BrowseEvent} />
      <Route path="/sing-in" component={SingIn} />
    </Content>
  </Fragment>

const enhances = compose(
  withProviders,
  withRouter,
  WithAppData,
)

export default enhances(App);
