import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Landing from './views/landing/Landing';
import Login from './views/login/Login';
import Home from './views/home/Home';
import Profile from './views/profile/Profile';

import * as serviceWorker from './serviceWorker';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
      render={(props) => (
        localStorage.getItem('Token')
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
  )} />
)

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/profile/:id" component={Profile} />
      <Route component={Landing} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
