import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

export default (api) => {

  // attempts to login
  function * attemptLogin (meta) {

    // make the call to the api
    const response = yield call(api.login, { email: meta.username, password: meta.password })

    console.log(response)
    // success?
    if (response && response.ok && response.data.access_token) {
      //yield put(Actions.loginSuccess(response.data.username, response.data.photo, response.data.id))
      yield put(Actions.getMe({ username: meta.username, accessToken: response.data.access_token }));
    } else {
      yield put(Actions.loginFailure('WRONG'))
    }
  }

  function * attemptGetMe (meta) {

    //console.log(meta)

    // make the call to the api
    const response = yield call(api.getMe, { accessToken: meta.accessToken })
    /*const response = yield call(api.getMe, {
      filter: {
        where: {
          email: meta.username
        },
        limit: 1
      }
    })*/

    console.log('GET ME', response)

    // success?
    if (response && response.ok) {

      const data = response.data;

      let payload = {
        id: data.id,
        username: data.username,
        email: data.email,
        photo: data.photo,
        token: meta.accessToken
      }
      yield put(Actions.loginSuccess(payload))      

    } else {
      yield put(Actions.loginFailure('WRONG'))
    }
  }

  function * attemptLogout (meta) {

    // make the call to the api
    const response = yield call(api.logout, { access_token: meta.token })

    // success?
    if (response && response.ok) {
      if (typeof window != "undefined") {
        window.localStorage.setItem('accessToken', '');
        window.localStorage.setItem('username', '');
      }
      yield put(Actions.loginSuccess('', ''))
    } else {
      //yield put(Actions.loginFailure('WRONG'))
    }
  }

  function * attemptForgotPassword (meta) {

    // make the call to the api
    const response = yield call(api.forgotPassword, { email: meta.email })

    // success?
    if (response && response.ok) {
      yield put(Actions.forgotPasswordSuccess())
    } else {
      yield put(Actions.forgotPasswordFailure('WRONG'))
    }
  }

  function * attemptResetPassword (meta) {

    // make the call to the api
    const response = yield call(api.resetPassword, { email: meta.email, token: meta.token, password: meta.password })

    // success?
    if (response && response.ok) {
      yield put(Actions.loginAttempt({
        username: meta.email,
        password: meta.password
      }))
    } else {
      yield put(Actions.resetPasswordFailure('WRONG'))
    }
  }

  function * attemptUpdatePassword (meta) {

    // make the call to the api
    const response = yield call(api.updatePassword, {
      email: meta.email,
      password: meta.password,
      new_password: meta.new_password
    })

    console.log('UPDATE PASSWORD', response)

    // success?
    if (response && response.ok) {
      yield put(Actions.updatePasswordSuccess())
    } else {
      yield put(Actions.updatePasswordFailure('WRONG'))
    }
  }

  function * attemptSignup (meta) {

    // make the call to the api
    const response = yield call(api.signup, { email: meta.email, username: meta.username, password: meta.password })

    // success?
    if (response && response.ok) {
      //yield put(Actions.signupSuccess())
      yield put(Actions.loginAttempt({
        username: meta.email,
        password: meta.password
      }))
    } else {
      yield put(Actions.signupFailure(response))
    }
  }

  // a daemonized version which waits for LOGIN_REQUEST signals
  function * watchGetMe () {
    // daemonize
    while (true) {
      // wait for LOGIN_REQUEST actions to arrive
      const { meta } = yield take(Types.LOGIN_ME)
      // call attemptLogin to perform the actual work
      yield call(attemptGetMe, meta)
    }
  }

  function * watchLoginAttempt () {
    // daemonize
    while (true) {
      // wait for LOGIN_REQUEST actions to arrive
      const { meta } = yield take(Types.LOGIN_REQUEST)
      // call attemptLogin to perform the actual work
      yield call(attemptLogin, meta)
    }
  }

  function * watchLogoutAttempt () {
    // daemonize
    while (true) {
      // wait for LOGIN_REQUEST actions to arrive
      const { meta } = yield take(Types.LOGOUT)
      // call attemptLogin to perform the actual work
      yield call(attemptLogout, meta)
    }
  }

  function * watchForgotPasswordAttempt () {
    // daemonize
    while (true) {
      // wait for LOGIN_REQUEST actions to arrive
      const { meta } = yield take(Types.FORGOT_PASSWORD_REQUEST)
      // call attemptLogin to perform the actual work
      yield call(attemptForgotPassword, meta)
    }
  }

  function * watchResetPasswordAttempt () {
    // daemonize
    while (true) {
      // wait for LOGIN_REQUEST actions to arrive
      const { meta } = yield take(Types.RESET_PASSWORD_REQUEST)
      // call attemptLogin to perform the actual work
      yield call(attemptResetPassword, meta)
    }
  }

  function * watchUpdatePasswordAttempt () {
    // daemonize
    while (true) {
      // wait for LOGIN_REQUEST actions to arrive
      const { meta } = yield take(Types.UPDATE_PASSWORD_REQUEST)
      // call attemptLogin to perform the actual work
      yield call(attemptUpdatePassword, meta)
    }
  }

  function * watchSignupAttempt () {
    // daemonize
    while (true) {
      // wait for LOGIN_REQUEST actions to arrive
      const { meta } = yield take(Types.SIGNUP_REQUEST)
      // call attemptLogin to perform the actual work
      yield call(attemptSignup, meta)
    }
  }

  return {
    watchLoginAttempt,
    watchGetMe,
    watchLogoutAttempt,
    watchForgotPasswordAttempt,
    watchResetPasswordAttempt,
    watchUpdatePasswordAttempt,
    watchSignupAttempt,
    attemptLogin,
    attemptGetMe,
    attemptLogout,
    attemptForgotPassword,
    attemptResetPassword,
    attemptUpdatePassword,
    attemptSignup
  }
}
