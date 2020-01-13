import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { ProtectedRoute } from './shared/components/ProtectedRoute';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';
import * as ROUTES from './constants/routes';

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path={ROUTES.HOME}
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.session.isAuthenticated,
    isVerifying: state.session.isVerifying
  };
}

export default connect(mapStateToProps)(App);
