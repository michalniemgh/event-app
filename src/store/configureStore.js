import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import { reducer as geolocationReducer } from './geolocation/reducer';
import { reducer as firebaseReducer } from './firebase/reducer';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  geolocation: geolocationReducer,
  firebase: firebaseReducer,
});

export default createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));