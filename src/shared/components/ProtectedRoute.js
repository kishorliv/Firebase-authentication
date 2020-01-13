import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isVerifying ? (
        <div />
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: ROUTES.SIGN_IN,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export { ProtectedRoute };
