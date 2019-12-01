import {createReducer} from 'reduxsauce';
import Types from "./types";

// next stime need to reworked it to more elegant way , with  middlelayer options 
const user = JSON.stringify(localStorage.getItem('user'));

const INITIAL_STATE = (user !== "null" && user !== undefined)
    ? {error: false, singUp: true, isSign: true, user: user}
    : {error: false, singUp: false, isSign: false, user: undefined};

export const signupRequest = (state = INITIAL_STATE) => {
    return {
        ...state,
        showSpinner: true
    };
};

export const signupSuccess = (state = INITIAL_STATE, action) => {    
    return {
        ...state,
        showSpinner: false,
        error: false,
        isSignUp: true,
        isSign: false
    };
};

export const signupFailure = (state = INITIAL_STATE, action) => {
    const {signupError} = action;
    return {
        ...state,
        showSpinner: false,
        error: signupError,
        isSignUp: false
    };
};

export const loginRequest = (state = INITIAL_STATE) => {
    return {
        ...state,
        showSpinner: true,
        error: false,
        isSignUp: true,
        isSign: false
    };
};

export const loginSuccess = (state = INITIAL_STATE, action) => {
    const {loginSuccess: {user}} = action;
    return {
        ...state,
        showSpinner: false,
        isSignUp: true,
        isSign: true,
        user: {            
            email: user.email,
            emailVerified: user.emailVerified,
            uid: user.uid,
            token: user.refreshToken
        }
    };
};

export const loginFailure = (state = INITIAL_STATE, action) => {
    const {loginFailure} = action;
    return {
        ...state,
        showSpinner: true,        
        isSign: false,
        error: loginFailure,
    };
};

export const signOutOperation = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        showSpinner: true,
        isSign: false,
        isSignUp: false,
        user: undefined
    };
};

export const HANDLERS = {
    [Types.SIGNUP_REQUEST]: signupRequest,
    [Types.SIGNUP_SUCCESS]: signupSuccess,
    [Types.SIGNUP_FAILURE]: signupFailure,
    [Types.LOGIN_REQUEST]: loginRequest,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,
    [Types.SIGNOUT_REQUEST]: signOutOperation
};

export default createReducer(INITIAL_STATE, HANDLERS)
