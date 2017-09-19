
import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
//import { routerActions } from 'react-router-redux'
//import { UserAuthWrapper } from 'redux-auth-wrapper'

import Login from './Containers/Login'
import Signup from './Containers/Signup'
import ForgotPassword from './Containers/ForgotPassword'
import ResetPassword from './Containers/ResetPassword'

// Redirects to /login by default
/*const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.me.token, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  failureRedirectPath: '/login',
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})

const Authenticated = UserIsAuthenticated((props) => props.children);*/

export default () => {
  const routes = (
    <Route path="/">
      <Route path="login" component={Login} />
      <Route path="signup" gcomponent={Signup} />
      <Route path="forgot-password" component={ForgotPassword} />
      <Route path="reset-password" component={ResetPassword} />
    </Route>
  );
  return routes;
};
