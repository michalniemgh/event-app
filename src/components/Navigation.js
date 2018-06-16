import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import CurrentUser from '../components/CurrentUser';
import { selectCurrentUser } from '../store/firebase/selectors';
import { auth } from '../shared/firebase';

const NavigationContainer = styled.div`
  margin: 0;
  height: 100%;
  display: flex;
`;

const NavigationItemLink = styled(NavLink)`
  text-transform: uppercase;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 0 20px;
  font-size: 14px;
  font-weight: ${({ bold }) => bold ? 600 : 300};
  letter-spacing: 0.5px;
  color: ${({ bold, theme }) => bold ? theme.colors.blue : theme.colors.grey};
  display: flex;
  align-items: center;
  transition: .5s;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  };
  &:hover {
    background-color: ${({ bold, theme }) => bold ? 'white' : theme.colors.lightGrey};
    color: ${({ bold, theme }) => bold ? theme.colors.darkBlue : theme.colors.grey};
    cursor: pointer;
  };
`;

export const Navigation = ({ currentUser }) => (
  <NavigationContainer>
    {console.log(currentUser)}
    <NavigationItemLink to='/browse-events'>Browse Event</NavigationItemLink>
    <NavigationItemLink to='/about'>About</NavigationItemLink>
    {!currentUser && 
      <NavigationItemLink to='/sing-in'>Sing in</NavigationItemLink>
    }
    {currentUser &&
      <CurrentUser { ...currentUser }/>
    }
    {currentUser && 
      <button onClick={() => auth.signOut()}>Log Out</button>
    }
    <NavigationItemLink bold="true" to='/create-event'>Create Event</NavigationItemLink>
  </NavigationContainer>
);

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const enhances = compose(
  connect(mapStateToProps)
);

export default enhances(Navigation)