import types from "./types";

const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case types.SIGNUP_REQUEST: {
            return {
                ...state,
                showSpinner: true
            };
        }

        case types.SIGNUP_SUCCESS: {
            const {signupResponse} = action;
            console.log("SIGNUP_SUCCESS: ", signupResponse);
            return {
                ...state,
                signupSuccess: true,
                showSpinner: false
            };
        }

        case types.SIGNUP_FAILURE: {
            return {
                ...state,
                showSpinner: false,
                signupError: "SIGNUP Failed"
            };
        }

        default:
            return state;
    }
};

export default authReducer;