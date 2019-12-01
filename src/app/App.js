import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "semantic-ui-react";
import HomePage from "./pages/page-home/home.Page";
import SignUpPage from "./pages/page-signup/signup.Page";
import SigninPage from "./pages/page-signin/signin.Page";
import NavigationBar from "./components/helper-componnets/NavigationBar/NavigationBar.container";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavigationBar/>
                    <Container style={{marginTop: "100px", minHeight: "85vh"}}>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/signup" component={SignUpPage}/>
                            <Route exact path="/login" component={SigninPage}/>
                        </Switch>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;