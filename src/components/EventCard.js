import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

import { colors } from '../styles/common.js';

const EventCardContainer = styled.div`
  margin: 8px 0;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: white;
  &:hover {
    box-shadow: 0 1px 5px 1px rgba(0,0,0,.1);
  };
`;

const EventCardPoster = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;

const EventCardPrice = styled.div`
  background-color: rgba(255,255,255,.7);
  text-transform: uppercase;
  font-size: 12px;
  padding: 5px 10px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const StyledEventLink = styled(Link)`
  color: ${colors.grey};
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const EventCardBody = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.lightGrey};
`;

const EventCardDate = styled.div`
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 7px;
`;

const EventCardTitle = styled.div`
  font-weight: 600;
  margin-top: 7px;
`;

const EventCardVenue = styled.div`
  height: 18px;
  margin-top: 20px;
`;

const EventCardFooter = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid ${colors.lightGrey};
  padding-left: 15px;
`;

const EventCardTagsContainer = styled.div`
  display: flex;
  width: 70%;
`;

const EventCardTag = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 40px;
  margin-right: 10px;
  text-transform: capitalize;
`;

const EventCardButton= styled.div`
  border-left: 1px solid ${colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  &:hover {
    color: ${colors.sea};
    cursor: pointer;
  }
`;

const EventCard = ({ path, price, image, date, title, venue, tags }) => (
  <Col xs={12} md={4}>
    <EventCardContainer>
      <StyledEventLink to={path}>
        <EventCardPrice>{price ? price : 'FREE'}</EventCardPrice>
        <EventCardPoster src={image ? image : null } />
        <EventCardBody>
          <EventCardDate>{date ? date : 'unknown'}</EventCardDate>
          <EventCardTitle>{title ? title : 'example title'}</EventCardTitle>
          <EventCardVenue>{venue ? venue : 'unknown'}</EventCardVenue>
        </EventCardBody>
      </StyledEventLink>
      <EventCardFooter>
        <EventCardTagsContainer>
          {map(tags, tag => (
            <EventCardTag key={tag}>{`#${tag}`}</EventCardTag>
          )).slice(1, 3)}
        </EventCardTagsContainer>
        <EventCardButton>X</EventCardButton>
        <EventCardButton>Y</EventCardButton>
      </EventCardFooter>
    </EventCardContainer>
  </Col>
);

EventCard.propTypes = {
  path: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  venue: PropTypes.string,
  tags: PropTypes.array,
}

export default EventCard;
