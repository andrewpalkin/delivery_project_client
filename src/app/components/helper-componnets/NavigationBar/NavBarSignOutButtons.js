import React from "react";
import {Menu, Dropdown, Image} from "semantic-ui-react";
import {useHistory} from "react-router-dom";
import { useFirebase} from 'react-redux-firebase'

const NavBarSignOutButtons = () => {
    const firebase = useFirebase();    
    let history = useHistory();
    const firebaseLogout = ()  => {
        return firebase.logout()
    }

    const profileButton = () => {
       history.push("/profile")
    }    
    const options = [
        {
            key: 'usersigned',
            text: (
              <span>
                Signed in as <strong>Bob Smith</strong>
              </span>
            ),
            disabled: true,
          },
        { key: 'user', text: 'Profile', icon: 'user', onClick: profileButton},
        { key: 'settings', text: 'Settings', icon: 'settings' },
        { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: firebaseLogout},
      ]

      const trigger = (
        <span>
          <Image avatar src={"https://react.semantic-ui.com/images/avatar/small/elliot.jpg"} /> {'user'}
        </span>
      )
            
    return (
        <>
            <Menu.Item
                
                name="logout"                
                onClick={(ev) => firebaseLogout(ev)}
            >            
                <Dropdown
                    trigger={trigger}
                    options={options}
                    pointing='top left'
                    icon={null}
  />
            </Menu.Item>    
            {/* <div className="ui dropdown item" tabindex="0">
                            <img className="ui mini circular image" src="img/avatar/people/enid.png" alt="label-image" />
                            <div className="menu left transition hidden" tabindex="-1">
                                <a className="item" href="mail.html">Inbox</a>
                                <a className="item" href="profile.html">Profile</a>
                                <a className="item" href="settings.html">Settings</a>
                                <div className="ui divider"></div>
                                <a className="item">Need Help?</a>
                                <a className="item" href="login.html">Sign Out</a>
                            </div>
    </div>        */}
        </>
    );
};

export default NavBarSignOutButtons;
