// a library to wrap and simplify api calls
import apisauce from 'apisauce'

import { getAccessToken } from '../Helpers/Util'

//const apiURL = 'http://ec2-54-69-109-0.us-west-2.compute.amazonaws.com/api/v1/'
const apiURL = 'http://local.api.boosh.io/'

// our "constructor"
const create = (baseURL = apiURL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      //'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // Force OpenWeather API Key on all requests
  /*api.addRequestTransform(request => {
    request.headers['X-Request-Transform'] = 'Changing Stuff!'
  })*/

  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.  But only in __DEV__ and only
  // if we've attached Reactotron to console (it isn't during unit tests).
  //if (__DEV__ && console.tron) {
  //  console.tron.log('Hello, I\'m an example of how to log via Reactotron.')
  //  iTunesApi.addMonitor(console.tron.apisauce)
  //}

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  /* AUTH */

  const signup = (q) => {
    return api.post('users/signup',q)
  }

  const login = (q) => {
    return api.post('users/login',q)
  }

  const logout = (q) => {
    api.setHeader('Authorization', q.access_token)
    return api.post('users/logout', {})
  }

  const getMe = (q) => {
    api.setHeader('Authorization', 'Bearer '+q.accessToken)
    return api.get('users/me')
  }

  const forgotPassword = (email) => {
    return api.post('users/forgot_password', email)
  }

  const resetPassword = (token) => {
    return api.post('users/reset_password', token)
  }

  const updatePassword = (q) => {
    let accessToken = getAccessToken();
    if (accessToken) api.setHeader('Authorization', 'Bearer '+accessToken)
    return api.post('users/update_password', q)
  }

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    signup,
    login,
    logout,
    getMe,
    forgotPassword,
    resetPassword,
    updatePassword
  }
}

// let's return back our create method as the default.
export default {
  create
}
