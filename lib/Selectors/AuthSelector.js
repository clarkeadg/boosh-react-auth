'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMe = undefined;

var _reselect = require('reselect');

/* Private */

var me = function me(state, props) {
  return state.me;
};

/* Exports */

var getMe = exports.getMe = (0, _reselect.createSelector)([me], function (user) {
  return user;
});