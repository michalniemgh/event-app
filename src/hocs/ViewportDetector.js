import React, { Component } from 'react';

import { isMobile, isDesktop, isTablet, isLargeScreen } from '../shared/device';

export default WrappedComponent =>
  class extends Component {
    state = {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isLargeScreen: false,
    }

    componentDidMount = () => {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount = () => {
      window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
      this.setState({
        isMobile: isMobile(),
        isTablet: isTablet(),
        isDesktop: isDesktop(),
        isLargeScreen: isLargeScreen(),
      });
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
