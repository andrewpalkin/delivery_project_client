import {connect} from "react-redux";
import LoginMainComponent from "./login.component";
import {authOperations} from "../../apis/auth-api";

const mapStateToProps = state => {
    return {
        isSign: state.auth.isSign,
        error: state.auth.error,
    };
};

const mapDispatchToProps = dispatch => {
    const loginHandler = loginPayload => {
        dispatch(authOperations.loginOperation(loginPayload));
    };
    return {
        login: loginHandler
    };
};

const LoginMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginMainComponent);

export default LoginMainContainer;