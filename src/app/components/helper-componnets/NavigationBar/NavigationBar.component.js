import React, {Component} from 'react';
import {Button, Dropdown, Menu} from 'semantic-ui-react'

export default class NavigationBar extends Component {

    render() {
        const {user} = this.props;

        return (
            <Menu size='tiny'>
                <Menu.Item
                    name='home'
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='messages'
                    onClick={this.handleItemClick}
                />

                <Menu.Menu position='right'>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item>
                        {
                            user.loggedIn ?
                                <Button primary>User Name</Button>
                                :
                                <Button primary>Sign Up</Button>
                        }
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}