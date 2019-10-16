import {Creators} from "./actions";
import LoginService from '../../services/authServices'

const signupRequest = Creators.signupRequest;
const signupSuccess = Creators.signupSuccess;
const signupFailure = Creators.signupFailure;

const signupOperation = signupPayload => {
    return (dispatch) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(signupRequest());
        const user = LoginService.register(signupPayload);
        user
            .then(response => {
                dispatch(signupSuccess(response.data));
            })
            .catch(err => {
                dispatch(signupFailure(err));
                new Error('signup error ', err);
            })
    };
};

export default {
    signupOperation
};
