import React from 'react';
import ReactDOM from "react-dom";
import App from "./app/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

/* Firebase management store redux sdk */
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "./services/firebase";

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

// Closure around createdStore to allow firebase intialize it self before rudux store is will be up 
const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(createStore);

const store = createStoreWithFirebase(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
      logger
    ),
    devtoolMiddleware
  )
);

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
