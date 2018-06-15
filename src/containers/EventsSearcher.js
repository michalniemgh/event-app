import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

import ViewportDetector from '../hocs/ViewportDetector';
import LocationMap from '../components/LocationMap';

const EventsSearcherContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const EventsSearcher = ({ ...props, isMobile }) => (
  <Col {...props}>
    <EventsSearcherContainer>
      {!isMobile && <LocationMap />}
    </EventsSearcherContainer>
  </Col>
);

EventsSearcher.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

const enhances = compose(
  ViewportDetector,
)

export default enhances(EventsSearcher);
