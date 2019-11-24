import React from 'react';

const FirebaseContext = React.createContext(null);
/* eslint-disable   no-unused-expressions */

export const hopComponent = WrappedComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.data = {data: "1"}
        }

        render() {
            return <WrappedComponent data={this.data} {...this.props}/>
        }
    }
};

export const withFirebase = Component => props => {
    return (
        <FirebaseContext.Consumer>
            {firebase => <Component {...props} firebase={firebase}/>}
        </FirebaseContext.Consumer>
    )

};

export default FirebaseContext;