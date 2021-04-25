import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";
import useAuth from '../hooks/auth';

const PrivateRoute = ({
  component: Component,
  path,
  ...rest
}) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      path={path}
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/app/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
