import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HomePage from './pages/page-home/home.Page';
import SignUpPage from './pages/page-signup/signup.Page';
import SigninPage from './pages/page-signin/signin.Page';
import NavigationBar from './components/helper-components/NavigationBar/NavigationBar.component';
import ProfilePage from './pages/page-profile/profile.Page';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <NavigationBar/>
            <Container style={{ marginTop: '100px', minHeight: '85vh' }}>
              <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/signup" element={<SignUpPage/>}/>
                <Route exact path="/login" element={<SigninPage/>}/>
                <Route exact path="/profile" element={<ProfilePage/>}/>
              </Routes>
            </Container>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;