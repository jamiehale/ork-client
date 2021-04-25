import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import NavMenu from './components/NavMenu';

const App = () => (
  <>
    <NavMenu />
    <Switch>
      <PrivateRoute path="/app/home" component={Home} />
      <Route exact path="/app/sign-in" component={SignIn} />
      <Route exact path="/app/sign-up" component={SignUp} />
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
