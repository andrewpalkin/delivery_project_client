import {Creators} from "./actions";
import LoginService from '../../services/authServices'

const signupRequest = Creators.signupRequest;
const signupSuccess = Creators.signupSuccess;
const signupFailure = Creators.signupFailure;
// Login handlers
const loginRequest = Creators.loginRequest;
const loginSuccess = Creators.loginSuccess;
const loginFailure = Creators.loginFailure;

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
            throw Error('registry fail');
        }        
    };
};

const loginOperation = signupPayload => {
    return async (dispatch) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(loginRequest());    
        try {
            const res = await LoginService.authlogin(signupPayload);
            if (res.error) {
                dispatch(loginSuccess(res));
            } else {
                dispatch(signupSuccess(res));
            }           
        } catch (err){
            dispatch(loginFailure(err));
            new Error('Login fail');
        }        
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
