import {connect} from "react-redux";
import NavigationBarComponent from "./NavigationBar.component";
import operations from "../../../apis/auth-api/operations";


const mapStateToProps = state => {
    return {
        error: state.auth.errors,
        isSign: state.auth.isSign
    };
};

const mapDispatchToProps = dispatch => {
    const logoutAction = () => {
        dispatch(operations.signOutOperation());
    }
    return {
        logoutHandler: logoutAction
    }

}

const NavigationBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationBarComponent);

export default NavigationBarContainer;