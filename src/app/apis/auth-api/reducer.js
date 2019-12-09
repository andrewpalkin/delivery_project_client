import {createReducer} from 'reduxsauce';
import Types from "./types";

export const signupRequest = (state) => {
    return {
        ...state,
        showSpinner: true
    };
};

export const signupSuccess = (state, action) => {    
    return {
        ...state,
        showSpinner: false,
        error: false,
        isSignUp: true,
        isSign: false
    };
};

export const signupFailure = (state, action) => {
    const {signupError} = action;
    return {
        ...state,
        showSpinner: false,
        error: signupError,
        isSignUp: false
    };
};

export const loginRequest = (state) => {
    return {
        ...state,
        showSpinner: true,
        error: false,
        isSignUp: true,
        isSign: false
    };
};

export const loginSuccess = (state) => {    
    return {
        ...state,
        showSpinner: false,
        isSignUp: true,
        isSign: true,
    };
};

export const loginFailure = (state, action) => {
    const {loginFailure} = action;
    return {
        ...state,
        showSpinner: false,        
        isSign: false,
        error: loginFailure,
    };
};

export const signOutRequest = (state, action) => {
    return {
        ...state,
        showSpinner: false,
        isSign: false,
        isSignUp: false,
        user: undefined,

    };
};

export const HANDLERS = {
    [Types.SIGNUP_REQUEST]: signupRequest,
    [Types.SIGNUP_SUCCESS]: signupSuccess,
    [Types.SIGNUP_FAILURE]: signupFailure,
    [Types.LOGIN_REQUEST]: loginRequest,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,
    [Types.SIGNOUT_REQUEST]: signOutRequest
};

const INITIAL_STATE = {isLogged: false, isSignUp: false}; 
export default createReducer(INITIAL_STATE, HANDLERS)
