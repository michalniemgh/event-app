import React from 'react';
import styled from 'styled-components';

import banner from '../assets/images/banner.jpeg'

const Banner = styled.div`
  width: 100%;
  height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url("${banner}")
`;

export default () => <Banner />
