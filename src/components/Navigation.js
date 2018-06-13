import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colors } from '../styles/common.js';

const Navigation = styled.div`
  margin: 0;
  height: 100%;
  display: flex;
`;

const NavigationItemLink = styled(NavLink)`
  text-transform: uppercase;
  border-left: 1px solid ${colors.lightGrey};
  padding: 0 20px;
  font-size: 14px;
  font-weight: ${({ bold }) => bold ? 600 : 300};
  letter-spacing: 0.5px;
  color: ${({ bold }) => bold ? colors.blue : colors.grey};
  display: flex;
  align-items: center;
  transition: .5s;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  };
  &:hover {
    background-color: ${({ bold }) => bold ? 'white' : colors.lightGrey};
    color: ${({ bold }) => bold ? colors.darkBlue : colors.grey};
    cursor: pointer;
  };
`;

export default () => (
  <Navigation>
    <NavigationItemLink to='/browse-events'>Browse Event</NavigationItemLink>
    <NavigationItemLink to='/about'>About</NavigationItemLink>
    <NavigationItemLink to='/sing-in'>Sing in</NavigationItemLink>
    <NavigationItemLink bold to='/create-event'>Create Event</NavigationItemLink>
  </Navigation>
);

