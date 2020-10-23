import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';
import Repostiory from '../pages/Repository/index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repository" component={Repostiory} />
    </Switch>
  );
};

export default Routes;
