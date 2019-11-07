import {connect} from "react-redux";
import SignUpMainComponent from "./signup.Component";
import {authOperations} from "../../apis/auth-api";

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    };
};

const mapDispatchToProps = dispatch => {
    const onSubmit = (payload) => {
        if (!!payload) {
            dispatch(authOperations.signupOperation(payload));
        }
    };
    return {
        signup: onSubmit
    };
};

const SignUpMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpMainComponent);

export default SignUpMainContainer;