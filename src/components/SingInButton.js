import React  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import camelCase from 'lodash/camelCase';

import { auth, googleAuthProvider } from '../shared/firebase';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGoogle from 'react-icons/lib/fa/google';
import FaGithub from 'react-icons/lib/fa/github';


const SingInButtonContainer = styled.button`
  height: 45px;
  width: 85%;
  border: 0;
  border-radius: 45px;
  outline: 0;
  color: white;
  padding: 0 31px;
  margin-top: 15px;
  text-align: center;
  font-weight: 600;
  background: ${({ theme, social }) => theme.colors[camelCase(social)]}
  border-radius: 40px;
  cursor: pointer;
  transition: all .4s cubic-bezier(.4,0,.3,1);
  &:hover {
    filter: brightness(85%)
  }
`;

const SingInButtonText = styled.span`
  font-size: 14px;
  font-weight: 300;
  text-decoration: none;
  margin: 0;
  margin-left: 15px;
  line-height: 22px;
`;

const socialIcons = {
  google: <FaGoogle size={30} />,
  facebook: <FaFacebook size={30} />,
  twitter: <FaTwitter size={30} />,
  gitHub: <FaGithub size={30} />,
};

const authProviders = {
  google: googleAuthProvider,
};

const setSocialIcons = social => socialIcons[camelCase(social)];

const setAuthFunction = social => authProviders[camelCase(social)];

const SingInButton = ({ social }) => (
  <SingInButtonContainer
    social={social}
    onClick={() => auth.signInWithPopup(setAuthFunction(social))}
  >
    {setSocialIcons(social)}
    <SingInButtonText>{`Sing in with ${social}`}</SingInButtonText>
  </SingInButtonContainer>
);

SingInButton.propTypes = {
  social: PropTypes.oneOf(['Google', 'Facebook', 'Twitter', 'GitHub']),
}

export default SingInButton;