import {Creators} from "./actions";
import LoginService from '../../services/authServices';
import firebase from "../../services/utils/Firebase/firebase";
import {default as sessionStorage} from "../../services/utils/sessionStorage";

const signupRequest = Creators.signupRequest;
const signupSuccess = Creators.signupSuccess;
const signupFailure = Creators.signupFailure;
// Login handlers
const loginRequest = Creators.loginRequest;
const loginSuccess = Creators.loginSuccess;
const loginFailure = Creators.loginFailure;

const signupOperation = payload => {
    return async (dispatch) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(signupRequest());
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then(res => {
                  dispatch(signupSuccess(res));
                  sessionStorage.setItem("user", res.user);                          
                })
                .catch(err => {
                  dispatch(signupFailure(err));
                });                                    
        } catch (err){
            dispatch(signupFailure(err));
        }
    };
};

const loginOperation = payload => {
    return async (dispatch) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(loginRequest());
        try {
            firebase
            .auth()
            .signInWithEmailAndPassword(payload.email, payload.password)
            .then(res => {
                dispatch(loginSuccess(res)); 
                sessionStorage.setItem("user", res.user);      
            })
            .catch(err => {
                dispatch(loginFailure(err));    
            })           
        } catch (err){
            dispatch(loginFailure(err));           
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
