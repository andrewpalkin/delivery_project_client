import React, {Component, Fragment} from "react";
import {Divider, Grid, Header, Image, Label, Menu, Table} from "semantic-ui-react";

import "./Profile.css";

class Profile extends Component {
    state = {
        dropdownMenuStyle: {
            display: "none"
        }
    };
    handleToggleDropdownMenu = () => {
        let newState = Object.assign({}, this.state);
        if (newState.dropdownMenuStyle.display === "none") {
            newState.dropdownMenuStyle = {display: "flex"};
        } else {
            newState.dropdownMenuStyle = {display: "none"};
        }

        this.setState(newState);
    };

    render() {
        return (
            <Fragment>
                <Grid padded>
                    <Grid.Column
                        tablet={3}
                        computer={3}
                        only="tablet computer"
                        id="sidebar"
                    >
                        <Menu vertical borderless fluid text>
                            <Menu.Item active as="a">Profile</Menu.Item>
                            <Menu.Item as="a">Reports</Menu.Item>
                            <Menu.Item as="a">Analytics</Menu.Item>
                            <Menu.Item as="a">Export</Menu.Item>
                            <Divider hidden/>
                            <Menu.Item as="a">Nav item</Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column
                        mobile={16}
                        tablet={13}
                        computer={13}
                        floated="right"
                        id="content"
                    >
                        <Grid padded>
                            <Grid.Row>
                                <Header dividing size="huge" as="h1">
                                    Dashboard
                                </Header>
                            </Grid.Row>
                            <Grid.Row textAlign="center">
                                <Grid.Column mobile={8} tablet={4} computer={4}>
                                    <Image
                                        centered
                                        circular
                                        size="small"
                                        src="/static/images/wireframe/square-image.png"
                                    />
                                    <Label basic size="large">
                                        Label
                                    </Label>
                                    <p>Something else</p>
                                </Grid.Column>
                                <Grid.Column mobile={8} tablet={4} computer={4}>
                                    <Image
                                        centered
                                        circular
                                        size="small"
                                        src="/static/images/wireframe/square-image.png"
                                    />
                                    <Label basic size="large">
                                        Label
                                    </Label>
                                    <p>Something else</p>
                                </Grid.Column>
                                <Grid.Column mobile={8} tablet={4} computer={4}>
                                    <Image
                                        centered
                                        circular
                                        size="small"
                                        src="/static/images/wireframe/square-image.png"
                                    />
                                    <Label basic size="large">
                                        Label
                                    </Label>
                                    <p>Something else</p>
                                </Grid.Column>
                                <Grid.Column mobile={8} tablet={4} computer={4}>
                                    <Image
                                        centered
                                        circular
                                        size="small"
                                        src="/static/images/wireframe/square-image.png"
                                    />
                                    <Label basic size="large">
                                        Label
                                    </Label>
                                    <p>Something else</p>
                                </Grid.Column>
                            </Grid.Row>
                            <Divider section hidden/>
                            <Grid.Row>
                                <Header dividing size="huge" as="h1">
                                    Section title
                                </Header>
                            </Grid.Row>
                            <Grid.Row>
                                <Table singleLine striped selectable unstackable>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>#</Table.HeaderCell>
                                            <Table.HeaderCell>Header</Table.HeaderCell>
                                            <Table.HeaderCell>Header</Table.HeaderCell>
                                            <Table.HeaderCell>Header</Table.HeaderCell>
                                            <Table.HeaderCell>Header</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>1.001</Table.Cell>
                                            <Table.Cell>Lorem</Table.Cell>
                                            <Table.Cell>ipsum</Table.Cell>
                                            <Table.Cell>dolor</Table.Cell>
                                            <Table.Cell>sit</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>1,002</Table.Cell>
                                            <Table.Cell>amet</Table.Cell>
                                            <Table.Cell>consectetur</Table.Cell>
                                            <Table.Cell>adipiscing</Table.Cell>
                                            <Table.Cell>elit</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </Fragment>
        );
    }
}

export default Profile;