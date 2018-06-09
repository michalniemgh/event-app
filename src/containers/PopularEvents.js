import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

import { getCurrentPosition, getCityName } from '../geolocation'
import { colors } from '../styles/common.js';


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

const PopularEventsLocation = styled.h1`
  color: ${colors.sea};
  line-height: 60px;
  font-weight: 400
  font-size: 25px;
  margin: 0;
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
      const { coords } = position;
      const cityName = await getCityName(coords)
      this.setState({
        cityName,
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { cityName } = this.state;
    return (
      <Fragment>
        <PopularEventsHeader>
          <PopularEventsTitle>Popular events in</PopularEventsTitle>
          <PopularEventsLocation>
            {cityName}
          </PopularEventsLocation>
        </PopularEventsHeader>
      </Fragment>  
    )
  }
}

export default PopularEvents;
