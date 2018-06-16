import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

const CurrentUserContainer = styled.div`
  text-transform: uppercase;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 0 20px;
  font-size: 14px;
  font-weight: ${({ bold }) => bold ? 600 : 300};
  letter-spacing: 0.5px;
  color: ${({ bold, theme }) => bold ? theme.colors.blue : theme.colors.grey};
  display: flex;
  align-items: center;
`;

const CurrentUserName = styled.span`
  margin-left: 15px;
`;

const CurrentUserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const CurrentUser = ({ displayName, photoURL }) => (
  <CurrentUserContainer>
    <CurrentUserAvatar src={photoURL} />
    <CurrentUserName>
      {displayName}
    </CurrentUserName>
  </CurrentUserContainer>
);

export default CurrentUser;