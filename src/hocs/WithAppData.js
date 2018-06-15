import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { setCoords, setCityName } from '../store/geolocation/actionCreators';
import { fetchEvents } from '../store/firebase/actionCreators';

const WithAppData = WrappedComponent => 
  class extends Component {
    componentDidMount = () => {
      this.setApplicationData();
    }
    setApplicationData = () => {
      const { setCoords, setCityName, fetchEvents } = this.props;
      setCoords();
      setCityName();
      fetchEvents();
    }
    render() {
      return <WrappedComponent />
    }
  }

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setCoords,
    setCityName,
    fetchEvents,
  },
  dispatch);

const enhances = compose(
  connect(null, mapDispatchToProps),
  WithAppData,
)

export default WrappedComponent => enhances(WrappedComponent);
