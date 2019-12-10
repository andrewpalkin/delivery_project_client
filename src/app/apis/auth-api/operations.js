import {Creators} from "./actions";
import {default as sessionStorage} from "../../services/utils/sessionStorage";
import {firebase} from '../../services/utils/Firebase'

const signupRequest = Creators.signupRequest;
const signupSuccess = Creators.signupSuccess;
const signupFailure = Creators.signupFailure;
// Login handlers
const loginRequest = Creators.loginRequest;
const loginSuccess = Creators.loginSuccess;
const loginFailure = Creators.loginFailure;

// Logout 
const signOutRequest = Creators.signOutRequest;
const signupOperation = payload => {
    return async (dispatch, getState, getFirebase) => {       
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(signupRequest());
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then(res => {                    
                    sessionStorage.setItem("user", res.user);
                })
                .catch(err => {
                    dispatch(signupFailure(err));
                });
        } catch (err) {
            dispatch(signupFailure(err));
        }
    };
};

const loginOperation = payload => {
    return async (dispatch, getState, getFirebase) => { 
         dispatch(loginRequest());
         const firebaseInstance  = getFirebase.getFirebase();

             firebaseInstance.login({email: payload.email, password: payload.password})
        // dispatch(loginRequest());
        // try {
        //     firebase
        //         .login({email: payload.email, password: payload.password})              
        //         .then(res => {
        //             dispatch(loginSuccess(res));
        //             sessionStorage.setItem("user", res.user);
        //         })
        //         .catch(err => {
        //             dispatch(loginFailure(err));
        //         })
        // } catch (err) {
        //     dispatch(loginFailure(err));
        // }

    };
};

const signOutOperation = () => {
    return (dispatch, getFirebase) => {       
        dispatch(signOutRequest())
        try {
            const user = firebase.auth().currentUser;
            if (user) {
                firebase
                .auth()
                .signOut()
                .then(res => {
                    sessionStorage.removeItem('user');
                    dispatch(signOutRequest({res}));                    
                })
                .catch(err => {
                    dispatch(signOutRequest(err))
                })    
            }
            
        } catch (err) {
            dispatch(signOutRequest()) 
        }     
        
    }
};

export default {
    signupOperation,
    loginOperation,
    signOutOperation
};
