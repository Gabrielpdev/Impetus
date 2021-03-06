import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import DashBoard from '../pages/DashBoard';
import Candidates from '../pages/Candidates';
import Status from '../pages/Candidates/Status';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/cadastro" component={SignIn} />
    <Route path="/dashboard" component={DashBoard} />
    <Route path="/candidates" exact component={Candidates} />
    <Route path="/candidates/:id" component={Status} />
  </Switch>
);

export default Routes;
