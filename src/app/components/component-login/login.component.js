import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {Grid, Message} from "semantic-ui-react";
import LoginForm from "./login.form";
import {useSelector} from 'react-redux'
import {isEmpty, isLoaded, useFirebase} from 'react-redux-firebase'

const onSubmitLogin = () => {
};

const LoginComponent = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const firebase = useFirebase();
    const firebaseLogin = (payload) => {
        firebase.login({email: payload.email, password: payload.password})
            .then()
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    const auth = useSelector(state => state.firebase.auth);

    return (isLoaded(auth) && !isEmpty(auth)) ? (
        <Redirect to="/"/>
    ) : (
        <div className="login-form">
            {errorMessage &&
            <Message negative>
                <Message.Header>Unable to login</Message.Header>
                <p>{errorMessage}</p>
            </Message>
            }
            <Grid
                style={{height: "100%"}}
                centered
            >
                <LoginForm login={firebaseLogin} onSubmit={onSubmitLogin}/>
            </Grid>
        </div>
    );
};

export default LoginComponent;