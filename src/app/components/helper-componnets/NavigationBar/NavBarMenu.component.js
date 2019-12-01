import React from "react";
import {Link} from "react-router-dom";
import {Dropdown, Header, Menu, Visibility} from "semantic-ui-react";

import NavBarLoginSignUpButtons from "./NavBarLoginSignUpButtons";

const NavBarMenuComponent = props => {
    return (
        <Visibility
            onBottomPassed={props.setShadowMenu}
            onBottomVisible={props.unSetShadowMenu}
            once={false}
        >
            <div>
                <Menu borderless fixed="top" style={props.menuStyle}>
                    <Menu.Item
                        as={Link}
                        onClick={props.handleItemClick}
                    >
                        <Header>OUR APP HEADER</Header>
                    </Menu.Item>

                    <Menu.Menu position="right">
                        <Dropdown item text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item>
                            <NavBarLoginSignUpButtons/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        </Visibility>
    );
};

export default NavBarMenuComponent;
