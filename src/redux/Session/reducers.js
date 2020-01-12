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

const initialState = {
    isSigningIn: false,
    isSigningOut: false,
    isVerifying: false,
    isAuthenticated: false,
    user: {},
    error: {}
};

const sessionReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN_BEGIN:
            return{
                ...state,
                isSigningIn: true,
            };
        case SIGN_IN_SUCCESS:
            return{
                ...state,
                isSigningIn: false,
                isAuthenticated: true,
                user: action.payload.user
            };
        case SIGN_IN_FAILURE:
            return{
                ...state,
                isSigningIn: false,
                isAuthenticated: true,
                error: action.payload.error
            };
        case SIGN_OUT_BEGIN:
            return{
                ...state,
                isSigningOut: true,
            };
        case SIGN_OUT_SUCCESS:
            return{
                ...state,
                isSigningOut: false,
                isAuthenticated: false,
                user: {}
            };
        case SIGN_OUT_FAILURE:
            return{
                ...state,
                isSigningOut: false,
                error: action.payload.error
            };
        case VERIFY_USER_BEGIN:
            return{
                ...state,
                isVerifying: true
            };
        case VERIFY_USER_SUCCESS:
                return{
                    ...state,
                    isVerifying: false
            };
        default:
            return state;
    }
};

export { sessionReducer };
