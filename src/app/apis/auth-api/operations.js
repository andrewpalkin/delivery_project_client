import {Creators} from "./actions";
import LoginService from '../../services/authServices';
import firebase from "../../services/utils/Firebase/firebase";

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
            // const res = await LoginService.register(signupPayload);
            // this should return a Promise
            firebase
                .auth()
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then(res => {
                  // dispatch(signupSuccess("Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."))                          
                  dispatch(signupSuccess(res))                          
                })
                // .then(dataBeforeEmail => {
                //     firebase.auth().onAuthStateChanged(function(user) {
                //       user.sendEmailVerification();
                //     });
                //   })
                //   .then(dataAfterEmail => {
                //     firebase.auth().onAuthStateChanged(function(user) {
                //       if (user.emailVerified) {
                //         // Email is verified
                //         dispatch(signupSuccess("Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."))                        
                //       } else {
                //         // Email is not verified
                //         dispatch(signupFailure("Something went wrong, we couldn't create your account. Please try again."))                        
                //       }
                //     });
                //   })
                .catch(err => {
                  dispatch(signupFailure(err));
                });                                    
        } catch (err){
            dispatch(signupFailure(err));                        
        }        
    };
};

const loginOperation = signupPayload => {
    return async (dispatch) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(loginRequest());    
        try {
            const res = await LoginService.login(signupPayload);
            if (res.error) {
                dispatch(loginFailure(res));
            } else {
                dispatch(loginSuccess(res));
            }           
        } catch (err){
            dispatch(loginFailure(err));
           // new Error('Login fail');
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
