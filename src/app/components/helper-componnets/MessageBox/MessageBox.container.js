import { connect } from "react-redux";
import MessageBoxComponent from "./MessageBox.component";

const mapStateToProps = state => {    
    return {                
        error: state.error,        
    };
};


const MessageBoxContainer = connect(
    mapStateToProps,
    null
)(MessageBoxComponent);

export default MessageBoxContainer;