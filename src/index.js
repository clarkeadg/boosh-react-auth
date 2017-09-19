
const AuthUtil            = require('./Helpers/Util');
const LoginForm           = require('./Forms/LoginForm');
const ForgotPasswordForm  = require('./Forms/ForgotPasswordForm');
const ResetPasswordForm   = require('./Forms/ResetPasswordForm');
const ChangePasswordForm  = require('./Forms/ChangePasswordForm');
const SignupForm          = require('./Forms/SignupForm');
const MeBox               = require('./Components/MeBox/MeBox');
const AuthSelector        = require('./Selectors/AuthSelector');
const AuthActions         = require('./Actions/Creators');
const AuthSaga            = require('./Sagas/AuthSaga');
const AuthApi             = require('./Services/AuthApi');
const AuthReducer         = require('./Reducers/AuthReducer');
const AuthRoutes          = require('./routes');

module.exports = {
	redirect:           AuthUtil.redirect,
  getAccessToken:	    AuthUtil.getAccessToken,
  LoginForm:          LoginForm.default,
  ForgotPasswordForm: ForgotPasswordForm.default,
  ResetPasswordForm:  ResetPasswordForm.default,
  ChangePasswordForm: ChangePasswordForm.default,
  SignupForm:         SignupForm.default,
  MeBox:              MeBox.default,
  getMe:              AuthSelector.getMe,
  AuthActions:        AuthActions.default,
  AuthSaga:           AuthSaga.default,
  AuthApi:            AuthApi.default,
  AuthReducer:        AuthReducer.default,
  AuthRoutes:         AuthRoutes.default
}
