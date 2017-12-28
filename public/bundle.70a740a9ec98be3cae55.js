webpackJsonp([4],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_MERCHANT = exports.SET_MERCHANT = "SET_MERCHANT";
var LOGOUT_MERCHANT = exports.LOGOUT_MERCHANT = "LOGOUT_MERCHANT";
var RESET_PASSWORD_EMAIL_SENT_MESSAGE = exports.RESET_PASSWORD_EMAIL_SENT_MESSAGE = "RESET_PASSWORD_EMAIL_SENT_MESSAGE";
var RESET_PASSWORD = exports.RESET_PASSWORD = "RESET_PASSWORD";
var RESET_PASSWORD_SET = exports.RESET_PASSWORD_SET = "RESET_PASSWORD_SET";
var OPEN_SIDEBAR = exports.OPEN_SIDEBAR = "OPEN_SIDEBAR";
var CLOSE_SIDEBAR = exports.CLOSE_SIDEBAR = "CLOSE_SIDEBAR";

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resetPasswordReset = exports.resetPassword = exports.resetMerchantPassword = exports.closeSidebar = exports.openSidebar = exports.merchantLogout = exports.merchantLogin = undefined;

var _axios = __webpack_require__(144);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(146);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var merchantLogin = exports.merchantLogin = function merchantLogin(credentials) {
    return function (dispatch) {
        return _axios2.default.post("/api/authenticate", credentials).then(function (response) {
            if (response.data.errors) {
                return { errors: response.data.errors };
            } else if (response.data.confirmation === "fail") {
                return { errors: { global: response.data.message } };
            } else if (response.data.confirmation === "success") {
                dispatch({
                    type: _constants.SET_MERCHANT,
                    token: response.data.token
                });
                localStorage.setItem("token", response.data.token);
                return { errors: {} };
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
};

var merchantLogout = exports.merchantLogout = function merchantLogout() {
    localStorage.removeItem("token");
    return {
        type: _constants.LOGOUT_MERCHANT
    };
};

var openSidebar = exports.openSidebar = function openSidebar() {
    return {
        type: _constants.OPEN_SIDEBAR
    };
};

var closeSidebar = exports.closeSidebar = function closeSidebar() {
    return {
        type: _constants.CLOSE_SIDEBAR
    };
};

var resetMerchantPassword = exports.resetMerchantPassword = function resetMerchantPassword(data) {
    return function (dispatch) {
        return _axios2.default.post("/api/password-reset", data).then(function (response) {
            if (response.data.confirmation === "success") {
                dispatch({
                    type: _constants.RESET_PASSWORD_EMAIL_SENT_MESSAGE,
                    payload: response.data.message
                });
            } else if (response.data.confirmation === "fail") {
                return response.data.message;
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
};

var resetPassword = exports.resetPassword = function resetPassword(data) {
    return function (dispatch) {
        return _axios2.default.post("/api/reset-password", data);
    };
};

var resetPasswordReset = exports.resetPasswordReset = function resetPasswordReset() {
    return {
        type: _constants.RESET_PASSWORD_SET
    };
};

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuccessAlert = function SuccessAlert(_ref) {
    var subject = _ref.subject,
        message = _ref.message;

    return _react2.default.createElement(
        "div",
        { className: "w3-panel center w3-green w3-round-large" },
        _react2.default.createElement(
            "h3",
            null,
            subject
        ),
        _react2.default.createElement(
            "p",
            null,
            message
        )
    );
};

exports.default = SuccessAlert;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(226);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
                "label",
                { className: (0, _classnames2.default)("", { "w3-text-red": props.error }) },
                props.label
            ),
            _react2.default.createElement("input", { className: (0, _classnames2.default)("w3-input", { "w3-border-red": props.error }), name: props.name, type: props.type, value: props.value, onChange: props.onChange })
        )
    );
};

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var isLoading = _ref.isLoading,
        text = _ref.text,
        loadingText = _ref.loadingText;

    return _react2.default.createElement(
        "button",
        {
            disabled: isLoading,
            className: "w3-btn primary-color w3-text-white w3-border" },
        isLoading ? loadingText : text,
        " ",
        isLoading ? _react2.default.createElement("i", { className: "fa fa-circle-o-notch fa-spin" }) : null
    );
};

exports.default = Button;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateResetPasswordInput = exports.validateForgotPasswordInput = exports.validateLoginInput = undefined;

var _validator = __webpack_require__(227);

var validateLoginInput = exports.validateLoginInput = function validateLoginInput(credentials) {
    var errors = {};

    if ((0, _validator.isEmpty)(credentials.businessShortcode)) {
        errors.businessShortcode = "This field is required.";
    }

    if (isNaN(Number(credentials.businessShortcode))) {
        errors.businessShortcode = "Only numeric characters are allowed.";
    }

    if ((0, _validator.isEmpty)(credentials.password)) {
        errors.password = "This field is required.";
    }
    return errors;
};

var validateForgotPasswordInput = exports.validateForgotPasswordInput = function validateForgotPasswordInput(data) {
    var errors = {};

    if ((0, _validator.isEmpty)(data.businessShortcode)) {
        errors.businessShortcode = "This field is required.";
    }
    if (isNaN(Number(data.businessShortcode))) {
        errors.businessShortcode = "Only numeric characters are allowed.";
    }
    return errors;
};

var validateResetPasswordInput = exports.validateResetPasswordInput = function validateResetPasswordInput(data) {
    var errors = {};

    if ((0, _validator.isEmpty)(data.password)) {
        errors.password = "This field is required.";
    }
    if ((0, _validator.isEmpty)(data.confirmPassword)) {
        errors.confirmPassword = "This field is required.";
    }if (!Object.keys(errors).length) {
        if (!(0, _validator.equals)(data.password, data.confirmPassword)) {
            errors.global = "Passwords must match.";
        }
    }

    return errors;
};

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(164);
module.exports = __webpack_require__(487);


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(493);

var _App2 = _interopRequireDefault(_App);

var _reactRouterDom = __webpack_require__(68);

var _reactRedux = __webpack_require__(80);

var _store = __webpack_require__(718);

var _store2 = _interopRequireDefault(_store);

var _constants = __webpack_require__(146);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = localStorage.getItem("token");
if (token) {
    _store2.default.dispatch({
        type: _constants.SET_MERCHANT,
        token: token
    });
}

_reactDom2.default.render(_react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store2.default },
        _react2.default.createElement(_App2.default, null)
    )
), document.getElementById("app"));

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(68);

var _PrivateRoute = __webpack_require__(513);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _reactRedux = __webpack_require__(80);

var _redux = __webpack_require__(47);

var _axios = __webpack_require__(144);

var _axios2 = _interopRequireDefault(_axios);

var _merchantActions = __webpack_require__(163);

var _Login = __webpack_require__(555);

var _Login2 = _interopRequireDefault(_Login);

var _SuccessAlert = __webpack_require__(238);

var _SuccessAlert2 = _interopRequireDefault(_SuccessAlert);

var _AsyncComponent = __webpack_require__(609);

var _AsyncComponent2 = _interopRequireDefault(_AsyncComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AsyncForgotPassword = (0, _AsyncComponent2.default)(function () {
    return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 726));
});
var AsyncResetPassword = (0, _AsyncComponent2.default)(function () {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 727));
});
var AsyncDashboard = (0, _AsyncComponent2.default)(function () {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 728));
});
var AsyncSucessAlert = (0, _AsyncComponent2.default)(function () {
    return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 238));
});

(function () {
    var token = localStorage.getItem("token");
    if (token) {
        _axios2.default.defaults.headers.common['auth-token'] = token;
    } else {
        _axios2.default.defaults.headers.common['auth-token'] = null;
        /*if setting null does not remove `Authorization` header then try     
          delete axios.defaults.headers.common['Authorization'];
        */
    }
})();

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.props.resetPasswordReset();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", render: function render() {
                        return _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/login" },
                                "login"
                            )
                        );
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/login", component: _Login2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/reset-password", component: AsyncResetPassword }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/forgot-password", render: function render() {
                        return _this2.props.passwordReset.emailSent ? _react2.default.createElement(AsyncSucessAlert, { subject: "Email sent!", message: _this2.props.passwordReset.message }) : _react2.default.createElement(AsyncForgotPassword, null);
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/email-sent", component: _SuccessAlert2.default }),
                _react2.default.createElement(_PrivateRoute2.default, { path: "/dashboard", Component: AsyncDashboard, authed: this.props.isAuthenticated })
            );
        }
    }]);

    return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        isAuthenticated: state.merchant.isAuthenticated,
        token: state.merchant.token,
        passwordReset: state.merchant.passwordReset
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ resetPasswordReset: _merchantActions.resetPasswordReset }, dispatch);
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivateRoute = function PrivateRoute(_ref) {
    var Component = _ref.Component,
        authed = _ref.authed,
        location = _ref.location,
        path = _ref.path;


    return _react2.default.createElement(_reactRouterDom.Route, { path: path, render: function render() {
            return authed === true ? _react2.default.createElement(Component, null) : _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/login' } });
        } });
};

exports.default = PrivateRoute;

/***/ }),

/***/ 555:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            businessShortcode: '',
            password: '',
            errors: {},
            isLoading: false
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onSubmit = function (e) {
            e.preventDefault();
            _this.setState({
                isLoading: true
            });

            var errors = (0, _validation.validateLoginInput)(_this.state);

            if (Object.keys(errors).length) {
                _this.setState({
                    errors: errors,
                    isLoading: false
                });
            } else {
                _this.setState({
                    errors: errors
                });
                _this.props.merchantLogin({
                    businessShortcode: _this.state.businessShortcode,
                    password: _this.state.password
                }).then(function (_ref2) {
                    var errors = _ref2.errors;

                    if (Object.keys(errors).length) {
                        _this.setState({
                            errors: errors,
                            businessShortcode: "",
                            password: "",
                            isLoading: false
                        });
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Login, [{
        key: "render",
        value: function render() {

            if (this.props.isAuthenticated) {
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: "/dashboard" });
            }

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
                            "Login"
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
                        _react2.default.createElement(_FormControl2.default, { error: this.state.errors.password, label: "Password", name: "password", type: "password", value: this.state.password, onChange: this.onChange }),
                        this.state.errors.password && _react2.default.createElement(
                            "span",
                            { className: "w3-text-red" },
                            this.state.errors.password
                        ),
                        _react2.default.createElement("p", null),
                        _react2.default.createElement(_Button2.default, { isLoading: this.state.isLoading, text: "Log In", loadingText: "Loggin In" }),
                        _react2.default.createElement(
                            "span",
                            { className: "w3-right w3-padding" },
                            "Forgot ",
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/forgot-password" },
                                "password?"
                            )
                        ),
                        _react2.default.createElement("p", null)
                    )
                )
            );
        }
    }]);

    return Login;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ merchantLogin: _merchantActions.merchantLogin }, dispatch);
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        isAuthenticated: state.merchant.isAuthenticated
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (importComponent) {
    var AsynComponent = function (_Component) {
        _inherits(AsynComponent, _Component);

        function AsynComponent() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, AsynComponent);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AsynComponent.__proto__ || Object.getPrototypeOf(AsynComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                component: null
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(AsynComponent, [{
            key: "componentDidMount",
            value: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var _ref3, component;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return importComponent();

                                case 2:
                                    _ref3 = _context.sent;
                                    component = _ref3.default;

                                    this.setState({
                                        component: component
                                    });

                                case 5:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function componentDidMount() {
                    return _ref2.apply(this, arguments);
                }

                return componentDidMount;
            }()
        }, {
            key: "render",
            value: function render() {
                var Component = this.state.component;

                return Component ? _react2.default.createElement(Component, this.props) : _react2.default.createElement("div", { className: "loader" });
            }
        }]);

        return AsynComponent;
    }(_react.Component);

    return AsynComponent;
};

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(47);

var _reducers = __webpack_require__(719);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxLogger = __webpack_require__(721);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(280);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = __webpack_require__(722);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxLogger2.default);

exports.default = (0, _redux.createStore)(_reducers2.default, (0, _reduxDevtoolsExtension.composeWithDevTools)(middleware));

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(47);

var _merchantReducer = __webpack_require__(720);

var _merchantReducer2 = _interopRequireDefault(_merchantReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    merchant: _merchantReducer2.default
});

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(146);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { isAuthenticated: false, token: null, displaySidebar: false, passwordReset: { emailSent: false, message: null } };
    var action = arguments[1];

    switch (action.type) {
        case _constants.SET_MERCHANT:
            state = Object.assign({}, state, { isAuthenticated: true, token: action.token });
            break;
        case _constants.LOGOUT_MERCHANT:
            state = Object.assign({}, state, { isAuthenticated: false, token: null });
            break;
        case _constants.RESET_PASSWORD_EMAIL_SENT_MESSAGE:
            state = Object.assign({}, state, {
                passwordReset: Object.assign.apply(Object, [{}].concat(_toConsumableArray(state.passwordReset), [{ emailSent: true, message: action.payload }]))
            });
            break;
        case _constants.RESET_PASSWORD_EMAIL_SENT_MESSAGE:
            state = Object.assign({}, state, {
                passwordReset: Object.assign.apply(Object, [{}].concat(_toConsumableArray(state.passwordReset), [{ emailSent: false, message: null }]))
            });
            break;
        case _constants.CLOSE_SIDEBAR:
            state = Object.assign({}, state, { displaySidebar: false });
            break;
        case _constants.OPEN_SIDEBAR:
            state = Object.assign({}, state, { displaySidebar: !state.displaySidebar });
    }
    return state;
};

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(47).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ })

},[285]);