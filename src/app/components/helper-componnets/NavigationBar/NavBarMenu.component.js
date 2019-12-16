import React from "react";
import {Link} from "react-router-dom";
import {Dropdown, Header, Menu, Visibility} from "semantic-ui-react";
import {useSelector} from 'react-redux'
import {isEmpty, isLoaded} from 'react-redux-firebase'
import NavBarLoginSignUpButtons from "./NavBarLoginSignUpButtons";
import NavBarSignOutButtons from "./NavBarSignOutButtons";

const NavBarMenuComponent = (props) => {
    const auth = useSelector(state => state.firebase.auth);
    const isAuth = isLoaded(auth) && !isEmpty(auth);
    const languageOptions = [
        {key: 'us', value: 'us', flag: 'us', text: 'English'},
        {key: 'ru', value: 'ru', flag: 'ru', text: 'Russian'},
        {key: 'il', value: 'il', flag: 'il', text: 'Hebrew'}
    ];

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
                        <Menu.Item>
                            <Dropdown
                                fluid
                                floating
                                options={languageOptions}
                                defaultValue={languageOptions[0].value}
                            />
                        </Menu.Item>
                        <Menu.Item>
                            {isAuth ? (
                                    <NavBarSignOutButtons/>
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
