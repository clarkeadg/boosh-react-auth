'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Login = require('./Containers/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Signup = require('./Containers/Signup');

var _Signup2 = _interopRequireDefault(_Signup);

var _ForgotPassword = require('./Containers/ForgotPassword');

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

var _ResetPassword = require('./Containers/ResetPassword');

var _ResetPassword2 = _interopRequireDefault(_ResetPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Redirects to /login by default
/*const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.me.token, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  failureRedirectPath: '/login',
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})

const Authenticated = UserIsAuthenticated((props) => props.children);*/

//import { routerActions } from 'react-router-redux'
//import { UserAuthWrapper } from 'redux-auth-wrapper'

exports.default = function () {
  var routes = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/' },
    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _Login2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'signup', gcomponent: _Signup2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'forgot-password', component: _ForgotPassword2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'reset-password', component: _ResetPassword2.default })
  );
  return routes;
};