'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = require('redux-saga/effects');

var _Types = require('../Actions/Types');

var _Types2 = _interopRequireDefault(_Types);

var _Creators = require('../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (api) {
  var _marked = /*#__PURE__*/_regenerator2.default.mark(attemptLogin),
      _marked2 = /*#__PURE__*/_regenerator2.default.mark(attemptGetMe),
      _marked3 = /*#__PURE__*/_regenerator2.default.mark(attemptLogout),
      _marked4 = /*#__PURE__*/_regenerator2.default.mark(attemptForgotPassword),
      _marked5 = /*#__PURE__*/_regenerator2.default.mark(attemptResetPassword),
      _marked6 = /*#__PURE__*/_regenerator2.default.mark(attemptUpdatePassword),
      _marked7 = /*#__PURE__*/_regenerator2.default.mark(attemptSignup),
      _marked8 = /*#__PURE__*/_regenerator2.default.mark(watchGetMe),
      _marked9 = /*#__PURE__*/_regenerator2.default.mark(watchLoginAttempt),
      _marked10 = /*#__PURE__*/_regenerator2.default.mark(watchLogoutAttempt),
      _marked11 = /*#__PURE__*/_regenerator2.default.mark(watchForgotPasswordAttempt),
      _marked12 = /*#__PURE__*/_regenerator2.default.mark(watchResetPasswordAttempt),
      _marked13 = /*#__PURE__*/_regenerator2.default.mark(watchUpdatePasswordAttempt),
      _marked14 = /*#__PURE__*/_regenerator2.default.mark(watchSignupAttempt);

  // attempts to login
  function attemptLogin(meta) {
    var response;
    return _regenerator2.default.wrap(function attemptLogin$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _effects.call)(api.login, { email: meta.username, password: meta.password });

          case 2:
            response = _context.sent;


            console.log(response);
            // success?

            if (!(response && response.ok && response.data.access_token)) {
              _context.next = 9;
              break;
            }

            _context.next = 7;
            return (0, _effects.put)(_Creators2.default.getMe({ username: meta.username, accessToken: response.data.access_token }));

          case 7:
            _context.next = 11;
            break;

          case 9:
            _context.next = 11;
            return (0, _effects.put)(_Creators2.default.loginFailure('WRONG'));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  function attemptGetMe(meta) {
    var response, data, payload;
    return _regenerator2.default.wrap(function attemptGetMe$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _effects.call)(api.getMe, { accessToken: meta.accessToken });

          case 2:
            response = _context2.sent;

            /*const response = yield call(api.getMe, {
              filter: {
                where: {
                  email: meta.username
                },
                limit: 1
              }
            })*/

            console.log('GET ME', response);

            // success?

            if (!(response && response.ok)) {
              _context2.next = 11;
              break;
            }

            data = response.data;
            payload = {
              id: data.id,
              username: data.username,
              email: data.email,
              photo: data.photo,
              token: meta.accessToken
            };
            _context2.next = 9;
            return (0, _effects.put)(_Creators2.default.loginSuccess(payload));

          case 9:
            _context2.next = 13;
            break;

          case 11:
            _context2.next = 13;
            return (0, _effects.put)(_Creators2.default.loginFailure('WRONG'));

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _marked2, this);
  }

  function attemptLogout(meta) {
    var response;
    return _regenerator2.default.wrap(function attemptLogout$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _effects.call)(api.logout, { access_token: meta.token });

          case 2:
            response = _context3.sent;

            if (!(response && response.ok)) {
              _context3.next = 9;
              break;
            }

            if (typeof window != "undefined") {
              window.localStorage.setItem('accessToken', '');
              window.localStorage.setItem('username', '');
            }
            _context3.next = 7;
            return (0, _effects.put)(_Creators2.default.loginSuccess('', ''));

          case 7:
            _context3.next = 9;
            break;

          case 9:
          case 'end':
            return _context3.stop();
        }
      }
    }, _marked3, this);
  }

  function attemptForgotPassword(meta) {
    var response;
    return _regenerator2.default.wrap(function attemptForgotPassword$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _effects.call)(api.forgotPassword, { email: meta.email });

          case 2:
            response = _context4.sent;

            if (!(response && response.ok)) {
              _context4.next = 8;
              break;
            }

            _context4.next = 6;
            return (0, _effects.put)(_Creators2.default.forgotPasswordSuccess());

          case 6:
            _context4.next = 10;
            break;

          case 8:
            _context4.next = 10;
            return (0, _effects.put)(_Creators2.default.forgotPasswordFailure('WRONG'));

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _marked4, this);
  }

  function attemptResetPassword(meta) {
    var response;
    return _regenerator2.default.wrap(function attemptResetPassword$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _effects.call)(api.resetPassword, { email: meta.email, token: meta.token, password: meta.password });

          case 2:
            response = _context5.sent;

            if (!(response && response.ok)) {
              _context5.next = 8;
              break;
            }

            _context5.next = 6;
            return (0, _effects.put)(_Creators2.default.loginAttempt({
              username: meta.email,
              password: meta.password
            }));

          case 6:
            _context5.next = 10;
            break;

          case 8:
            _context5.next = 10;
            return (0, _effects.put)(_Creators2.default.resetPasswordFailure('WRONG'));

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    }, _marked5, this);
  }

  function attemptUpdatePassword(meta) {
    var response;
    return _regenerator2.default.wrap(function attemptUpdatePassword$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _effects.call)(api.updatePassword, {
              email: meta.email,
              password: meta.password,
              new_password: meta.new_password
            });

          case 2:
            response = _context6.sent;


            console.log('UPDATE PASSWORD', response);

            // success?

            if (!(response && response.ok)) {
              _context6.next = 9;
              break;
            }

            _context6.next = 7;
            return (0, _effects.put)(_Creators2.default.updatePasswordSuccess());

          case 7:
            _context6.next = 11;
            break;

          case 9:
            _context6.next = 11;
            return (0, _effects.put)(_Creators2.default.updatePasswordFailure('WRONG'));

          case 11:
          case 'end':
            return _context6.stop();
        }
      }
    }, _marked6, this);
  }

  function attemptSignup(meta) {
    var response;
    return _regenerator2.default.wrap(function attemptSignup$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _effects.call)(api.signup, { email: meta.email, username: meta.username, password: meta.password });

          case 2:
            response = _context7.sent;

            if (!(response && response.ok)) {
              _context7.next = 8;
              break;
            }

            _context7.next = 6;
            return (0, _effects.put)(_Creators2.default.loginAttempt({
              email: meta.email,
              password: meta.password
            }));

          case 6:
            _context7.next = 10;
            break;

          case 8:
            _context7.next = 10;
            return (0, _effects.put)(_Creators2.default.signupFailure(response));

          case 10:
          case 'end':
            return _context7.stop();
        }
      }
    }, _marked7, this);
  }

  // a daemonized version which waits for LOGIN_REQUEST signals
  function watchGetMe() {
    var _ref, meta;

    return _regenerator2.default.wrap(function watchGetMe$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (!true) {
              _context8.next = 9;
              break;
            }

            _context8.next = 3;
            return (0, _effects.take)(_Types2.default.LOGIN_ME);

          case 3:
            _ref = _context8.sent;
            meta = _ref.meta;
            _context8.next = 7;
            return (0, _effects.call)(attemptGetMe, meta);

          case 7:
            _context8.next = 0;
            break;

          case 9:
          case 'end':
            return _context8.stop();
        }
      }
    }, _marked8, this);
  }

  function watchLoginAttempt() {
    var _ref2, meta;

    return _regenerator2.default.wrap(function watchLoginAttempt$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (!true) {
              _context9.next = 9;
              break;
            }

            _context9.next = 3;
            return (0, _effects.take)(_Types2.default.LOGIN_REQUEST);

          case 3:
            _ref2 = _context9.sent;
            meta = _ref2.meta;
            _context9.next = 7;
            return (0, _effects.call)(attemptLogin, meta);

          case 7:
            _context9.next = 0;
            break;

          case 9:
          case 'end':
            return _context9.stop();
        }
      }
    }, _marked9, this);
  }

  function watchLogoutAttempt() {
    var _ref3, meta;

    return _regenerator2.default.wrap(function watchLogoutAttempt$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            if (!true) {
              _context10.next = 9;
              break;
            }

            _context10.next = 3;
            return (0, _effects.take)(_Types2.default.LOGOUT);

          case 3:
            _ref3 = _context10.sent;
            meta = _ref3.meta;
            _context10.next = 7;
            return (0, _effects.call)(attemptLogout, meta);

          case 7:
            _context10.next = 0;
            break;

          case 9:
          case 'end':
            return _context10.stop();
        }
      }
    }, _marked10, this);
  }

  function watchForgotPasswordAttempt() {
    var _ref4, meta;

    return _regenerator2.default.wrap(function watchForgotPasswordAttempt$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            if (!true) {
              _context11.next = 9;
              break;
            }

            _context11.next = 3;
            return (0, _effects.take)(_Types2.default.FORGOT_PASSWORD_REQUEST);

          case 3:
            _ref4 = _context11.sent;
            meta = _ref4.meta;
            _context11.next = 7;
            return (0, _effects.call)(attemptForgotPassword, meta);

          case 7:
            _context11.next = 0;
            break;

          case 9:
          case 'end':
            return _context11.stop();
        }
      }
    }, _marked11, this);
  }

  function watchResetPasswordAttempt() {
    var _ref5, meta;

    return _regenerator2.default.wrap(function watchResetPasswordAttempt$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            if (!true) {
              _context12.next = 9;
              break;
            }

            _context12.next = 3;
            return (0, _effects.take)(_Types2.default.RESET_PASSWORD_REQUEST);

          case 3:
            _ref5 = _context12.sent;
            meta = _ref5.meta;
            _context12.next = 7;
            return (0, _effects.call)(attemptResetPassword, meta);

          case 7:
            _context12.next = 0;
            break;

          case 9:
          case 'end':
            return _context12.stop();
        }
      }
    }, _marked12, this);
  }

  function watchUpdatePasswordAttempt() {
    var _ref6, meta;

    return _regenerator2.default.wrap(function watchUpdatePasswordAttempt$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            if (!true) {
              _context13.next = 9;
              break;
            }

            _context13.next = 3;
            return (0, _effects.take)(_Types2.default.UPDATE_PASSWORD_REQUEST);

          case 3:
            _ref6 = _context13.sent;
            meta = _ref6.meta;
            _context13.next = 7;
            return (0, _effects.call)(attemptUpdatePassword, meta);

          case 7:
            _context13.next = 0;
            break;

          case 9:
          case 'end':
            return _context13.stop();
        }
      }
    }, _marked13, this);
  }

  function watchSignupAttempt() {
    var _ref7, meta;

    return _regenerator2.default.wrap(function watchSignupAttempt$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            if (!true) {
              _context14.next = 9;
              break;
            }

            _context14.next = 3;
            return (0, _effects.take)(_Types2.default.SIGNUP_REQUEST);

          case 3:
            _ref7 = _context14.sent;
            meta = _ref7.meta;
            _context14.next = 7;
            return (0, _effects.call)(attemptSignup, meta);

          case 7:
            _context14.next = 0;
            break;

          case 9:
          case 'end':
            return _context14.stop();
        }
      }
    }, _marked14, this);
  }

  return {
    watchLoginAttempt: watchLoginAttempt,
    watchGetMe: watchGetMe,
    watchLogoutAttempt: watchLogoutAttempt,
    watchForgotPasswordAttempt: watchForgotPasswordAttempt,
    watchResetPasswordAttempt: watchResetPasswordAttempt,
    watchUpdatePasswordAttempt: watchUpdatePasswordAttempt,
    watchSignupAttempt: watchSignupAttempt,
    attemptLogin: attemptLogin,
    attemptGetMe: attemptGetMe,
    attemptLogout: attemptLogout,
    attemptForgotPassword: attemptForgotPassword,
    attemptResetPassword: attemptResetPassword,
    attemptUpdatePassword: attemptUpdatePassword,
    attemptSignup: attemptSignup
  };
};