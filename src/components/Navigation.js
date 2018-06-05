import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/common.js';

const Navigation = styled.nav`
  height: 100%
`

const List = styled.ul`
  margin: 0
  height: 100%
  list-style-type: none
  display: flex
`

const ListItem = styled.li`
  text-transform: uppercase
  border-left: 1px solid ${colors.lightGrey}
  padding: 0 20px
  font-size: 12px
  letter-spacing: 0.5px
  color: ${colors.grey}
  display: flex
  align-items: center
  transition: .5s
  &:hover {
    background-color: ${colors.lightGrey}
    cursor: pointer
  }
`

const ListItemBold = styled.li`
  text-transform: uppercase
  border-left: 1px solid ${colors.lightGrey}
  padding: 0 20px
  font-size: 12px
  font-weight: 600
  letter-spacing: 0.5px
  color: ${colors.blue}
  display: flex
  align-items: center
  transition: .5s
  &:hover {
    color: ${colors.darkBlue}
    cursor: pointer
  }
  `

export default () => (
  <Navigation>
    <List>
      <ListItem>About</ListItem>
      <ListItem>Sing in</ListItem>
      <ListItemBold>Create Event</ListItemBold>
    </List>
  </Navigation>
);

