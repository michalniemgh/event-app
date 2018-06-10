import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

import EventCard from '../components/EventCard';
import banner from '../assets/images/banner.jpeg';
import { getCurrentPosition, getCityName } from '../geolocation'
import { colors } from '../styles/common.js';

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

class PopularEvents extends Component {
  state = {
    cityName: null,
  }
  componentDidMount = () => {
    this.setPosition()
  }
  setPosition = async () => {
    try {
      const position = await getCurrentPosition();
      if (position) {
        const { coords } = position;
        const cityName = await getCityName(coords)
          this.setState({
            cityName,
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <PopularEventsContainer>
        <PopularEventsTitle>
          Popular events in <LocationName>{this.state.cityName}</LocationName>
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
              xs={12}
              md={4}
            />
          </Row>
        </Grid>
      </PopularEventsContainer>
    )
  }
}

export default PopularEvents;
