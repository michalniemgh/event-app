import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default WrappedComponent => () => (
  <BrowserRouter>
    <WrappedComponent />
  </BrowserRouter>
);
