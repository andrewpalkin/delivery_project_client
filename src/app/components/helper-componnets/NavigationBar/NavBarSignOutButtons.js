import React from "react";
import {Menu} from "semantic-ui-react";
import { useFirebase} from 'react-redux-firebase'

const NavBarSignOutButtons = () => {
    const firebase = useFirebase();    
    const firebaseLogout = ()  => {
        return firebase.logout()
    }    
    return (
        <>
            <Menu.Item
                
                name="logout"                
                onClick={(ev) => firebaseLogout(ev)}
            >
                Logout
            </Menu.Item>           
        </>
    );
};

export default NavBarSignOutButtons;
