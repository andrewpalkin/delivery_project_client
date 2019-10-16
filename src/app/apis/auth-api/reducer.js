import { createReducer } from 'reduxsauce';
import Types from "./types";

const INITIAL_STATE =  { error: false, goodies: null };

export const signupRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        showSpinner: true
    };
}

export const signupSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        showSpinner: true
    };
}

export const signupFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        showSpinner: true
    };
}

export const HANDLERS = {
    [Types.SIGNUP_REQUEST]: signupRequest,
    [Types.SIGNUP_SUCCESS]: signupSuccess,
    [Types.SIGNUP_FAILURE]: signupFailure,
  }
  
  export default createReducer(INITIAL_STATE, HANDLERS)


// const authReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {

//         case types.SIGNUP_REQUEST: {
//             return {
//                 ...state,
//                 showSpinner: true
//             };
//         }

//         case types.SIGNUP_SUCCESS: {
//             const {signupResponse} = action;
//             console.log("SIGNUP_SUCCESS: ", signupResponse);
//             return {
//                 ...state,
//                 signupSuccess: true,
//                 showSpinner: false
//             };
//         }

//         case types.SIGNUP_FAILURE: {
//             return {
//                 ...state,
//                 showSpinner: false,
//                 signupError: "SIGNUP Failed"
//             };
//         }

//         default:
//             return state;
//     }
// };

// export default authReducer;