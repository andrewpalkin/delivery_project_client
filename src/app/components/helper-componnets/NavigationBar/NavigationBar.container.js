import {connect} from "react-redux";
import NavigationBarComponent from "./NavigationBar.component";

const mapStateToProps = state => {
    return {
        error: state.auth.errors,
        isSign: state.auth.isSign
    };
};

const NavigationBarContainer = connect(
    mapStateToProps
)(NavigationBarComponent);

export default NavigationBarContainer;