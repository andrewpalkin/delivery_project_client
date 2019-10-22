import React from "react";
import { Redirect } from "react-router-dom";
import SignupForm from "./signup.Form";

const onSubmitLogin = () => {};

const Signup = props => {
    return props.singUp ? (
        <Redirect to="/" />
    ) : (
        <SignupForm signup={props.signup} onSubmit={onSubmitLogin} />
    );
};

export default Signup;