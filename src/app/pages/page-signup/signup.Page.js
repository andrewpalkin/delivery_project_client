import React, { Component } from 'react';
import SignUpMainContainer from '../../components/component-signup';
import Constants from '../../services/utils/Google/google';

class SignUpPage extends Component {

  componentDidMount() {
    window.gtag('config', Constants.GA_TRACKING_ID, {
      'page_title': 'React App',
      'page_path': '/signup'
    });
  }

  render() {
    return (
        <SignUpMainContainer/>
    );
  }
}

export default SignUpPage;