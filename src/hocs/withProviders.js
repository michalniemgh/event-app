import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider  } from 'react-redux';

import reduxStore from '../store/configureStore';

export default WrappedComponent => () => (
  <Provider store={reduxStore}>
    <BrowserRouter>
      <WrappedComponent />
    </BrowserRouter>
  </Provider>
);
