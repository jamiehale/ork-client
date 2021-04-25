import React from 'react';
import Campaigns from './components/Campaigns';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import NavMenu from './components/NavMenu';

const App = () => (
  <>
    <NavMenu />
    <Switch>
      <PrivateRoute path="/app/campaigns" component={Campaigns} />
      <PrivateRoute path="/app/home" component={Home} />
      <Route exact path="/app/login" component={Login} />
      <Route exact path="/app">
        <Redirect to="/app/home" />
      </Route>
      <Route exact path="/" >
        <Redirect to="/app/home" />
      </Route>
    </Switch>
  </>
);

export default App;
