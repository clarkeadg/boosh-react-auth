'use strict';

var AuthUtil = require('./Helpers/Util');
var LoginForm = require('./Forms/LoginForm');
var ForgotPasswordForm = require('./Forms/ForgotPasswordForm');
var ResetPasswordForm = require('./Forms/ResetPasswordForm');
var ChangePasswordForm = require('./Forms/ChangePasswordForm');
var SignupForm = require('./Forms/SignupForm');
var MeBox = require('./Components/MeBox/MeBox');
var AuthSelector = require('./Selectors/AuthSelector');
var AuthActions = require('./Actions/Creators');
var AuthSaga = require('./Sagas/AuthSaga');
var AuthApi = require('./Services/AuthApi');
var AuthReducer = require('./Reducers/AuthReducer');
var AuthRoutes = require('./routes');

module.exports = {
  redirect: AuthUtil.redirect,
  getAccessToken: AuthUtil.getAccessToken,
  LoginForm: LoginForm.default,
  ForgotPasswordForm: ForgotPasswordForm.default,
  ResetPasswordForm: ResetPasswordForm.default,
  ChangePasswordForm: ChangePasswordForm.default,
  SignupForm: SignupForm.default,
  MeBox: MeBox,
  getMe: AuthSelector.getMe,
  AuthActions: AuthActions.default,
  AuthSaga: AuthSaga.default,
  AuthApi: AuthApi.default,
  AuthReducer: AuthReducer.default,
  AuthRoutes: AuthRoutes.default
};