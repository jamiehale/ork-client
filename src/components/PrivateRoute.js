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
  const { isSignedIn } = useAuth();

  return (
    <Route
      path={path}
      {...rest}
      render={props =>
        isSignedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/app/sign-in",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
