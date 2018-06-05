import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/common.js';

const SearcherContainer = styled.div`
  position: absolute;
  width: 1000px;
  height: 250px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.25);
  border-radius: 4px;
  margin: 300px auto 0 auto;
  z-index: 1;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
`;

const SearcherTitle = styled.h1`
  color: ${colors.red};
  line-height: 60px;
  font-weight: 300
  font-size: 45px;
  margin: 0
`;

const Searcher = () => (
  <SearcherContainer>
    <SearcherTitle>
      Find your next experience
    </SearcherTitle>
  </SearcherContainer>
);

export default Searcher;
