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

var _AuthSelector = require('../Selectors/AuthSelector');

var _reactJsonschemaForm = require('react-jsonschema-form');

var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

var _reactFoundation = require('react-foundation');

var _booshReactComponents = require('boosh-react-components');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Components */

/* React */
var ChangePasswordForm = function (_React$Component) {
  (0, _inherits3.default)(ChangePasswordForm, _React$Component);

  function ChangePasswordForm(props) {
    (0, _classCallCheck3.default)(this, ChangePasswordForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChangePasswordForm.__proto__ || (0, _getPrototypeOf2.default)(ChangePasswordForm)).call(this, props));

    _this.onSubmit = function (_ref) {
      var formData = _ref.formData;

      console.log('SUBMIT', formData, _this.props.me);
      _this.props.dispatch(_Creators2.default.updatePasswordAttempt({
        email: _this.props.me.email,
        password: formData.password,
        new_password: formData.password1
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
          //title: "Account",
          type: "object",
          required: ["password", "password1", "password2"],
          properties: {
            password: { title: "Old password", type: "string", minLength: 3 },
            password1: { title: "New password", type: "string", minLength: 3 },
            password2: { title: "Confirm new password", type: "string", minLength: 3 }
          }
        },
        uiSchema: {
          classNames: "ChangePasswordForm",
          password: {
            "ui:widget": "password",
            "ui:placeholder": "Old password",
            "ui:options": { label: false }
          },
          password1: {
            "ui:widget": "password",
            "ui:placeholder": "New password",
            "ui:options": { label: false }
          },
          password2: {
            "ui:widget": "password",
            "ui:placeholder": "Confirm new password",
            "ui:options": { label: false }
          }
        },
        formData: {},
        buttons: [{ "type": "Submit", "title": "Update password" }]
      }
    };
    return _this;
  }

  (0, _createClass3.default)(ChangePasswordForm, [{
    key: 'renderForm',
    value: function renderForm(loading, form) {
      if (loading) {
        return _react2.default.createElement(_booshReactComponents.Loading, null);
      }
      return _react2.default.createElement(
        _reactJsonschemaForm2.default,
        {
          schema: form.schema,
          uiSchema: form.uiSchema,
          formData: form.formData,
          onChange: this.onChange,
          onSubmit: this.onSubmit,
          onError: this.onError },
        _react2.default.createElement(
          'div',
          { className: 'form-buttons' },
          form.buttons.map(function (item, id) {
            return _react2.default.createElement(
              _reactFoundation.Button,
              { key: id, type: item.type },
              item.title
            );
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var form = this.state.form;
      var loading = this.props.loading;

      // { this.props.me.errorCode ? 'There was an error logging in.' : ''}

      return _react2.default.createElement(
        'div',
        null,
        this.renderForm(loading, form)
      );
    }
  }]);
  return ChangePasswordForm;
}(_react2.default.Component);

ChangePasswordForm.propTypes = {
  loading: _react2.default.PropTypes.bool,
  me: _react2.default.PropTypes.object
};

ChangePasswordForm.defaultProps = {
  loading: false,
  me: {}
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    loading: state.me.attempting,
    me: (0, _AuthSelector.getMe)(state, props)
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(ChangePasswordForm);