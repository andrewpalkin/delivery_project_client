import React, { Component } from 'react';
import Constants from '../../services/utils/Google/google';
import ProfileContainer from '../../components/component-profile';

class HomePage extends Component {
  componentDidMount() {
    window.gtag('config', Constants.GA_TRACKING_ID, {
      'page_title': 'React App',
      'page_path': '/profile'
    });
  }

  render() {
    return (
        <ProfileContainer/>
    );
  }
}

export default HomePage;