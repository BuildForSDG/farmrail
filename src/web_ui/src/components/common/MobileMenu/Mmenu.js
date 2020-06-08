import React from 'react';
import { mobileMenuId } from '../Globals';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PropTypes from 'prop-types';

export default function MMenu(props) {
  const { loginclick, logoutclick, mobileAnchor, isMenuOpen, menuClose, isAuthenticated } = props;

  return (
    <Menu
      anchorEl={mobileAnchor}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={menuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 0 new mails" color="inherit">
          <Badge badgeContent={1} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 0 new notifications" color="inherit">
          <Badge badgeContent={1} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      {!isAuthenticated && <MenuItem onClick={loginclick}>
        <IconButton
          aria-label="login user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Login</p>
      </MenuItem>
      }
      {isAuthenticated && <MenuItem onClick={logoutclick}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
      }
    </Menu>
  );
}

MMenu.propTypes = {
  loginclick: PropTypes.func.isRequired,
  logoutclick: PropTypes.func.isRequired,
  mobileAnchor: PropTypes.element,
  isMenuOpen: PropTypes.bool.isRequired,
  menuClose: PropTypes.func.isRequired
}