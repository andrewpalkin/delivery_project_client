import React from "react";
import { Redirect } from "react-router-dom";
import SignupForm from "./signup.Form";

const onSubmitLogin = () => {};

const Signup = props => {
    const {user: {id}} = props;
    return id ? (
        <Redirect to="/" />
    ) : (
        <SignupForm signup={props.signup} onSubmit={onSubmitLogin} />
    );
};

export default Signup;