import { firebaseObj } from '../../firebase';

import {
    SIGN_IN_BEGIN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_BEGIN,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    VERIFY_USER_BEGIN,
    VERIFY_USER_SUCCESS
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

const signOutBegin = () => ({
  type: SIGN_OUT_BEGIN
});

const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

const signOutFailure = (error) => ({
  type: SIGN_OUT_FAILURE,
  payload: {error}
});

const verifyUserBegin = () => ({
  type: VERIFY_USER_BEGIN
});

const verifyUserSuccess = () => ({
  type: VERIFY_USER_SUCCESS,
});


const signIn = (email, password) => {
  return dispatch => {
    dispatch(signInBegin());

    firebaseObj
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(signInSuccess(user));
    })
    .catch(error => {
      dispatch(signInFailure(error));
    });
  };
};

const signOut = () => {
  return dispatch => {
    dispatch(signOutBegin());

    firebaseObj
    .auth()
    .signOut()
    .then(() => {
      dispatch(signOutSuccess());
    })
    .catch(error => {
      dispatch(signOutFailure(error));
    });
  };
};

// verify the user session
const verifyUser = () => {
  return dispatch => {
    dispatch(verifyUserBegin());
    firebaseObj
    .auth()
    .onAuthStateChanged(user => {
      if(user !== null){
        dispatch(signInSuccess(user));
      }
      dispatch(verifyUserSuccess());
    });
  };
}; 

export { signIn, signOut, verifyUser };
