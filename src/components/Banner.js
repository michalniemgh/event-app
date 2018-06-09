import React from 'react';
import styled from 'styled-components';

import headerImage from '../assets/images/slide5.jpg'

const Banner = styled.div`
  width: 100%;
  height: 500px;
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const setBackgroundImage = image => ({backgroundImage: `url("${image}")`})

export default () => <Banner style={setBackgroundImage(headerImage)}/>
