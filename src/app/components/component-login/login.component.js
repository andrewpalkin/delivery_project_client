import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./login.form";


const Login = props => {
    return props.loggedIn ? (
        <Redirect to="/home" />
    ) : (
        <LoginForm onSubmit={values => props.login(values)} />
    );
};

export default Login;