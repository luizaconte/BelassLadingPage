import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Route from './Route';

const Routes: React.FC = () => {
  const routes = (
    <Switch>
      <Route component={Dashboard} path="/" exact />
    </Switch>
  );

  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default Routes;
