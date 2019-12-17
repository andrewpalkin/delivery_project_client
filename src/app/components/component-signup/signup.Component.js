import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Grid, Message, Container } from "semantic-ui-react";
import SignupForm from "./signup.Form";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded, useFirebase } from "react-redux-firebase";

const onSubmitSignup = () => {};

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const firebase = useFirebase();
  const firebaseSignin = payload => {
    firebase
      .createUser({ email: payload.email, password: payload.password })
      .then()
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  const auth = useSelector(state => state.firebase.auth);

  return isLoaded(auth) && !isEmpty(auth) ? (
    <Redirect to="/login" />
  ) : (
    <Container style={{ maxWidth: 450 }}>
      {errorMessage && (
        <Message negative>
          <Message.Header>Sign up Error</Message.Header>
          <p>{errorMessage}</p>
        </Message>
      )}
      <SignupForm signup={firebaseSignin} onSubmit={onSubmitSignup} />
    </Container>
  );
};

export default Signup;
