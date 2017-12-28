webpackJsonp([2],{

/***/ 726:
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

var _validation = __webpack_require__(283);

var _redux = __webpack_require__(47);

var _reactRedux = __webpack_require__(80);

var _merchantActions = __webpack_require__(163);

var _reactRouterDom = __webpack_require__(68);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForgotPassword = function (_Component) {
    _inherits(ForgotPassword, _Component);

    function ForgotPassword() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ForgotPassword);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ForgotPassword.__proto__ || Object.getPrototypeOf(ForgotPassword)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            businessShortcode: '',
            errors: {},
            isLoading: false
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onSubmit = function (e) {
            e.preventDefault();
            _this.setState({
                isLoading: true
            });
            var errors = (0, _validation.validateForgotPasswordInput)(_this.state);
            if (Object.keys(errors).length) {
                _this.setState({
                    errors: errors,
                    isLoading: false
                });
            } else {
                _this.setState({
                    errors: {}
                });
                _this.props.resetMerchantPassword({ businessShortcode: _this.state.businessShortcode }).then(function (response) {
                    if (typeof response === "string") {
                        _this.setState({
                            isLoading: false,
                            businessShortcode: '',
                            errors: {
                                global: response
                            }
                        });
                    }
                }).catch(function (err) {
                    return console.log(err);
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ForgotPassword, [{
        key: "render",
        value: function render() {
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
                            "Forgot Password?"
                        )
                    ),
                    this.state.errors.global && _react2.default.createElement(
                        "div",
                        { className: "w3-panel w3-margin w3-red" },
                        _react2.default.createElement(
                            "p",
                            null,
                            this.state.errors.global
                        )
                    ),
                    _react2.default.createElement(
                        "form",
                        { className: "w3-container", onSubmit: this.onSubmit },
                        _react2.default.createElement(_FormControl2.default, { error: this.state.errors.businessShortcode, label: "Business Shortcode", name: "businessShortcode", type: "text", value: this.state.businessShortcode, onChange: this.onChange }),
                        this.state.errors.businessShortcode && _react2.default.createElement(
                            "span",
                            { className: "w3-text-red" },
                            this.state.errors.businessShortcode
                        ),
                        _react2.default.createElement("p", null),
                        _react2.default.createElement(_Button2.default, { isLoading: this.state.isLoading, text: "Send reset email", loadingText: "Sending reset email" }),
                        _react2.default.createElement(
                            "span",
                            { className: "w3-right w3-padding" },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/login" },
                                "Cancel"
                            )
                        ),
                        _react2.default.createElement("p", null)
                    )
                )
            );
        }
    }]);

    return ForgotPassword;
}(_react.Component);

var mapDispathToProps = function mapDispathToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ resetMerchantPassword: _merchantActions.resetMerchantPassword }, dispatch);
};

ForgotPassword.protoTypes = {
    resetMerchantPassword: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRedux.connect)(null, mapDispathToProps)(ForgotPassword);

/***/ })

});