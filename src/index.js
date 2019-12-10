import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers";
import { getFirebase  } from "react-redux-firebase";
import {default as FBProvider} from '../src/app/services/utils/Firebase'
import App from "./app/App";
/* eslint-disable no-underscore-dangle */
const devtoolMiddleware = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? () => window.__REDUX_DEVTOOLS_EXTENSION__ : f => f;
/* eslint-enable */

const middlewares = [
    thunk.withExtraArgument({getFirebase}),
    logger
];

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middlewares),
        devtoolMiddleware   
    ) 
)

const Main = () => (
    <Provider store={store}>
        <FBProvider store={store}>
            <App />       
         </FBProvider>
    </ Provider>
);

ReactDOM.render(<Main/>, document.getElementById('root'));