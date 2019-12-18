import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {Grid, Message} from "semantic-ui-react";
import SignupForm from "./signup.Form";
import {useSelector} from "react-redux";
import {isEmpty, isLoaded, useFirebase} from "react-redux-firebase";

const onSubmitSignup = () => {
};

const Signup = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const firebase = useFirebase();
    const firebaseSignup = payload => {
        firebase
            .createUser({email: payload.email, password: payload.password})
            .then()
            .catch(error => {
                setErrorMessage(error.message);
            });
    };

    const auth = useSelector(state => state.firebase.auth);

    return isLoaded(auth) && !isEmpty(auth) ? (
        <Redirect to="/login"/>
    ) : (
        <div className="signup-form">
            {errorMessage &&
            <Message negative>
                <Message.Header>Sign up Error</Message.Header>
                <p>{errorMessage}</p>
            </Message>
            }
            <Grid
                style={{height: "100%"}}
                centered
            >
                <SignupForm signup={firebaseSignup} onSubmit={onSubmitSignup}/>
            </Grid>
        </div>
    );
};

export default Signup;
