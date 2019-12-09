import React from "react";
import {Menu} from "semantic-ui-react";

const NavBarSignOutButtons = ({logoutHandler}) => {
    return (
        <>
            <Menu.Item
                
                name="logout"                
                onClick={(ev) => logoutHandler(ev)}
            >
                Logout
            </Menu.Item>           
        </>
    );
};

export default NavBarSignOutButtons;
