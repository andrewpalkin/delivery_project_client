import React from "react";
import {Button, Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {requiredCommonValdation} from '../../utils/FormFieldValidator';
import renderInput from "../../renders/renderInput";

const LoginForm = props => {
    const {handleSubmit, pristine, submitting, login} = props;
    return (
        <Grid.Column style={{maxWidth: 450}}>
            <Header as="h2" color="teal" textAlign="center">
                Login
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
                    <Button color="teal" fluid size="large" primary loading={submitting}
                            disabled={pristine || submitting}>Login</Button>
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