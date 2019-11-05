import { connect } from "react-redux";
import MessageBoxComponent from "./MessageBox.component";

const mapStateToProps = state => {    
    return {                
        error: true,
        message: 'Error',        
    };
};


const MessageBoxContainer = connect(
    mapStateToProps,
    null
)(MessageBoxComponent);

export default MessageBoxContainer;