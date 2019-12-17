import React, {Component} from "react";
import Constants from "../../services/utils/Google/google";

class HomePage extends Component {
    render() {
        window.gtag('config', Constants.GA_TRACKING_ID, {
            'page_title': 'React App',
            'page_path': '/'
        });
        return (
            <div style={{height: 1200}}>Home Page</div>
        );
    }
}

export default HomePage;