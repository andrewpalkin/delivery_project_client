import React from 'react';
import ReactDOM from "react-dom";
import App from "./app/App";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

/* Firebase HOC component */
import { ReactReduxFirebaseProvider, getFirebase  } from "react-redux-firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

const firebaseConfig = {
    apiKey: "AIzaSyBxyjiEaYfB1bcp0r90F0TYkUObJJGuGvU",
    authDomain: "exalted-beanbag-649.firebaseapp.com",
    databaseURL: "https://exalted-beanbag-649.firebaseio.com",
    projectId: "exalted-beanbag-649",
    storageBucket: "exalted-beanbag-649.appspot.com",
    messagingSenderId: "632071944847",
    appId: "1:632071944847:web:9fba0193b57db7616b8efa"
  };

firebase.initializeApp(firebaseConfig);
// db.enableLogging(false, false);

const middlewares = [
    thunk.withExtraArgument({getFirebase})
];
// Create store with reducers and initial state
const createStoreWithMiddleware = compose(
        applyMiddleware(...middlewares),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? () => window.__REDUX_DEVTOOLS_EXTENSION__ : f => f
)(createStore)
const store = createStoreWithMiddleware(rootReducer);

const ffConfig = {
    userProfile: 'users',
    useFirestoreForProfile: false, 
    enableLogging: false
}

const rrfProps = {
    firebase,
    config: ffConfig,
    dispatch: store.dispatch,
    initializeAuth: false
  }

const Main = () => (
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps} />
            <App />       
         <ReactReduxFirebaseProvider />   
    </Provider>
);

ReactDOM.render(<Main/>, document.getElementById('root'));