import {
    SIGN_IN_BEGIN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
  } from './actionTypes';

const initialState = {
    isLoggingIn: false,
    isAuthenticated: false,
    user: {},
    error: {}
};

const signInReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN_BEGIN:
            return{
                ...state,
                isLoggingIn: true,
            };
        case SIGN_IN_SUCCESS:
            return{
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                user: action.payload.user
            };
        case SIGN_IN_FAILURE:
            return{
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                error: action.payload.error
            }
        default:
            return state;
    }
};

export default signInReducer;
