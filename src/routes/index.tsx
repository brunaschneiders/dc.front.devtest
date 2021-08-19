import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import { AlbumsList, PhotosList, UserDetails, UsersList } from '../pages';

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/usuarios' />
        <Route exact path='/usuarios' component={UsersList} />
        <Route exact path='/usuarios/:userId' component={UserDetails} />
        <Route exact path='/usuarios/:userId/albums' component={AlbumsList} />
        <Route
          exact
          path='/usuarios/:userId/albums/:albumId'
          component={PhotosList}
        />
      </Switch>
    </BrowserRouter>
  );
};
