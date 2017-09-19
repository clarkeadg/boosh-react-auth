import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  id: null,
  username: null,
  email: null,
  photo: "https://diasp.eu/assets/user/default.png",
  token: null,
  errorCode: null,
  attempting: false
})

// login attempts
const attempt = (state, action) =>
  state.merge({ attempting: true })

const updated = (state, action) =>
  state.merge({ attempting: false })

// successful logins
const success = (state, action) => {
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
  })
}

// login failure
const failure = (state, action) =>
  state.merge({ attempting: false, errorCode: action.errorCode })

// logout
const logout = (state, action) => {
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
  })
}

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LOGIN_REQUEST]: attempt,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.UPDATE_PASSWORD_REQUEST]: attempt,
  [Types.UPDATE_PASSWORD_SUCCESS]: updated,
  [Types.UPDATE_PASSWORD_FAILURE]: failure,
  [Types.LOGOUT]: logout
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
