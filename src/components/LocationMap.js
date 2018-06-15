import React from 'react';
import { GoogleMap, Marker } from "react-google-maps";
import { compose } from "redux";
import { connect } from "react-redux";

import withGoogleMaps from "../hocs/withGoogleMaps";
import { selectCoords } from '../store/geolocation/selectors';

const LocationMap = ({ isMarkerShown, coords }) => (
  coords &&
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: coords.latitude, lng: coords.longitude }}
  >
    {isMarkerShown && <Marker position={{ lat: coords.latitude, lng: coords.longitude }} />}
  </GoogleMap>
);

const mapStateToProps = state => ({
  coords: selectCoords(state)
});

const enhances = compose(
  withGoogleMaps,
  connect(mapStateToProps),
);

export default enhances(LocationMap)