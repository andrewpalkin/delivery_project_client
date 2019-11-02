import React from "react";
import { Redirect } from "react-router-dom";
import SignupForm from "./signup.Form";

const Signup = props => {
    const {user: {id}} = props;
    return id ? (
        <Redirect to="/login" />
    ) : (
        <SignupForm onSubmit={values => props.signup(values)} />
    );
};

export default Signup;