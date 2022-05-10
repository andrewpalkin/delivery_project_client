import React, { Component } from 'react';
import LoginMainContainer from '../../components/component-login';
import Constants from '../../services/utils/Google/google';

class LoginPage extends Component {
  componentDidMount() {
    window.gtag('config', Constants.GA_TRACKING_ID, {
      'page_title': 'React App',
      'page_path': '/login'
    });
  }

  render() {
    return (
        <LoginMainContainer/>
    );
  }
}

export default LoginPage;