import React, { Fragment } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colors } from '../styles/common.js';
import Navigation from '../components/Navigation';

const AppBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  box-shadow: 0px 2px 4px -1px grey;
  height: 64px;
`;

const StyledLogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 25px;
  font-weight: 700;
  color: ${colors.red};
  border-right: 1px solid ${colors.lightGrey};
  padding-right: 20px;
  text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default () => (
  <AppBar>
    <StyledLogoLink to="/main">
      Eventapp
    </StyledLogoLink>
    <Navigation />
  </AppBar>
);

