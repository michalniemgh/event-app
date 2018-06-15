import React from 'react';
import { withScriptjs, withGoogleMap } from "react-google-maps"
import { compose } from 'redux';

import { API_KEY } from '../shared/googleMapsApi';

const withGoogleMaps = WrappedComponent => () => (
  <WrappedComponent
    isMarkerShown
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `300px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);

const enhances = compose(
  withGoogleMaps,
  withScriptjs,
  withGoogleMap,
);

export default WrappedComponent => enhances(WrappedComponent);
