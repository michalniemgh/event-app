import { FETCH_EVENTS, GET_AUTH } from './actionTypes';
import { database, auth } from '../../shared/firebase';

export const fetchEvents = () => async dispatch => {
  database.ref('/events').on('value', snapshot => {
    dispatch({
      type: FETCH_EVENTS,
      payload: { 
        events: snapshot.val(),
      },
    });
  });
};

export const getAuth = () => async dispatch => {
  auth.onAuthStateChanged(currentUser => {
    dispatch({
      type: GET_AUTH,
      payload: { 
        currentUser,
      },
    });
  })
};