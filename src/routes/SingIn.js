import React, { Fragment } from 'react';
import styled from 'styled-components';
import MdLens from 'react-icons/lib/md/lens';
import { Grid, Col } from 'react-flexbox-grid';

import SingInButton from '../components/SingInButton';

const SingInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled(MdLens)`
  margin-top: 56px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.red};
  font-size: 75px;
`;

const SingInTitle = styled.h1`
  margin: 0;
  font-weight: 300;
  font-size: 35px;
  color: ${({ theme }) => theme.colors.grey}
`;

const SingInSubtitle = styled.h2`
  margin-top: 4px;
  font-weight: 300;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey}
`;

export default () => (
  <Grid>
    <Col xs={12} mdOffset={2} md={8} lgOffset={4} lg={4}>
      <SingInContainer>
        <StyledLogo />
        <SingInTitle>
          Let's get started
        </SingInTitle>
        <SingInSubtitle>
          Sing up by most popular socials.
        </SingInSubtitle>
        <SingInButton social="Google"/>
        <SingInButton social="Twitter"/>
        <SingInButton social="Facebook"/>
        <SingInButton social="GitHub"/>
      </SingInContainer>
    </Col>
  </Grid>
)
