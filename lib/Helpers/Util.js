'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParameterByName = exports.getAccessToken = exports.redirect = undefined;

var _reactRouter = require('react-router');

var redirect = function redirect(url) {
  _reactRouter.browserHistory.push(null, url || getParameterByName('redirect') || '/');
};

var getAccessToken = function getAccessToken() {
  var accessToken = '';
  if (typeof window != "undefined") {
    accessToken = window.localStorage.getItem('accessToken') || null;
  }
  return accessToken;
};

var getParameterByName = function getParameterByName(name) {
  if (typeof window != "undefined") {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  } else {
    return null;
  }
};

exports.redirect = redirect;
exports.getAccessToken = getAccessToken;
exports.getParameterByName = getParameterByName;