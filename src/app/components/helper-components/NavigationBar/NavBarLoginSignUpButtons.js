import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavBarLoginSignUpButtons = () => {
  return (
      <>
        <Menu.Item
            as={Link}
            name="login"
            to="/login"
        >
          Login
        </Menu.Item>
        <Menu.Item
            as={Link}
            name="signup"
            to="/signup"
        >
          Sign Up
        </Menu.Item>
      </>
  );
};

export default NavBarLoginSignUpButtons;
