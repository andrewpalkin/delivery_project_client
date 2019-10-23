import {createReducer} from 'reduxsauce';
import Types from "./types";

const INITIAL_STATE =  { error: false, singUp: false, user: {id: null} };

export const signupRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        showSpinner: true
    };
};

export const signupSuccess = (state = INITIAL_STATE, action) => {
    const {signupResponse: {data, error}} = action;
    return {
        ...state,
        showSpinner: true,
        error,                        
        user: {
            singUp: true,
            loggedIn: false,
            id: data.id,
            verification: data.verification
        }

    };
};

export const signupFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        showSpinner: true,
        loggedIn: false,  
        error: action.signupError
    };
};

export const HANDLERS = {
    [Types.SIGNUP_REQUEST]: signupRequest,
    [Types.SIGNUP_SUCCESS]: signupSuccess,
    [Types.SIGNUP_FAILURE]: signupFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS)
