import {Creators} from "./actions";
import LoginService from '../../services/authServices'

const signupRequest = Creators.signupRequest;
const signupSuccess = Creators.signupSuccess;
const signupFailure = Creators.signupFailure;

const signupOperation = signupPayload => {
    return async (dispatch) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(signupRequest());    
        try {
            const res = await LoginService.register(signupPayload);
            if (res.error) {
                dispatch(signupFailure(res));
            } else {
                dispatch(signupSuccess(res));
            }           
        } catch (err){
            dispatch(signupFailure(err));
        }        
    };
};

const loginOperation = signupPayload => {
    return (dispatch) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(signupRequest());
        LoginService.register(signupPayload)
            .then(response => {
                if (response.ok) {
                    dispatch(signupSuccess(response.ok));
                }
            })
            .catch(err => {
                dispatch(signupFailure(err));
                new Error('signup error: ', err);
            })
    };
};

const logoutOperation = () => {
    return (dispatch) => {
        LoginService.logout();
        dispatch(signupFailure())
    }
};

export default {
    signupOperation,
    loginOperation,
    logoutOperation
};
