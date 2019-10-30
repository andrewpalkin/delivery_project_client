import React from "react";
import {Button, Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import classnames from 'classnames';

import {Field, reduxForm} from "redux-form";

import renderInput from "../../renders/renderInput";

const validate = values => {
    const errors = {};
    const requiredFields = ['email', 'password'];
    requiredFields.forEach(field => {
        if(!validate[field]) {
            errors[field] = 'Reqired'
        };
    })   
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    } 
    return errors
  }

const SignupForm = props => {
    const {handleSubmit, signup} = props;
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
                    <Form size="large" onSubmit={handleSubmit(signup)}>
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
                            <Button color="teal" fluid size="large">
                                Sign up
                            </Button>
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

export default reduxForm({
    form: "signupForm",
    validate                  
})(SignupForm);