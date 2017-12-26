webpackJsonp([0],{

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _TopContainer = __webpack_require__(728);

var _TopContainer2 = _interopRequireDefault(_TopContainer);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(80);

var _jsonwebtoken = __webpack_require__(283);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dashboard = function Dashboard(_ref) {
    var token = _ref.token;

    var decoded = _jsonwebtoken2.default.decode(token, { complete: true });
    var merchantName = void 0;
    try {
        merchantName = decoded.payload.name;
    } catch (e) {
        merchantName = null;
    }

    return _react2.default.createElement(_TopContainer2.default, { merchantName: merchantName });
};

Dashboard.propTypes = {
    token: _propTypes2.default.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        token: state.merchant.token
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Dashboard);

/***/ }),

/***/ 728:
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

var _redux = __webpack_require__(60);

var _merchantActions = __webpack_require__(279);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopContainer = function TopContainer(_ref) {
    var merchantName = _ref.merchantName,
        merchantLogout = _ref.merchantLogout;

    return _react2.default.createElement(
        "div",
        { className: "w3-top" },
        _react2.default.createElement(
            "div",
            { className: "w3-bar primary-color-text w3-large w3-card-4" },
            _react2.default.createElement(
                "button",
                { className: "w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" },
                _react2.default.createElement("i", { className: "fa fa-bars" }),
                " \xA0Menu"
            ),
            _react2.default.createElement(
                "div",
                { className: "w3-dropdown-hover w3-right" },
                _react2.default.createElement(
                    "button",
                    { className: "w3-button w3-white w3-text-teal w3-hover-teal w3-hover-text-white" },
                    merchantName,
                    " ",
                    _react2.default.createElement("i", { className: "fa fa-caret-down" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "w3-dropdown-content w3-bar-block w3-border", style: { right: 0 } },
                    _react2.default.createElement(
                        "button",
                        { className: "w3-bar-item w3-button w3-hover-teal w3-hover-text-white", onClick: merchantLogout },
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
    return (0, _redux.bindActionCreators)({ merchantLogout: _merchantActions.merchantLogout }, dispatch);
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(TopContainer);

/***/ })

});