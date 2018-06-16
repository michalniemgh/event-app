import { FETCH_EVENTS, GET_AUTH } from './actionTypes';

const initialState = {
  events: null,
  currentUser: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EVENTS:
      return {
        ...state,
        events: payload.events,
      }
    case GET_AUTH:
      return {
        ...state,
        currentUser: payload.currentUser,
      }  
    default:
      return state;
  }
};

export default reducer;