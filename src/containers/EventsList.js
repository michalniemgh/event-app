import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

const EventsListContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const EventsList = ({ ...props }) => (
  <Col {...props}>
    <EventsListContainer>
      EventSearcher
    </EventsListContainer>
  </Col>
);

// EventSearcher.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   path: PropTypes.object,
// };

export default EventsList;
