import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { setCoords, setCityName } from '../store/actions/actionCreators'

const WithAppData = WrappedComponent => 
  class extends Component {
    componentDidMount = () => {
      this.setApplicationData();
    }
    setApplicationData = () => {
      const { setCoords, setCityName } = this.props;
      setCoords();
      setCityName();
    }
    render() {
      return <WrappedComponent />
    }
  }

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setCoords, setCityName }, dispatch);

const enhances = compose(
  connect(null, mapDispatchToProps),
  WithAppData,
)

export default WrappedComponent => enhances(WrappedComponent);
