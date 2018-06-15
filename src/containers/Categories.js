import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

import { colors } from '../styles/common.js';
import categoriesInfo from '../shared/categoriesInfo';
import Category from '../components/Category';

const CategoriesContainer = styled.div`
  margin: 0;
  margin-top: 55px;
  width: 1200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoriesTitle = styled.h1`
  color: ${colors.grey};
  line-height: 60px;
  font-weight: 300
  font-size: 25px;
  margin: 0
`;

const Categories = () => (
  <CategoriesContainer>
    <CategoriesTitle>
      Browse By Top Categories
    </CategoriesTitle>
    <Grid>
      <Row>
        {categoriesInfo.map(category => (
          <Category
            key={category.title}
            title={category.title}
            description={category.description}
            image={category.image}
            path={category.path}
            xs={12}
            md={category.wide ? 8 : 4}
          />
        ))}
      </Row>
    </Grid>
  </CategoriesContainer>
);

export default Categories;
