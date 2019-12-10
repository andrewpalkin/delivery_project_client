import React from "react";
import {Redirect} from "react-router-dom";
import {Grid} from "semantic-ui-react";
import LoginForm from "./login.form";
import {MessageBox} from '../helper-componnets';
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirebase} from 'react-redux-firebase'

const onSubmitLogin = () => {
};

const Login = () => {
    const firebase = useFirebase();    
    const firebaseLogin = (payload)  => {
        return firebase.login({email: payload.email, password: payload.password})
    }
    const auth = useSelector(state => state.firebase.auth)


    return (isLoaded(auth) && !isEmpty(auth)) ? (
        <Redirect to="/"/>
    ) : (
        <div className="signup-form">
            <MessageBox error={'true'} message={'Need to verify email'}/>
            {/*
              Heads up! The styles below are necessary for the correct render of this example.
              You can do same with CSS, the main idea is that all the elements up to the `Grid`
              below must have a height of 100%.
            */}
            <style>{`
                  body > div,
                  body > div > div,
                  body > div > div > div.signup-form {
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