import React, {Component} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Container} from "semantic-ui-react";
import SignUpPage from "./pages/page-signup/signup.Page";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Container style={{marginTop: "100px", minHeight: "85vh"}}>
                        <Switch>
                            <Route exact path="/signup" component={SignUpPage}/>
                            <Redirect to="/app"/>
                        </Switch>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;