import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Button, Form, Grid, Header, Icon, Message, Segment} from "semantic-ui-react";
import {requiredCommonValdation} from "../../utils/FormFieldValidator";

import {Field, reduxForm} from "redux-form";

import {default as renderInput} from "../../renders/renderInput";

const renderRadio = field => (
    <Form.Radio
        checked={field.input.value === field.radioValue}
        label={field.label}
        name={field.input.name}
        onChange={() => field.input.onChange(field.radioValue)}
    />
);


let SignupForm = props => {
    const {handleSubmit, pristine, submitting, signup} = props;
    return (
        <Grid.Column
            style={{maxWidth: 480}}
        >
            <Header as="h2" color="teal" textAlign="center">
                Sign up
            </Header>
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
                    <Form.Group inline>
                        <label>Gender</label>

                        <Field
                            component={renderRadio}
                            label="Female"
                            name="radioGender"
                            value='1'
                            radioValue={1}
                        />
                        <Field
                            component={renderRadio}
                            label="Male"
                            name="radioGender"
                            value='2'
                            radioValue={2}
                        />
                        <Field
                            component={renderRadio}
                            label="Other"
                            name="radioGender"
                            value='3'
                            radioValue={3}
                        />
                    </Form.Group>
                    <Form.Checkbox inline label='I agree to the Terms and Conditions'/>
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
                <Message attached='bottom' style={{textAlign: "center"}}>
                    Already have an account? <Link to="/login">Log in</Link>
                </Message>
                <Message info icon>
                    <Icon name='info'/>
                    <Message.Content>
                        <Message.Header>Policy Agreements</Message.Header>
                        By clicking Sign Up you agree to our Terms, Data Policy, and Cookies Policy, you may receive
                        Notification from us and can opt out any time.
                    </Message.Content>
                </Message>
            </Form>
        </Grid.Column>
    );
};

SignupForm.propTypes = {
    handleSubmit: PropTypes.func,
    reset: PropTypes.func,
    onSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
};

SignupForm = reduxForm({
    form: "signupForm",
    validate: requiredCommonValdation
})(SignupForm);

export default SignupForm;