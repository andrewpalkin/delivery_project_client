import React from "react";
import {Link} from "react-router-dom";
import {Button, Dropdown, Header, Menu, Visibility} from "semantic-ui-react";

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
                            {
                                props.user.loggedIn ?
                                    <Button primary>User Name</Button>
                                    :
                                    <Button primary>Sign Up</Button>
                            }
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        </Visibility>
    );
};

export default NavBarMenuComponent;
