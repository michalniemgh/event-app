import { SET_COORDS, SET_CITY_NAME } from '../actions/actionTypes';


const initialState = {
  coords: null,
  cityName: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COORDS:
      return {
        ...state,
        coords: payload.coords,
      }
    case SET_CITY_NAME:
      return {
        ...state,
        cityName: payload.cityName,
      }  
    default:
        return state;
  }
};

export default reducer;