import React from "react";
import {Button, Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";
import {requiredCommonValdation} from '../../utils/FormFieldValidator';
import renderInput from "../../renders/renderInput";
import {Link} from "react-router-dom";

const LoginForm = props => {
    const {handleSubmit, submitting, login} = props;
    return (
        <Grid.Column style={{maxWidth: 450}}>
            <Header as="h2" color="teal" textAlign="center">
                Log-in to your account
            </Header>
            <Form size="large" onSubmit={handleSubmit(login)}>
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
                    <Button color="teal" fluid size="large" primary loading={submitting}>Login</Button>
                </Segment>
            </Form>
            <Message>
                New to us? <Link to="/signup">Sign Up</Link>
            </Message>
        </Grid.Column>
    );
};

export default reduxForm({
    form: "loginForm",
    validate: requiredCommonValdation
})(LoginForm);