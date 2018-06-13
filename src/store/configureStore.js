
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { reducer as geolocationReducer } from './reducers/geolocation';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  geolocation: geolocationReducer,
});

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));