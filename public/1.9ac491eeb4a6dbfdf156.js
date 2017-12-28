webpackJsonp([1],{

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _FormControl = __webpack_require__(281);

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Button = __webpack_require__(282);

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(68);

var _validation = __webpack_require__(283);

var _merchantActions = __webpack_require__(163);

var _redux = __webpack_require__(47);

var _reactRedux = __webpack_require__(80);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResetPassword = function (_Component) {
    _inherits(ResetPassword, _Component);

    function ResetPassword() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ResetPassword);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResetPassword.__proto__ || Object.getPrototypeOf(ResetPassword)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            password: '',
            confirmPassword: '',
            errors: {},
            isLoading: false,
            success: false,
            message: ''
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onSubmit = function (e) {
            e.preventDefault();
            _this.setState({
                isLoading: true
            });
            var errors = (0, _validation.validateResetPasswordInput)(_this.state);
            if (Object.keys(errors).length) {
                _this.setState({
                    errors: errors,
                    isLoading: false
                });
            } else {
                _this.setState({
                    errors: {}
                });
                _this.props.resetPassword({ password: _this.state.password, token: _this.props.location.search.slice(1) }).then(function (response) {
                    if (response.data.confirmation === "fail") {
                        _this.setState({
                            errors: {
                                global: response.data.message
                            },
                            isLoading: false,
                            password: '',
                            confirmPassword: ''
                        });
                    } else if (response.data.confirmation === "success") {
                        console.log(response.data.message);
                        _this.setState({
                            success: true,
                            message: response.data.message,
                            isLoading: false
                        });
                    }
                }).catch(function (err) {
                    return console.log(err);
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ResetPassword, [{
        key: "render",
        value: function render() {
            var _state = this.state,
                errors = _state.errors,
                password = _state.password,
                isLoading = _state.isLoading,
                confirmPassword = _state.confirmPassword,
                success = _state.success,
                message = _state.message;

            return _react2.default.createElement(
                "div",
                { className: "center", style: { width: "100%" } },
                _react2.default.createElement(
                    "h1",
                    { className: "w3-text-teal w3-center", style: { textShadow: "1px 1px 0 #444" } },
                    _react2.default.createElement(
                        "b",
                        null,
                        "Rebus"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "w3-card" },
                    _react2.default.createElement(
                        "div",
                        { className: "w3-container primary-color w3-text-white" },
                        _react2.default.createElement(
                            "h2",
                            null,
                            "Reset Password"
                        )
                    ),
                    success && _react2.default.createElement(
                        "div",
                        { className: "w3-panel w3-margin w3-green" },
                        _react2.default.createElement(
                            "p",
                            null,
                            message
                        )
                    ),
                    errors.global && _react2.default.createElement(
                        "div",
                        { className: "w3-panel w3-margin w3-red" },
                        _react2.default.createElement(
                            "p",
                            null,
                            errors.global
                        )
                    ),
                    _react2.default.createElement(
                        "form",
                        { className: "w3-container", onSubmit: this.onSubmit },
                        _react2.default.createElement(_FormControl2.default, { error: errors.password, label: "New Password", name: "password", type: "password", value: password, onChange: this.onChange }),
                        errors.password && _react2.default.createElement(
                            "span",
                            { className: "w3-text-red" },
                            errors.password
                        ),
                        _react2.default.createElement(_FormControl2.default, { error: errors.confirmPassword, label: "Confirm Password", name: "confirmPassword", type: "password", value: confirmPassword, onChange: this.onChange }),
                        errors.confirmPassword && _react2.default.createElement(
                            "span",
                            { className: "w3-text-red" },
                            errors.confirmPassword
                        ),
                        _react2.default.createElement("p", null),
                        _react2.default.createElement(_Button2.default, { isLoading: isLoading, text: "Reset Password", loadingText: "Resetting Password" }),
                        _react2.default.createElement(
                            "span",
                            { className: "w3-right w3-padding" },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/login" },
                                success ? "Login" : "Cancel"
                            )
                        ),
                        _react2.default.createElement("p", null)
                    )
                )
            );
        }
    }]);

    return ResetPassword;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ resetPassword: _merchantActions.resetPassword }, dispatch);
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ResetPassword);

/***/ })

});