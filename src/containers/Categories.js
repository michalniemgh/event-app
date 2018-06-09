import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

import { colors } from '../styles/common.js';
import Category from '../components/Category';

import image1 from '../assets/images/slide1.jpg'
import image2 from '../assets/images/slide2.jpg'
import image3 from '../assets/images/slide3.jpg'
import image4 from '../assets/images/slide4.jpg'
import image5 from '../assets/images/slide5.jpg'
import image6 from '../assets/images/slide6.jpg'
import image7 from '../assets/images/slide7.jpg'

const CategoriesContainer = styled.div`
  margin: 75px 0;
  width: 1200px;
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
        <Category
          title="Music"
          description="Awesome music category"
          image={image3}
          path="/music"
          md={12}
          lg={8}
        />
        <Category
          title="Food and Drink"
          description="Awesome sport category"
          image={image2}
          path="/food"
          md={6}
          lg={4}
        />
      </Row>
      <Row>
        <Category
          title="Classes"
          description="Awesome music category"
          image={image3}
          path="/classes"
          md={6}
          lg={4} 
        />
        <Category
          title="Arts"
          description="Awesome sport category"
          image={image4}
          path="/arts"
          md={6}
          lg={4}
        />
        <Category
          title="Parties"
          description="Awesome sport category"
          image={image5}
          path="/parties"
          md={6}
          lg={4}
        />
      </Row>
      <Row>
        <Category
          title="Sports and Wallness"
          description="Awesome music category"
          image={image6}
          path="/sports"
          md={6}
          lg={4} 
        />
        <Category
          title="Networking"
          description="Awesome sport category"
          image={image7}
          path="/networking"
          md={12}
          lg={8}
        />
      </Row>
    </Grid>
  </CategoriesContainer>
);

export default Categories;
