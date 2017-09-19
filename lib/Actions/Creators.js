'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Types = require('./Types');

var _Types2 = _interopRequireDefault(_Types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* AUTH */
var getMe = function getMe(meta) {
  return { type: _Types2.default.LOGIN_ME, meta: meta };
};
var logout = function logout(meta) {
  return { type: _Types2.default.LOGOUT, meta: meta };
};

var loginAttempt = function loginAttempt(meta) {
  return { type: _Types2.default.LOGIN_REQUEST, meta: meta };
};
var loginSuccess = function loginSuccess(payload) {
  return { type: _Types2.default.LOGIN_SUCCESS, payload: payload };
};
var loginFailure = function loginFailure(errorCode) {
  return { type: _Types2.default.LOGIN_FAILURE, errorCode: errorCode };
};

var signupAttempt = function signupAttempt(meta) {
  return { type: _Types2.default.SIGNUP_REQUEST, meta: meta };
};
var signupSuccess = function signupSuccess(payload) {
  return { type: _Types2.default.SIGNUP_SUCCESS, payload: payload };
};
var signupFailure = function signupFailure(errorCode) {
  return { type: _Types2.default.SIGNUP_FAILURE, errorCode: errorCode };
};

var forgotPasswordAttempt = function forgotPasswordAttempt(meta) {
  return { type: _Types2.default.FORGOT_PASSWORD_REQUEST, meta: meta };
};
var forgotPasswordSuccess = function forgotPasswordSuccess(payload) {
  return { type: _Types2.default.FORGOT_PASSWORD_SUCCESS, payload: payload };
};
var forgotPasswordFailure = function forgotPasswordFailure(errorCode) {
  return { type: _Types2.default.FORGOT_PASSWORD_FAILURE, errorCode: errorCode };
};

var resetPasswordAttempt = function resetPasswordAttempt(meta) {
  return { type: _Types2.default.RESET_PASSWORD_REQUEST, meta: meta };
};
var resetPasswordSuccess = function resetPasswordSuccess(payload) {
  return { type: _Types2.default.RESET_PASSWORD_SUCCESS, payload: payload };
};
var resetPasswordFailure = function resetPasswordFailure(errorCode) {
  return { type: _Types2.default.RESET_PASSWORD_FAILURE, errorCode: errorCode };
};

var updatePasswordAttempt = function updatePasswordAttempt(meta) {
  return { type: _Types2.default.UPDATE_PASSWORD_REQUEST, meta: meta };
};
var updatePasswordSuccess = function updatePasswordSuccess(payload) {
  return { type: _Types2.default.UPDATE_PASSWORD_SUCCESS, payload: payload };
};
var updatePasswordFailure = function updatePasswordFailure(errorCode) {
  return { type: _Types2.default.UPDATE_PASSWORD_FAILURE, errorCode: errorCode };
};

/**
 Makes available all the action creators we've created.
 */
exports.default = {

  getMe: getMe,
  loginAttempt: loginAttempt,
  loginSuccess: loginSuccess,
  loginFailure: loginFailure,
  logout: logout,

  signupAttempt: signupAttempt,
  signupSuccess: signupSuccess,
  signupFailure: signupFailure,

  forgotPasswordAttempt: forgotPasswordAttempt,
  forgotPasswordSuccess: forgotPasswordSuccess,
  forgotPasswordFailure: forgotPasswordFailure,

  resetPasswordAttempt: resetPasswordAttempt,
  resetPasswordSuccess: resetPasswordSuccess,
  resetPasswordFailure: resetPasswordFailure,

  updatePasswordAttempt: updatePasswordAttempt,
  updatePasswordSuccess: updatePasswordSuccess,
  updatePasswordFailure: updatePasswordFailure

};