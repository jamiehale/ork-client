import React from 'react';
import Campaigns from './components/Campaigns';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const Home = () => (
  <div>Home</div>
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/campaigns">Campaigns</Link></li>
      </ul>
    </div>
    <Switch>
      <Route path="/campaigns">
        <Campaigns />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
