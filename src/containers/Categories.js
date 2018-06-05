import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/common.js';

const CategoriesContainer = styled.div`
  margin: 0 auto;
`;

// const SearcherTitle = styled.h1`
//   color: ${colors.red};
//   line-height: 60px;
//   font-weight: 300
//   font-size: 45px;
//   margin: 0
// `;

const Categories = () => (
  <CategoriesContainer>
    {/* <SearcherTitle>
      Find your next experience
    </SearcherTitle> */}
  </CategoriesContainer>
);

export default Categories;
