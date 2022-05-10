import React from 'react';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

const NavBarSignOutButtons = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const firebaseLogout = () => {
    return firebase.logout();
  };

  const profileButton = () => {
    navigate('/profile');
  };

  const options = [
    {
      key: 'usersigned',
      text: (
          <span>
             Signed in as <strong>Bob Smith</strong>
          </span>
      ),
      disabled: true
    },
    { key: 'user', text: 'Profile', icon: 'user', onClick: profileButton },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: firebaseLogout }
  ];

  const trigger = (
      <span>
          <Image avatar src={'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'}/> {'user'}
      </span>
  );

  return (
      <>
        <Menu.Item
            name="logout"
            onClick={(ev) => firebaseLogout(ev)}
        >
          <Dropdown
              trigger={trigger}
              options={options}
              pointing="top left"
              icon={null}
          />
        </Menu.Item>
      </>
  );
};

export default NavBarSignOutButtons;
