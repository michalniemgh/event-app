import React, { Component } from 'react';
import styled from 'styled-components';

import { getCurrentPosition, getCityName } from '../geolocation'
import { colors } from '../styles/common.js';


const PopularEventsContainer = styled.div`
  margin: 0;
  margin-top: 75px;
`;

const PopularEventsHeader = styled.div`
  display: flex;
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
        <PopularEventsHeader>
          <PopularEventsTitle>
            Popular events in <LocationName>{this.state.cityName}</LocationName>
          </PopularEventsTitle>
        </PopularEventsHeader>
      </PopularEventsContainer>
    )
  }
}

export default PopularEvents;
