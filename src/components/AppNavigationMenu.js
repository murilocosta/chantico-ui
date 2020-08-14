import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LabelIcon from '@material-ui/icons/Label';

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

export default function AppNavigationMenu({ toggleDrawerMenu }) {
  const classes = useStyles();

  const handleToggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    toggleDrawerMenu(open);
  };

  return (
    <div
      className={classes.list}
      onClick={handleToggleDrawer(false)}
      onKeyDown={handleToggleDrawer(false)}
    >
      <List>
        <ListItem button component={RouterLink} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component={RouterLink} to="/categories">
          <ListItemIcon><LabelIcon /></ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
      </List>
    </div>
  );
}
