import React, {Component} from 'react';
import styles from "./style.css.js";

import NavBarMenuComponent from "./NavBarMenu.component";

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuFixed: false,
            overlayFixed: false,
            activeItem: "app",
            menuStyle: styles.fixedMenuStyleWithoutShadow
        };
    }    

    setShadowMenu = () => {
        console.log(styles.fixedMenuStyleWithShadow);
        this.setState({menuStyle: styles.fixedMenuStyleWithShadow});
    };

    unSetShadowMenu = () => {
        console.log(styles.fixedMenuStyleWithoutShadow);
        this.setState({menuStyle: styles.fixedMenuStyleWithoutShadow});
    };   

    render() {
        const {
            activeItem,
            menuFixed,
            menuStyle
        } = this.state;
        const {isLogin, logoutHandler} = this.props;
        return (
            <NavBarMenuComponent
                isSign={isLogin}
                menuFixed={menuFixed}
                handleItemClick={this.handleItemClick}
                activeItem={activeItem}
                menuStyle={menuStyle}
                user={this.props.user}
                setShadowMenu={this.setShadowMenu}
                unSetShadowMenu={this.unSetShadowMenu}
                logoutHandler={logoutHandler}
                >
            </NavBarMenuComponent>
        )
    }
}

export default NavigationBar;