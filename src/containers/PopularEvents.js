import React from 'react';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-flexbox-grid';
import map from 'lodash/map';

import { colors } from '../styles/common';
import EventCard from '../components/EventCard';
import banner from '../assets/images/banner.jpeg';
import { selectCityName } from '../store/geolocation/selectors';
import { selectEvents } from '../store/firebase/selectors';

const PopularEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  margin-top: 75px;
`;

const PopularEventsTitle = styled.h1`
color: ${colors.grey};
line-height: 60px;
font-weight: 300
font-size: 25px;
margin: 0
`;

const LocationName = styled.span`
color: ${colors.sea};
font-weight: 400
&:hover {
  cursor: pointer;
  text-decoration: underline;
  color: ${colors.darkBlue};
}
`;

const PopularEvents = ({ cityName, events }) => (
  <PopularEventsContainer>
    <PopularEventsTitle>
      Popular events in <LocationName>{cityName}</LocationName>
    </PopularEventsTitle>
    {events &&
      <Grid>
        <Row>
          {map(events, (event, key) => (
            <EventCard
              key={key}
              path={`/events?${key}`}
              price={event.price}
              image={banner}
              date={event.date}
              title={event.title}
              venue={event.venue}
              tags={event.tags}
            />
          ))}
        </Row>
      </Grid>
    }
  </PopularEventsContainer>
);

const mapStateToProps = state => ({
  cityName: selectCityName(state),
  events: selectEvents(state),
})

const enhances = compose(
  connect(mapStateToProps),
)

export default enhances(PopularEvents);
