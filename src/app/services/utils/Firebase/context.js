import React from 'react';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import fbInstance from './firebase';
import  'firebase/database';
/* eslint-disable   no-unused-expressions */
const ffConfig = {
    userProfile: 'users',    
    enableLogging: false
}

const FirebaseProvider = (props) => {
    const {store: {dispatch}} = props;
    const rrfProps = {
        firebase: fbInstance,
        config: ffConfig,
        dispatch,
        initializeAuth: true
      }
      return (    
         <ReactReduxFirebaseProvider {...rrfProps}>
             {props.children}
         </ReactReduxFirebaseProvider>   
      )    
}


export default FirebaseProvider;