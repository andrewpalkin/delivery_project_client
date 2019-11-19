import { connect } from "react-redux";
import NavigationBarComponent from "./NavigationBar.component";

const mapStateToProps = state => {    
    return {                
        error: state.auth.errors,
        user: state.auth.user,
    };
};


const NavigationBarContainer = connect(
    mapStateToProps,
    null
)(NavigationBarComponent);

export default NavigationBarContainer;