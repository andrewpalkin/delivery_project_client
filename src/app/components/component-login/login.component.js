import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {Grid, Message} from "semantic-ui-react";
import LoginForm from "./login.form";
import {useSelector} from 'react-redux'
import {isEmpty, isLoaded, useFirebase} from 'react-redux-firebase'

const onSubmitLogin = () => {
};

const Login = () => {
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

            {/*
              Heads up! The styles below are necessary for the correct render of this example.
              You can do same with CSS, the main idea is that all the elements up to the `Grid`
              below must have a height of 100%.
            */}
            <style>{`
                  body > div,
                  body > div > div,
                  body > div > div > div.login-form {
                    height: 100%;
                }
               `}</style>
            <Grid
                textAlign="center"
                style={{height: "100%"}}
                verticalAlign="middle"
            >
                <LoginForm login={firebaseLogin} onSubmit={onSubmitLogin}/>
            </Grid>
        </div>
    );
};

export default Login;