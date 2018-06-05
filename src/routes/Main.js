import React, { Fragment } from 'react';
import styled from 'styled-components';

import VideoPanel from '../components/VideoPanel';
import Searcher from '../components/Searcher';
import Categories from '../containers/Categories';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <MainContainer>
    <VideoPanel />
    <Searcher />
    <Categories />
  </MainContainer>
)

