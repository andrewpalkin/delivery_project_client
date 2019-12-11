import React from "react";
import {connect} from 'react-redux';

const authComponent = ChildComponent => {
    return class WrappedComponent extends React.Component {
           render () {
              const {auth, history} = this.props;
               if (auth.isLoaded && auth.isEmpty) {
                    return history.push("/")
               }
               return (                   
                   <ChildComponent {...this.props} />
               )
           }
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebaseReducer.auth
    }
}

export default connect(mapStateToProps)(authComponent);
