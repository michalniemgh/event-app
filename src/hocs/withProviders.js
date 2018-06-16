import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import reduxStore from '../store/configureStore';
import { theme } from '../styles/common';

export default WrappedComponent => () => (
    <BrowserRouter>
      <ReduxProvider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <WrappedComponent />
        </ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
);
