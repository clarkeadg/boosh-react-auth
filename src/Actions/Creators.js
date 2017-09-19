import Types from './Types'

/* AUTH */
const getMe = (meta) => ({ type: Types.LOGIN_ME, meta })
const logout = (meta) => ({ type: Types.LOGOUT, meta })

const loginAttempt = (meta) => ({ type: Types.LOGIN_REQUEST, meta })
const loginSuccess = (payload) => ({ type: Types.LOGIN_SUCCESS, payload })
const loginFailure = (errorCode) => ({ type: Types.LOGIN_FAILURE, errorCode })

const signupAttempt = (meta) => ({ type: Types.SIGNUP_REQUEST, meta })
const signupSuccess = (payload) => ({ type: Types.SIGNUP_SUCCESS, payload })
const signupFailure = (errorCode) => ({ type: Types.SIGNUP_FAILURE, errorCode })

const forgotPasswordAttempt = (meta) => ({ type: Types.FORGOT_PASSWORD_REQUEST, meta })
const forgotPasswordSuccess = (payload) => ({ type: Types.FORGOT_PASSWORD_SUCCESS, payload })
const forgotPasswordFailure = (errorCode) => ({ type: Types.FORGOT_PASSWORD_FAILURE, errorCode })

const resetPasswordAttempt = (meta) => ({ type: Types.RESET_PASSWORD_REQUEST, meta })
const resetPasswordSuccess = (payload) => ({ type: Types.RESET_PASSWORD_SUCCESS, payload })
const resetPasswordFailure = (errorCode) => ({ type: Types.RESET_PASSWORD_FAILURE, errorCode })

const updatePasswordAttempt = (meta) => ({ type: Types.UPDATE_PASSWORD_REQUEST, meta })
const updatePasswordSuccess = (payload) => ({ type: Types.UPDATE_PASSWORD_SUCCESS, payload })
const updatePasswordFailure = (errorCode) => ({ type: Types.UPDATE_PASSWORD_FAILURE, errorCode })

/**
 Makes available all the action creators we've created.
 */
export default {

  getMe,
  loginAttempt,
  loginSuccess,
  loginFailure,
  logout,

  signupAttempt,
  signupSuccess,
  signupFailure,

  forgotPasswordAttempt,
  forgotPasswordSuccess,
  forgotPasswordFailure,

  resetPasswordAttempt,
  resetPasswordSuccess,
  resetPasswordFailure,

  updatePasswordAttempt,
  updatePasswordSuccess,
  updatePasswordFailure

}
