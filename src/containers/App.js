import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../styles/common.js';
import WithProviders from '../hocs/withProviders';
import AppBar from './AppBar';
import Main from '../routes/Main'

const Content = styled.div`
  background: rgb(239, 242, 245, .5);
`;

const App = () =>
  <Fragment>
    <AppBar />
    <Content>
      <Route path="/main" component={Main} />
    </Content>
  </Fragment>

export default WithProviders(App);
