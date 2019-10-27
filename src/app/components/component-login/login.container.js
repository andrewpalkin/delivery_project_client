import { connect } from "react-redux";
import LoginMainComponent from "./login.component";
import { authOperations } from "../../apis/auth-api";

const mapStateToProps = state => {
    return {                
        loggedIn: state.auth.loggedIn
    };
};

const mapDispatchToProps = dispatch => {
    const login = loginPayload => {                      
        dispatch(authOperations.loginOperation(loginPayload));
    };

    return {
        login
    };
};

const LoginMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginMainComponent);

export default LoginMainContainer;