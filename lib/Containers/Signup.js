'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _AuthSelector = require('../Selectors/AuthSelector');

var _Util = require('../Helpers/Util');

var _reactFoundation = require('react-foundation');

var _booshReactComponents = require('boosh-react-components');

var _SignupForm = require('../Forms/SignupForm');

var _SignupForm2 = _interopRequireDefault(_SignupForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Utils */

/* React */
var Signup = function (_React$Component) {
  (0, _inherits3.default)(Signup, _React$Component);

  function Signup() {
    (0, _classCallCheck3.default)(this, Signup);
    return (0, _possibleConstructorReturn3.default)(this, (Signup.__proto__ || (0, _getPrototypeOf2.default)(Signup)).apply(this, arguments));
  }

  (0, _createClass3.default)(Signup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.me.username) {
        (0, _Util.redirect)();
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var title = "Signup";

      return _react2.default.createElement(
        'div',
        { className: 'page' },
        _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 12, medium: 6, large: 5, centerOnSmall: true },
            _react2.default.createElement(_booshReactComponents.Portlet, { title: title, items: _react2.default.createElement(_SignupForm2.default, null) })
          )
        )
      );
    }
  }]);
  return Signup;
}(_react2.default.Component);

/* Forms */


/* Components */


/* Selectors */


var mapStateToProps = function mapStateToProps(state, props) {
  return {
    me: (0, _AuthSelector.getMe)(state, props)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Signup);