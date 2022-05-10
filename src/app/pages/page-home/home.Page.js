import React, { Component } from 'react';
import Constants from '../../services/utils/Google/google';

class HomePage extends Component {

  componentDidMount() {
    window.gtag('config', Constants.GA_TRACKING_ID, {
      'page_title': 'React App',
      'page_path': '/'
    });
  }

  render() {
    return (
        <div style={{ height: 1200 }}>Home Page</div>
    );
  }
}

export default HomePage;