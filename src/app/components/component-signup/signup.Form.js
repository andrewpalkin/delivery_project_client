import React from "react";
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Button, Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import {requiredCommonValdation} from "../../utils/FormFieldValidator";

import {Field, reduxForm, formValueSelector } from "redux-form";

import {default as renderInput} from "../../renders/renderInput";

const renderRadio = field => (
    <Form.Radio
        checked={field.input.value === field.radioValue}
        label={field.label}
        name={field.input.name}
        onChange={() => field.input.onChange(field.radioValue)}
    />
);

const renderSelect = (field,{...props}) => (
    <Form.Select
      label={field.label}
      name={field.input.name}
      onChange={(e, { value }) => field.input.onChange(value)}
      options={field.options}
      placeholder={field.placeholder}
      value={field.input.value}
    />
  );

let SignupForm = props => {
    const {handleSubmit, pristine, submitting, signup, isGenderFree} = props;     
    return (
        <Grid.Column style={{maxWidth: 480}}>
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
                            label="Custom"
                            name="radioGender"
                            value='3'
                            radioValue={3}
                        />
                        </Form.Group>   
                        {
                            isGenderFree === 3 && (
                                <Form.Group>
                                    <Field
                                        component={renderSelect}                            
                                        name="gender"
                                        options={[
                                            { key: "m", text: "She", value: "she" },
                                            { key: "f", text: "He", value: "He" },
                                            { key: "t", text: "They", value: "They" }
                                        ]}
                                        placeholder="Gender"
                                    />
                                </Form.Group>           
                            )
                        }                         
                             <Message 
                                compact
                                info={true}
                                icon='inbox'
                                header='Policy Aggrements'
                                content='By clicking Sign Up you agree to our Terms, Data Policy, and Cookies Policy, you may receive Notification from us and can opt out any time' 
                             />  
                              <Form.Checkbox label='I agree to the Terms and Conditions' />                                                                                                                               
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

const selector = formValueSelector('signupForm') // <-- same as form name

SignupForm = connect(
    state => {
        const isGenderFree = selector(state, 'radioGender');
        return {
            isGenderFree
        }
    }
)(SignupForm)

export default SignupForm;