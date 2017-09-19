'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _ACTION_HANDLERS;

var _Types = require('../Actions/Types');

var _Types2 = _interopRequireDefault(_Types);

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _reduxsauce = require('reduxsauce');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = exports.INITIAL_STATE = (0, _seamlessImmutable2.default)({
  id: null,
  username: null,
  email: null,
  photo: "https://diasp.eu/assets/user/default.png",
  token: null,
  errorCode: null,
  attempting: false
});

// login attempts
var attempt = function attempt(state, action) {
  return state.merge({ attempting: true });
};

var updated = function updated(state, action) {
  return state.merge({ attempting: false });
};

// successful logins
var success = function success(state, action) {
  //console.log('successful login',action)
  if (typeof window != "undefined") {
    window.localStorage.setItem('accessToken', action.payload.token);
    window.localStorage.setItem('username', action.payload.email);
  }
  return state.merge({
    attempting: false,
    errorCode: null,
    id: action.payload.id,
    username: action.payload.username,
    email: action.payload.email,
    photo: action.payload.photo,
    token: action.payload.token
  });
};

// login failure
var failure = function failure(state, action) {
  return state.merge({ attempting: false, errorCode: action.errorCode });
};

// logout
var logout = function logout(state, action) {
  if (typeof window != "undefined") {
    window.localStorage.setItem('accessToken', '');
  }
  return state.merge({
    id: null,
    username: null,
    email: null,
    photo: "https://diasp.eu/assets/user/default.png",
    token: null,
    errorCode: null,
    attempting: false
  });
};

// map our types to our handlers
var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, _Types2.default.LOGIN_REQUEST, attempt), (0, _defineProperty3.default)(_ACTION_HANDLERS, _Types2.default.LOGIN_SUCCESS, success), (0, _defineProperty3.default)(_ACTION_HANDLERS, _Types2.default.LOGIN_FAILURE, failure), (0, _defineProperty3.default)(_ACTION_HANDLERS, _Types2.default.UPDATE_PASSWORD_REQUEST, attempt), (0, _defineProperty3.default)(_ACTION_HANDLERS, _Types2.default.UPDATE_PASSWORD_SUCCESS, updated), (0, _defineProperty3.default)(_ACTION_HANDLERS, _Types2.default.UPDATE_PASSWORD_FAILURE, failure), (0, _defineProperty3.default)(_ACTION_HANDLERS, _Types2.default.LOGOUT, logout), _ACTION_HANDLERS);

exports.default = (0, _reduxsauce.createReducer)(INITIAL_STATE, ACTION_HANDLERS);