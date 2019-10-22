import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./login.form";

const onSubmitLogin = () => {};

const Login = props => {
    return props.loggedIn ? (
        <Redirect to="/home" />
    ) : (
        <LoginForm login={props.login} onSubmit={onSubmitLogin} />
    );
};

export default Login;