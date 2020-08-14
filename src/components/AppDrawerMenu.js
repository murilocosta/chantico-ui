import React from 'react';
import { connect } from 'react-redux';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { toggleDrawerMenu as toggleAction } from '../store/actions/navigation';
import { selectMenuOpen } from '../store/selectors/navigation';
import AppNavigationMenu from './AppNavigationMenu';

const AppDrawerMenu = ({ open, toggleDrawerMenu, buttonStyle }) => {
  return (
    <React.Fragment>
      <IconButton
        edge="start"
        color="inherit"
        className={buttonStyle}
        onClick={() => toggleDrawerMenu(true)}
      >
        <MenuIcon />
      </IconButton>


      <Drawer anchor="left" open={open} onClose={() => toggleDrawerMenu(false)}>
        <AppNavigationMenu toggleDrawerMenu={toggleDrawerMenu} />
      </Drawer>
    </React.Fragment>
  );
}

export default connect(selectMenuOpen, { toggleDrawerMenu: toggleAction })(AppDrawerMenu);
