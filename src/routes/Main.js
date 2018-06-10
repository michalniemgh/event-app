import React, { Fragment } from 'react';
import styled from 'styled-components';

import Banner from '../components/Banner';
import Searcher from '../components/Searcher';
import PopularEvents from '../containers/PopularEvents';
import Categories from '../containers/Categories';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <MainContainer>
    <Banner />
    <Searcher />
    <PopularEvents />
    <Categories />
  </MainContainer>
)

