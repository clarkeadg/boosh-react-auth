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

var _Creators = require('../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

var _reactJsonschemaForm = require('react-jsonschema-form');

var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

var _reactFoundation = require('react-foundation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { Link } from 'react-router'

/* Selectors */
//import { getMe } from '../Selectors/UserSelector'

/* Components */
var ForgotPasswordForm = function (_React$Component) {
  (0, _inherits3.default)(ForgotPasswordForm, _React$Component);

  function ForgotPasswordForm(props) {
    (0, _classCallCheck3.default)(this, ForgotPasswordForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ForgotPasswordForm.__proto__ || (0, _getPrototypeOf2.default)(ForgotPasswordForm)).call(this, props));

    _this.onSubmit = function (_ref) {
      var formData = _ref.formData;

      _this.props.dispatch(_Creators2.default.forgotPasswordAttempt({
        email: formData.email
      }));
    };

    _this.onChange = function (_ref2) {
      var formData = _ref2.formData;
    };

    _this.onError = function (_ref3) {
      var formData = _ref3.formData;
    };

    _this.state = {
      form: {
        schema: {
          //title: "Forgot Password",
          type: "object",
          required: ["email"],
          properties: {
            email: { title: "Email", type: "string" }
          }
        },
        uiSchema: {
          email: {
            "ui:widget": "email",
            "ui:placeholder": "Email Address",
            "ui:options": { label: false }
          }
        },
        formData: {},
        buttons: [{ "type": "Submit", "title": "Submit" }]
      }
    };
    return _this;
  }

  (0, _createClass3.default)(ForgotPasswordForm, [{
    key: 'render',
    value: function render() {

      var z = this;

      return _react2.default.createElement(
        _reactJsonschemaForm2.default,
        {
          schema: z.state.form.schema,
          uiSchema: z.state.form.uiSchema,
          formData: z.state.form.formData,
          onChange: z.onChange,
          onSubmit: z.onSubmit,
          onError: z.onError },
        _react2.default.createElement(
          'div',
          { className: 'form-buttons' },
          z.state.form.buttons.map(function (item, id) {
            return _react2.default.createElement(
              _reactFoundation.Button,
              { key: id, type: item.type },
              item.title
            );
          })
        )
      );
    }
  }]);
  return ForgotPasswordForm;
}(_react2.default.Component);

/* Actions */

/* React */


var mapStateToProps = function mapStateToProps(state, props) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ForgotPasswordForm);