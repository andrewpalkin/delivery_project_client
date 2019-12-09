import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import { reducer as firebase } from "react-redux-firebase";
import authReducer from "./app/apis/auth-api";
import userReducer from "./app/apis/user-api";

const rootReducer = combineReducers({   
    auth: authReducer,
    form: formReducer,
    user: userReducer,
    firebase
});

export default rootReducer;