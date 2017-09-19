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

var _Creators = require('./../../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

var _AuthSelector = require('./../../Selectors/AuthSelector');

var _reactFoundation = require('react-foundation');

var _reactRouter = require('react-router');

var _reactSimpleDropdown = require('react-simple-dropdown');

var _reactSimpleDropdown2 = _interopRequireDefault(_reactSimpleDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Selectors */
var MeBox = function (_React$Component) {
  (0, _inherits3.default)(MeBox, _React$Component);

  function MeBox() {
    (0, _classCallCheck3.default)(this, MeBox);
    return (0, _possibleConstructorReturn3.default)(this, (MeBox.__proto__ || (0, _getPrototypeOf2.default)(MeBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(MeBox, [{
    key: 'renderLoggedOut',
    value: function renderLoggedOut() {
      return _react2.default.createElement(
        _reactFoundation.Menu,
        { className: 'right me-box loggedout' },
        _react2.default.createElement(
          _reactFoundation.MenuItem,
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/login', className: 'btn-login' },
            _react2.default.createElement(
              _reactFoundation.Button,
              { size: _reactFoundation.Sizes.SMALL },
              'Login'
            )
          )
        ),
        _react2.default.createElement(
          _reactFoundation.MenuItem,
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/signup', className: 'btn-signup' },
            _react2.default.createElement(
              _reactFoundation.Button,
              { size: _reactFoundation.Sizes.SMALL, color: _reactFoundation.Colors.SECONDARY },
              'Signup'
            )
          )
        )
      );
    }
  }, {
    key: 'renderBadge',
    value: function renderBadge(data) {
      if (data.length) {
        return _react2.default.createElement(
          _reactFoundation.Badge,
          { color: _reactFoundation.Colors.ALERT },
          data.length
        );
      }
      return false;
    }
  }, {
    key: 'renderLoggedIn',
    value: function renderLoggedIn() {
      var _this2 = this;

      var _props = this.props,
          me = _props.me,
          messages = _props.messages,
          notifications = _props.notifications;


      return _react2.default.createElement(
        _reactFoundation.Menu,
        { className: 'right me-box loggedin' },
        _react2.default.createElement(
          _reactFoundation.MenuItem,
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { className: 'IconBox', to: '/notifications' },
            _react2.default.createElement(_reactFoundation.Icon, { name: 'fi-comment' }),
            this.renderBadge(notifications)
          )
        ),
        _react2.default.createElement(
          _reactFoundation.MenuItem,
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { className: 'IconBox', to: '/messages/inbox' },
            _react2.default.createElement(_reactFoundation.Icon, { name: 'fi-mail' }),
            this.renderBadge(messages)
          )
        ),
        _react2.default.createElement(
          _reactFoundation.MenuItem,
          null,
          _react2.default.createElement(
            _reactSimpleDropdown2.default,
            { ref: 'dropdown' },
            _react2.default.createElement(
              _reactSimpleDropdown.DropdownTrigger,
              null,
              _react2.default.createElement('img', { className: 'UserPhoto UserPhotoSmall', src: me.photo }),
              _react2.default.createElement(
                'span',
                { className: 'username' },
                me.username
              )
            ),
            _react2.default.createElement(
              _reactSimpleDropdown.DropdownContent,
              { onClick: function onClick() {
                  _this2.refs.dropdown.hide();
                } },
              _react2.default.createElement(
                _reactFoundation.Menu,
                { isVertical: true },
                _react2.default.createElement(
                  _reactFoundation.MenuItem,
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/' + me.username + '/activity' },
                    'Profile'
                  )
                ),
                _react2.default.createElement(
                  _reactFoundation.MenuItem,
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/settings/profile' },
                    'Settings'
                  )
                ),
                _react2.default.createElement(
                  _reactFoundation.MenuItem,
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '#', onClick: function onClick() {
                        return _this2.props.dispatch(_Creators2.default.logout({ token: me.token }));
                      } },
                    'Logout'
                  )
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          me = _props2.me,
          loading = _props2.loading;


      return _react2.default.createElement(
        'div',
        { className: 'me-box' },
        me.username ? this.renderLoggedIn() : this.renderLoggedOut()
      );
    }
  }]);
  return MeBox;
}(_react2.default.Component);
//import { getVisibleMessages } from 'boosh-react-messages'
//import { getVisibleNotifications } from 'boosh-react-notifications'

/* Components */


/* Actions */

/* React */


MeBox.propTypes = {
  me: _react2.default.PropTypes.object,
  messages: _react2.default.PropTypes.array,
  notifications: _react2.default.PropTypes.array
};

MeBox.defaultProps = {
  me: {},
  messages: [],
  notifications: []
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    me: (0, _AuthSelector.getMe)(state, props)
    //messages: getVisibleMessages(state, props),
    //notifications: getVisibleNotifications(state, props)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MeBox);