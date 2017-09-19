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

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Actions */

/* React */
var SignupForm = function (_React$Component) {
  (0, _inherits3.default)(SignupForm, _React$Component);

  function SignupForm(props) {
    (0, _classCallCheck3.default)(this, SignupForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SignupForm.__proto__ || (0, _getPrototypeOf2.default)(SignupForm)).call(this, props));

    _this.onSubmit = function (_ref) {
      var formData = _ref.formData;

      console.log(formData);
      _this.props.dispatch(_Creators2.default.signupAttempt({
        email: formData.email,
        username: formData.username,
        password: formData.password
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
          title: "",
          type: "object",
          required: ["email", "username", "password", "tos"],
          properties: {
            email: { type: "string", title: "email" },
            username: { type: "string", title: "username" },
            password: { type: "string", title: "password", "minLength": 5 },
            tos: { type: "boolean" }
          }
        },
        uiSchema: {
          email: {
            "ui:widget": "email",
            "ui:placeholder": "Email Address",
            "ui:options": { label: false }
          },
          username: {
            "ui:placeholder": "Username",
            "ui:options": { label: false }
          },
          password: {
            "ui:widget": "password",
            "ui:placeholder": "Choose a Password",
            "ui:options": { label: false }
          },
          tos: {
            "ui:options": { label: false },
            "ui:widget": function uiWidget(props) {
              return _react2.default.createElement(
                'div',
                { className: 'custom-checkbox' },
                _react2.default.createElement('input', { type: 'checkbox',
                  value: false,
                  required: props.required,
                  onChange: function onChange(event) {
                    return props.onChange(event.target.value ? true : false);
                  } }),
                _react2.default.createElement(
                  'div',
                  { className: 'checkbox-label' },
                  "I have read, understand, and agree to the ",
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/pages/terms' },
                    'Terms of Service'
                  )
                )
              );
            }
          }
        },
        formData: {
          email: '',
          username: '',
          password: ''
        },
        buttons: [{ "type": "Submit", "title": "Join" }]
      }
    };
    return _this;
  }

  (0, _createClass3.default)(SignupForm, [{
    key: 'render',
    value: function render() {

      var z = this;

      return _react2.default.createElement(
        _reactJsonschemaForm2.default,
        {
          autocomplete: 'false',
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
  return SignupForm;
}(_react2.default.Component);

/* Selectors */
//import { getMe } from '../Selectors/UserSelector'

/* Components */


var mapStateToProps = function mapStateToProps(state, props) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SignupForm);