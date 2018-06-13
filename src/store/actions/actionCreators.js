import { getCurrentCoords, getCurrentCityName } from '../../geolocation';
import { SET_COORDS, SET_CITY_NAME } from './actionTypes';

export const setCoords = () =>
  async dispatch => {
    try {
      const position = await getCurrentCoords();
      if (position) {
        const { coords } = position;
        console.log(coords)
        dispatch({
          type: SET_COORDS,
          payload: {
            coords,
          }
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
   
export const setCityName = () =>
  async dispatch => {
    try {
      const position = await getCurrentCoords();
      if (position) {
        const { coords } = position;
        const cityName = await getCurrentCityName(coords)
        dispatch({
          type: SET_CITY_NAME,
          payload: {
            cityName,
          }
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
