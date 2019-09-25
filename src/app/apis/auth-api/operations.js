import {Creators} from "./actions";

const signupRequest = Creators.signupRequest;
const signupSuccess = Creators.signupSuccess;
const signupFailure = Creators.signupFailure;

const signupOperation = signupPayload => {
    return () => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        console.log("signupOperation - : ", signupPayload);
    };
};

export default {
    signupOperation
};
