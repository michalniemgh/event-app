import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';

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

const StyledEventLink = styled(NavLink)`
  color: ${colors.grey};
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const EventBody = styled.div`
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

const EventCard = ({ path, price, image, date, title, venue, ...props }) => (
  <Col { ...props }>
    <EventCardContainer>
      <StyledEventLink to={path}>
        <EventCardPrice>{price}</EventCardPrice>
        <EventCardPoster src={image} />
        <EventBody>
          <EventCardDate>{date}</EventCardDate>
          <EventCardTitle>{title}</EventCardTitle>
          <EventCardVenue>{venue}</EventCardVenue>
        </EventBody>
      </StyledEventLink>
      <EventCardFooter>


      </EventCardFooter>
    </EventCardContainer>
  </Col>
);

// EventCard.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   path: PropTypes.string,
// }

export default EventCard;
