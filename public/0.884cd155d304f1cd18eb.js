webpackJsonp([0],{

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _TopContainer = __webpack_require__(773);

var _TopContainer2 = _interopRequireDefault(_TopContainer);

var _Sidebar = __webpack_require__(774);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Overlay = __webpack_require__(775);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _axios = __webpack_require__(84);

var _axios2 = _interopRequireDefault(_axios);

var _socket = __webpack_require__(306);

var _socket2 = _interopRequireDefault(_socket);

var _Main = __webpack_require__(776);

var _Main2 = _interopRequireDefault(_Main);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(83);

var _redux = __webpack_require__(48);

var _jsonwebtoken = __webpack_require__(173);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _reactRouterDom = __webpack_require__(71);

var _merchantActions = __webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
    _inherits(Dashboard, _Component);

    function Dashboard() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dashboard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call.apply(_ref, [this].concat(args))), _this), _this.decoded = _jsonwebtoken2.default.decode(_this.props.token, { complete: true }), _this.socket = (0, _socket2.default)(), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dashboard, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.socket.disconnect();
            localStorage.setItem("dashboardNavigator", this.props.dashboardNavigator);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var businessShortcode = void 0;
            try {
                businessShortcode = this.decoded.payload.businessShortcode;
            } catch (err) {
                businessShortcode = 1;
            }
            this.socket.on("new customer", function (data) {
                _this2.props.setCustomersNumber(data.count);
            });

            this.socket.on("new payment", function (data) {
                _this2.props.setPaymentsNumber(data.count);
                _this2.props.setAccountBalance(data.accountBalance);
            });

            this.socket.emit("details", {
                businessShortcode: businessShortcode
            });

            _axios2.default.get("/api/count-customers?businessShortcode=" + businessShortcode).then(function (_ref2) {
                var data = _ref2.data;

                if (data.confirmation === "fail") {
                    if (data.auth == "failed") {
                        _this2.props.merchantLogout();
                    }
                    console.log(data);
                }
                if (data.confirmation === "success") {
                    _this2.props.setCustomersNumber(+data.count);
                    _axios2.default.get("/api/count-payments?businessShortcode=" + businessShortcode).then(function (_ref3) {
                        var data = _ref3.data;

                        if (data.confirmation === "fail") {
                            if (data.auth === "failed") {
                                _this2.props.merchantLogout();
                            }
                            console.log(data);
                        }
                        if (data.confirmation === "success") {
                            _this2.props.setPaymentsNumber(+data.count);
                            _axios2.default.get("/api/account-balance?businessShortcode=" + businessShortcode).then(function (_ref4) {
                                var data = _ref4.data;

                                if (data.confirmation === "fail") {
                                    if (data.auth == "failed") {
                                        _this2.props.merchantLogout();
                                    }
                                    console.log(data);
                                }
                                if (data.confirmation === "success") {
                                    _this2.props.setAccountBalance(data.accountBalance);
                                }
                            });
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                displaySidebar = _props.displaySidebar,
                navigateDashboard = _props.navigateDashboard,
                closeSidebar = _props.closeSidebar,
                dashboardNavigator = _props.dashboardNavigator;


            var merchantName = void 0;
            try {
                merchantName = this.decoded.payload.name;
            } catch (e) {
                merchantName = null;
            }
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_TopContainer2.default, { merchantName: merchantName }),
                _react2.default.createElement("br", null),
                _react2.default.createElement(_Sidebar2.default, { displaySidebar: displaySidebar, navigateDashboard: navigateDashboard, dashboardNavigator: dashboardNavigator, closeSidebar: closeSidebar }),
                displaySidebar && _react2.default.createElement(_Overlay2.default, { closeSidebar: closeSidebar }),
                _react2.default.createElement(_Main2.default, { dashboardNavigator: dashboardNavigator })
            );
        }
    }]);

    return Dashboard;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        token: state.merchant.token,
        displaySidebar: state.merchant.displaySidebar,
        dashboardNavigator: state.merchant.dashboardNavigator
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ navigateDashboard: _merchantActions.navigateDashboard, closeSidebar: _merchantActions.closeSidebar, setAccountBalance: _merchantActions.setAccountBalance, setCustomersNumber: _merchantActions.setCustomersNumber, setPaymentsNumber: _merchantActions.setPaymentsNumber, merchantLogout: _merchantActions.merchantLogout }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(83);

var _redux = __webpack_require__(48);

var _merchantActions = __webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopContainer = function TopContainer(_ref) {
    var merchantName = _ref.merchantName,
        merchantLogout = _ref.merchantLogout,
        openSidebar = _ref.openSidebar;

    return _react2.default.createElement(
        "div",
        { className: "w3-top w3-margin-bottom w3-black", style: { "z-index": 4 } },
        _react2.default.createElement(
            "div",
            { className: "w3-bar w3-large w3-card-4" },
            _react2.default.createElement(
                "button",
                { className: "w3-bar-item w3-button w3-hide-large w3-text-white w3-hover-none w3-hover-text-light-grey", onClick: openSidebar },
                _react2.default.createElement("i", { className: "fa fa-bars" }),
                " \xA0Menu"
            ),
            _react2.default.createElement(
                "div",
                { className: "w3-dropdown-hover w3-right" },
                _react2.default.createElement(
                    "button",
                    { className: "w3-button w3-text-white w3-hover-none w3-hover-text-light-grey" },
                    merchantName,
                    " ",
                    _react2.default.createElement("i", { className: "fa fa-caret-down" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "w3-dropdown-content w3-bar-block w3-border", style: { right: 0 } },
                    _react2.default.createElement(
                        "button",
                        { className: "w3-bar-item w3-black w3-button w3-text-white w3-hover-black w3-hover-text-light-grey", onClick: merchantLogout },
                        "Log out ",
                        _react2.default.createElement("i", { className: "w3-right fa fa-sign-out" })
                    )
                )
            )
        )
    );
};

TopContainer.propTypes = {
    merchantName: _propTypes2.default.string.isRequired,
    merchantLogout: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ merchantLogout: _merchantActions.merchantLogout, openSidebar: _merchantActions.openSidebar }, dispatch);
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(TopContainer);

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(71);

var _classnames = __webpack_require__(174);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(_ref) {
    var displaySidebar = _ref.displaySidebar,
        dashboardNavigator = _ref.dashboardNavigator,
        navigateDashboard = _ref.navigateDashboard,
        closeSidebar = _ref.closeSidebar;

    var style = displaySidebar ? { "z-index": 3, width: "300px", display: "block" } : { "z-index": 3, width: "300px" };
    return _react2.default.createElement(
        "nav",
        { className: "w3-sidebar w3-collapse w3-white w3-animate-left", style: style, id: "mySidebar" },
        _react2.default.createElement("br", null),
        _react2.default.createElement(
            "div",
            { className: "w3-container" },
            _react2.default.createElement(
                "h5",
                null,
                "Dashboard"
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "w3-bar-block" },
            _react2.default.createElement(
                "a",
                { href: "#", className: "w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black", title: "close menu", onClick: closeSidebar },
                _react2.default.createElement("i", { className: "fa fa-remove fa-fw" }),
                "\xA0 Close Menu"
            ),
            _react2.default.createElement(
                "a",
                { href: "#", className: (0, _classnames2.default)("w3-bar-item w3-button w3-padding", { "primary-color": dashboardNavigator === 0, "w3-text-white": dashboardNavigator === 0 }), onClick: function onClick() {
                        return navigateDashboard(0);
                    } },
                _react2.default.createElement("i", { className: "fa fa-users fa-fw" }),
                "\xA0 Overview"
            ),
            _react2.default.createElement(
                "a",
                { href: "#", className: (0, _classnames2.default)("w3-bar-item w3-button w3-padding", { "primary-color": dashboardNavigator === 1, "w3-text-white": dashboardNavigator === 1 }), onClick: function onClick() {
                        return navigateDashboard(1);
                    } },
                _react2.default.createElement("i", { className: "fa fa-money fa-fw" }),
                "  Payments"
            ),
            _react2.default.createElement(
                "a",
                { to: "#", className: (0, _classnames2.default)("w3-bar-item w3-button w3-padding", { "primary-color": dashboardNavigator === 2, "w3-text-white": dashboardNavigator === 2 }), onClick: function onClick() {
                        return navigateDashboard(2);
                    } },
                _react2.default.createElement("i", { className: "fa fa-users fa-fw" }),
                "  Customers"
            ),
            _react2.default.createElement(
                "a",
                { href: "#", className: (0, _classnames2.default)("w3-bar-item w3-button w3-padding", { "primary-color": dashboardNavigator === 3, "w3-text-white": dashboardNavigator === 3 }) },
                _react2.default.createElement("i", { className: "fa fa-sitemap fa-fw" }),
                "\xA0 Merchant Profile"
            ),
            _react2.default.createElement(
                "a",
                { href: "#", className: (0, _classnames2.default)("w3-bar-item w3-button w3-padding", { "primary-color": dashboardNavigator === 4, "w3-text-white": dashboardNavigator === 4 }) },
                _react2.default.createElement("i", { className: "fa fa-file fa-fw" }),
                "\xA0 Reports"
            ),
            _react2.default.createElement(
                "a",
                { href: "#", className: (0, _classnames2.default)("w3-bar-item w3-button w3-padding", { "primary-color": dashboardNavigator === 5, "w3-text-white": dashboardNavigator === 5 }) },
                _react2.default.createElement("i", { className: "fa fa-shopping-cart fa-fw" }),
                "\xA0 Marketing"
            )
        )
    );
};

Sidebar.propTypes = {
    displaySidebar: _propTypes2.default.bool.isRequired,
    dashboardNavigator: _propTypes2.default.number.isRequired,
    navigateDashboard: _propTypes2.default.func.isRequired,
    closeSidebar: _propTypes2.default.func.isRequired
};

exports.default = Sidebar;

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = function Overlay(_ref) {
    var closeSidebar = _ref.closeSidebar;

    return _react2.default.createElement("div", { className: "w3-overlay w3-hide-large w3-animate-opacity", style: { cursor: "pointer", display: "block" }, title: "close side menu",
        id: "myOverlay", onClick: closeSidebar });
};

Overlay.propTypes = {
    closeSidebar: _propTypes2.default.func.isRequired
};

exports.default = Overlay;

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _AsyncComponent = __webpack_require__(307);

var _AsyncComponent2 = _interopRequireDefault(_AsyncComponent);

var _reactRouterDom = __webpack_require__(71);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncOverview = (0, _AsyncComponent2.default)(function () {
    return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 777));
});
var AsyncPayments = (0, _AsyncComponent2.default)(function () {
    return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 780));
});
var AsyncCustomers = (0, _AsyncComponent2.default)(function () {
    return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 784));
});

var Main = function Main(_ref) {
    var dashboardNavigator = _ref.dashboardNavigator;

    var content = undefined;
    switch (dashboardNavigator) {
        case 0:
            content = _react2.default.createElement(AsyncOverview, null);
            break;
        case 1:
            content = _react2.default.createElement(AsyncPayments, null);
            break;
        case 2:
            content = _react2.default.createElement(AsyncCustomers, null);
            break;
    }
    return _react2.default.createElement(
        "div",
        { className: "w3-main", style: { "margin-left": "300px", "margin-top": "20px" } },
        content
    );
};

Main.propTypes = {
    dashboardNavigator: _propTypes2.default.number.isRequired
};

exports.default = Main;

/***/ })

});