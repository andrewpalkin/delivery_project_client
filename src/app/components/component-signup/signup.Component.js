import React from "react";
import { Redirect } from "react-router-dom";
import SignupForm from "./signup.Form";

const onSubmitSignup = () => {};

const Signup = props => {
    const {user: {id}} = props;
    return id ? (
        <Redirect to="/login" />
    ) : (
        <SignupForm signup={props.signup} onSubmit={onSubmitSignup}  />
    );
};

export default Signup;