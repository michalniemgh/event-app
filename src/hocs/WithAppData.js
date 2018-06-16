import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { setCoords, setCityName } from '../store/geolocation/actionCreators';
import { fetchEvents, getAuth } from '../store/firebase/actionCreators';

const WithAppData = WrappedComponent => 
  class extends Component {
    componentDidMount = () => {
      this.setApplicationData();
    }
    setApplicationData = () => {
      const { setCoords, setCityName, fetchEvents, getAuth } = this.props;
      setCoords();
      setCityName();
      fetchEvents();
      getAuth();
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
    getAuth,
  },
  dispatch);

const enhances = compose(
  connect(null, mapDispatchToProps),
  WithAppData,
)

export default WrappedComponent => enhances(WrappedComponent);
