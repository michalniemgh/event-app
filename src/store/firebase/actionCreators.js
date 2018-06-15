import { FETCH_EVENTS } from './actionTypes';
import { database } from '../../shared/firebase';

export const fetchEvents = () => async dispatch => {
  database.ref('/events').on('value', snapshot => {
    dispatch({
      type: FETCH_EVENTS,
      payload: { 
        events: snapshot.val(),
      }
    });
  });
};