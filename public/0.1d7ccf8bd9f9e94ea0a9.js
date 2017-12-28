webpackJsonp([0],{

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _TopContainer = __webpack_require__(729);

var _TopContainer2 = _interopRequireDefault(_TopContainer);

var _Sidebar = __webpack_require__(730);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Overlay = __webpack_require__(731);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(80);

var _jsonwebtoken = __webpack_require__(284);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dashboard = function Dashboard(_ref) {
    var token = _ref.token,
        displaySidebar = _ref.displaySidebar;

    var decoded = _jsonwebtoken2.default.decode(token, { complete: true });
    var merchantName = void 0;
    try {
        merchantName = decoded.payload.name;
    } catch (e) {
        merchantName = null;
    }
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_TopContainer2.default, { merchantName: merchantName }),
        _react2.default.createElement("br", null),
        _react2.default.createElement("br", null),
        _react2.default.createElement(_Sidebar2.default, { displaySidebar: displaySidebar }),
        displaySidebar && _react2.default.createElement(_Overlay2.default, null)
    );
};

Dashboard.propTypes = {
    token: _propTypes2.default.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        token: state.merchant.token,
        displaySidebar: state.merchant.displaySidebar
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Dashboard);

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(80);

var _redux = __webpack_require__(47);

var _merchantActions = __webpack_require__(163);

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
                        { className: "w3-bar-item w3-black w3-button w3-text-white w3-hover-none w3-hover-text-light-grey", onClick: merchantLogout },
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

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(_ref) {
    var displaySidebar = _ref.displaySidebar;

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
                { href: "#", className: "w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black", title: "close menu" },
                _react2.default.createElement("i", { className: "fa fa-remove fa-fw" }),
                "\xA0 Close Menu"
            ),
            _react2.default.createElement(
                "a",
                { href: "#", className: "w3-bar-item w3-button w3-padding primary-color w3-text-white" },
                _react2.default.createElement("i", { className: "fa fa-users fa-fw" }),
                "\xA0 Overview"
            ),
            _react2.default.createElement(
                "a",
                { href: "#", className: "w3-bar-item w3-button w3-padding" },
                _react2.default.createElement("i", { className: "fa fa-money fa-fw" }),
                "  Payments"
            ),
            _react2.default.createElement(
                "a",
                { href: "#", className: "w3-bar-item w3-button w3-padding" },
                _react2.default.createElement("i", { className: "fa fa-users fa-fw" }),
                "  Customers"
            ),
            _react2.default.createElement(
                "a",
                { href: "#", className: "w3-bar-item w3-button w3-padding" },
                _react2.default.createElement("i", { className: "fa fa-sitemap fa-fw" }),
                "\xA0 Merchant Profile"
            ),
            _react2.default.createElement(
                "a",
                { href: "#", className: "w3-bar-item w3-button w3-padding" },
                _react2.default.createElement("i", { className: "fa fa-file fa-fw" }),
                "\xA0 Reports"
            ),
            _react2.default.createElement(
                "a",
                { href: "#", className: "w3-bar-item w3-button w3-padding" },
                _react2.default.createElement("i", { className: "fa fa-shopping-cart fa-fw" }),
                "\xA0 Marketing"
            )
        )
    );
};

exports.default = Sidebar;

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = function Overlay() {
    return _react2.default.createElement("div", { className: "w3-overlay w3-hide-large w3-animate-opacity", style: { cursor: "pointer", display: "block" }, title: "close side menu",
        id: "myOverlay" });
};

exports.default = Overlay;

/***/ })

});