import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import reduxStore from '../store/configureStore';

export default WrappedComponent => () => (
    <BrowserRouter>
      <ReduxProvider store={reduxStore}>
          <WrappedComponent />
      </ReduxProvider>
    </BrowserRouter>
);
