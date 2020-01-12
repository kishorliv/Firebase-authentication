import { firebaseObj } from '../../firebase';

import {
    SIGN_IN_BEGIN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
  } from './actionTypes';

const signInBegin = () => ({
  type: SIGN_IN_BEGIN,
});

const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: { user }
});

const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: { error }
});


const signIn = (email, password) => {
  return dispatch => {
    dispatch(signInBegin());

    firebaseObj
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch(signInSuccess(email, password));
    })
    .catch(error => {
      dispatch(signInFailure(error));
    });
  };
};


export default signIn;