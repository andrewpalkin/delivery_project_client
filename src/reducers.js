import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {firebaseReducer} from "react-redux-firebase";
import authReducer from "./app/apis/auth-api";
import userReducer from "./app/apis/user-api";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    auth: authReducer,
    form: formReducer,
    user: userReducer
});

export default rootReducer;