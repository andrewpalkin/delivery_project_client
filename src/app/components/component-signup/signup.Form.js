import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Container,
  Header,
  Message,
  Segment,
  Grid
} from "semantic-ui-react";
import { requiredCommonValdation } from "../../utils/FormFieldValidator";

import { Field, reduxForm } from "redux-form";

import { default as renderInput } from "../../renders/renderInput";

const SignupForm = props => {
  const { handleSubmit, pristine, submitting, signup } = props;
  return (
    <Fragment>
      <Grid verticalAlign="middle" textAlign="center">
        <Header as="h2" color="teal" textAlign="center">
          Sign up
        </Header>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 480 }}>
            <Form size="large" onSubmit={handleSubmit(signup)}>
              <Segment>
                <Form.Group>
                  <Field
                    component={renderInput}
                    name="firstName"
                    icon="user"
                    iconPosition="left"
                    placeholder="First Name"
                  />
                  <Field
                    component={renderInput}
                    name="lastName"
                    icon="user"
                    iconPosition="left"
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Field
                  component={renderInput}
                  name="email"
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Field
                  component={renderInput}
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Field
                  component={renderInput}
                  type="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password Confirmation"
                  name="passwordConfirmation"
                />
                <Button
                  color="teal"
                  fluid
                  size="large"
                  primary
                  loading={submitting}
                  disabled={pristine || submitting}
                >
                  Sign up
                </Button>
              </Segment>
              <Message>
                Already have an account? <Link to="/login">Log in</Link>
              </Message>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  onSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: "signupForm",
  validate: requiredCommonValdation
})(SignupForm);
