import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExitToApp from '@material-ui/icons/ExitToApp';

import AppDrawerMenu from './AppDrawerMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <AppDrawerMenu buttonStyle={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            {'Chanti.co'}
          </Typography>
          <Button color="inherit" startIcon={<ExitToApp />}>
            {'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
