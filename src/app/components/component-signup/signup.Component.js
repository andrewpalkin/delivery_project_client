import React from "react";
import {Redirect} from "react-router-dom";
import {Grid} from "semantic-ui-react";
import SignupForm from "./signup.Form";
import {MessageBox} from '../helper-componnets';
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirebase} from 'react-redux-firebase'

const onSubmitSignup = () => {
};

const Signup = () => {
    const firebase = useFirebase();    
    const firebaseSignin = (payload)  => {
        return firebase.createUser({email: payload.email, password: payload.password})
    }
    const auth = useSelector(state => state.firebase.auth)
    return (isLoaded(auth) && !isEmpty(auth)) ? (
        <Redirect to="/login"/>
    ) : (
        <div className="signup-form">
            <MessageBox/>
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
                <SignupForm signup={firebaseSignin} onSubmit={onSubmitSignup}/>
            </Grid>
        </div>
    );
};

export default Signup;