import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

const CategoryWrapper = styled.div`
  height: 220px;
  margin: 8px 0;
  border-radius: 4px;
  overflow: hidden;
`;

const CategoryContainer = styled.div`
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  backgroun-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden
  transition: .5s;
  &:hover > h4 {
    font-size: 15px;
  };
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    filter: brightness(50%);
  };
`;

const CategoryTitle = styled.h2`
  color: white;
  font-weight: 600;
  font-size: 25px;
  margin: 0;
  transition: .5s;
`;

const CategoryDescription = styled.h4`
  color: white;
  font-weight: 300
  font-size: 0;
  margin-top: 10px;
  transition: .5s;
`;

const setBackgroundImage = imageUrl => ({ backgroundImage: `url("${imageUrl}")` })

const Category = ({ title, description, image, ...props }) => (
  <Col { ...props }>
    <CategoryWrapper>
      <CategoryContainer style={setBackgroundImage(image)} >
        <CategoryTitle>{title}</CategoryTitle>
        <CategoryDescription>{description}</CategoryDescription>
      </CategoryContainer>
    </CategoryWrapper>
  </Col>
);

Category.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default Category;
