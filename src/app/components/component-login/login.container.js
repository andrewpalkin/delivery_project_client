import {connect} from "react-redux";
import LoginMainComponent from "./login.component";
import {authOperations} from "../../apis/auth-api";
import {default as SS} from '../../services/utils/sessionStorage';

const mapStateToProps = state => {
    return {
        user: state.auth.user || SS.getItem('user'),
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