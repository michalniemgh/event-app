import React from 'react';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-flexbox-grid';

import { colors } from '../styles/common';
import EventCard from '../components/EventCard';
import banner from '../assets/images/banner.jpeg';

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

const PopularEvents = ({ cityName }) => (
  <PopularEventsContainer>
    <PopularEventsTitle>
      Popular events in <LocationName>{cityName}</LocationName>
    </PopularEventsTitle>
    <Grid>
      <Row>
        <EventCard
          path="/workshops"
          price="free"
          image={banner}
          date="WED, JUN 20, 7:00 PM"
          title="Workshops"
          venue="Katowice"
          tags={['music', 'performance', 'sport', 'food']}
          xs={12}
          md={4}
        />
        <EventCard
          path="/workshops"
          price="free"
          image={banner}
          date="WED, JUN 20, 7:00 PM"
          title="Workshops"
          venue="Katowice"
          tags={['music', 'performance']}
          xs={12}
          md={4}
        />
        <EventCard
          path="/workshops"
          price="free"
          image={banner}
          date="WED, JUN 20, 7:00 PM"
          title="Workshops"
          venue="Katowice"
          tags={['music', 'performance']}
          xs={12}
          md={4}
        />
        <EventCard
          path="/workshops"
          price="free"
          image={banner}
          date="WED, JUN 20, 7:00 PM"
          title="Workshops"
          venue="Katowice"
          tags={['music', 'performance']}
          xs={12}
          md={4}
        />
        <EventCard
          path="/workshops"
          price="free"
          image={banner}
          date="WED, JUN 20, 7:00 PM"
          title="Workshops"
          venue="Katowice"
          tags={['music', 'performance']}
          xs={12}
          md={4}
        />
        <EventCard
          path="/workshops"
          price="free"
          image={banner}
          date="WED, JUN 20, 7:00 PM"
          title="Workshops"
          venue="Katowice"
          tags={['music', 'performance']}
          xs={12}
          md={4}
        />
      </Row>
    </Grid>
  </PopularEventsContainer>
);

const mapStateToProps = state => ({
  cityName: state.geolocation.cityName,
})

const enhances = compose(
  connect(mapStateToProps),
)

export default enhances(PopularEvents);
