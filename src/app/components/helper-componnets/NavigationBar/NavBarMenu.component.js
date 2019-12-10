import React from "react";
import {Link} from "react-router-dom";
import {Dropdown, Header, Menu, Visibility} from "semantic-ui-react";
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty} from 'react-redux-firebase'
import NavBarLoginSignUpButtons from "./NavBarLoginSignUpButtons";
import NavBarSignOutButtons from "./NavBarSignOutButtons";

const NavBarMenuComponent = (props) => {
    const auth = useSelector(state => state.firebase.auth);
    const isAuth = isLoaded(auth) && !isEmpty(auth);
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
                        to=''
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
                            {isAuth ? (
                                <NavBarSignOutButtons />
                            ) :
                            (
                                <NavBarLoginSignUpButtons/>
                            )
                        }
                            
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        </Visibility>
    );
};

export default NavBarMenuComponent;
