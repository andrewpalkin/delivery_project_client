import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import { reducer  } from "react-redux-firebase";
import userReducer from "./app/apis/user-api";

const rootReducer = combineReducers({       
    form: formReducer,
    user: userReducer,
    firebase: reducer
});

export default rootReducer;