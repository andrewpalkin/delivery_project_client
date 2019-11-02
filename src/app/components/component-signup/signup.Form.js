import React from "react";
import PropTypes from 'prop-types';
import {Button, Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import {requiredCommonValdation} from '../../utils/FormFieldValidator';

import {Field, reduxForm} from "redux-form";

import {default as renderInput} from "../../renders/renderInput";

const SignupForm = props => {
    const { handleSubmit, pristine, submitting } = props
    return (
        <div className="signup-form">
            {/*
              Heads up! The styles below are necessary for the correct render of this example.
              You can do same with CSS, the main idea is that all the elements up to the `Grid`
              below must have a height of 100%.
            */}
            <style>{`
                  body > div,
                  body > div > div,
                  body > div > div > div.signup-form {
                    height: 100%;
                }
               `}</style>
            <Grid
                textAlign="center"
                style={{height: "100%"}}
                verticalAlign="middle"
            >
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as="h2" color="teal" textAlign="center">
                        Sign up
                    </Header>
                    {/* {exeption && exeption.error && (
                        <Message negative>
                            <Message.Header>qweqweqwe</Message.Header>                            
                        </Message>
                        )
                    } */}
                    <Form size="large" onSubmit={handleSubmit}>
                        <Segment stacked>
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
                            <Button color="teal" fluid size="large" primary loading={submitting} disabled={pristine || submitting}>Sign up</Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an account? <a href="http://google.com">Log in</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
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