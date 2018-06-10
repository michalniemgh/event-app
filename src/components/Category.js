import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';

const StyledCategoryLink = styled(NavLink)`
  height: 220px;
  margin: 8px 0;
  padding: 10px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  };
  &:hover > h4 {
    transform: scale(1);
  };
  &:hover > img {
    transform: scale(1.2);
    filter: brightness(30%);
  };
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;

const CategoryImage = styled.img`
  height: 100%;
  width: 100%;
  transition: .5s;
  object-fit: cover;
  position: absolute;
`;

const CategoryTitle = styled.h2`
  color: white;
  font-weight: 600;
  font-size: 25px;
  margin: 0;
  transition: .5s;
  z-index: 1;
`;

const CategoryDescription = styled.h4`
  color: white;
  text-align: center;
  font-weight: 300
  transform: scale(0);
  margin-top: 10px;
  transition: .5s;
  z-index: 1;
`;

const Category = ({ title, description, image, path, ...props }) => (
  <Col {...props}>
    <StyledCategoryLink to={path}>
      <CategoryImage src={image} />
      <CategoryTitle>{title}</CategoryTitle>
      <CategoryDescription>{description}</CategoryDescription>
    </StyledCategoryLink>
  </Col>
);

Category.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
}

export default Category;
