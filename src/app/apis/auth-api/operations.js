import {    
    Redirect    
  } from "react-router-dom";
import {Creators} from "./actions";
import LoginService from '../../services/loginService'

const signupRequest = Creators.signupRequest;
const signupSuccess = Creators.signupSuccess;
const signupFailure = Creators.signupFailure;

const signupOperation = signupPayload => {
    return (dispatch) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(signupRequest());
        LoginService.register(signupPayload)
            .then(response => {
                if (response.ok) {
                    dispatch(signupSuccess(response.ok));
                }                
                // redireect to home page and if user is not approved display message                 
            })
            .catch(err => {
                dispatch(signupFailure(err));
                new Error('signup error ', err);
            })        
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
                new Error('signup error ', err);
            })        
    };
};

const logoutOperation = () => {
    return (dispatch) => {
        LoginService.logout();
        dispatch(signupFailure())
    }
}

export default {
    signupOperation,
    loginOperation,
    logoutOperation
};
