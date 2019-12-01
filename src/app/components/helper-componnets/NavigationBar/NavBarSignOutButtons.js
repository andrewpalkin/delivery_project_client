import React from "react";
import {Link} from "react-router-dom";
import {Menu} from "semantic-ui-react";

const NavBarSignOutButtons = () => {
    return (
        <>
            <Menu.Item
                as={Link}
                name="logout"
                to="/home"
            >
                Logout
            </Menu.Item>           
        </>
    );
};

export default NavBarSignOutButtons;
