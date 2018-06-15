import { FETCH_EVENTS } from './actionTypes';

const initialState = {
  events: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EVENTS:
      return {
        ...state,
        events: payload.events,
      }
    default:
      return state;
  }
};

export default reducer;