import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import AppHome from './AppHome';
import CategoryManager from './Category/CategoryManager';

const useStyle = makeStyles({
  main: {
    margin: 10
  }
});

export default function AppContent() {
  const classes = useStyle();

  return (
    <div className={classes.main}>
      <Switch>
        <Route path="/categories">
          <CategoryManager />
        </Route>
        <Route path="/">
          <AppHome />
        </Route>
      </Switch>
    </div>
  );
}
