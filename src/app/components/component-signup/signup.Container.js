import { connect } from "react-redux";
import SignUpMainComponent from "./signup.Component";
import { authOperations } from "../../apis/auth-api";

const mapStateToProps = state => {
    return {                
        singUp: state.auth.singUp
    };
};

const mapDispatchToProps = dispatch => {
    const signup = signupPayload => {              
        dispatch(authOperations.signupOperation(signupPayload));
    };

    return {
        signup
    };
};

const SignUpMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpMainComponent);

export default SignUpMainContainer;