import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

const EventsSearcherContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const EventsSearcher = ({ ...props }) => (
  <Col {...props}>
    <EventsSearcherContainer>
      EventSearcher
    </EventsSearcherContainer>
  </Col>
);

// EventSearcher.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   path: PropTypes.object,
// };

export default EventsSearcher;
