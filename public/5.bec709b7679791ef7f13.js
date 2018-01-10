webpackJsonp([5],{

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var icon = _ref.icon,
        title = _ref.title;

    return _react2.default.createElement(
        "header",
        { className: "w3-container" },
        _react2.default.createElement(
            "h5",
            null,
            _react2.default.createElement(
                "b",
                null,
                _react2.default.createElement("i", { "class": "fa " + icon }),
                " ",
                title
            )
        )
    );
};

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        "footer",
        { className: "w3-container w3-center w3-padding-16" },
        _react2.default.createElement(
            "h4",
            null,
            "Rebus"
        ),
        _react2.default.createElement(
            "p",
            null,
            "\xA9 Copyright 2017"
        )
    );
};

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(768);

var _Header2 = _interopRequireDefault(_Header);

var _DisplayBoxes = __webpack_require__(775);

var _DisplayBoxes2 = _interopRequireDefault(_DisplayBoxes);

var _Footer = __webpack_require__(769);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overview = function Overview() {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, { title: "My Dashboard", icon: "fa-dashboard" }),
        _react2.default.createElement(_DisplayBoxes2.default, null),
        _react2.default.createElement(_Footer2.default, null)
    );
};

exports.default = Overview;

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _DisplayBox = __webpack_require__(776);

var _DisplayBox2 = _interopRequireDefault(_DisplayBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        "div",
        { className: "w3-row-padding w3-margin-bottom" },
        _react2.default.createElement(
            "div",
            { className: "w3-third" },
            _react2.default.createElement(_DisplayBox2.default, { title: "Payments", value: "123", icon: "fa-money" })
        ),
        _react2.default.createElement(
            "div",
            { className: "w3-third" },
            _react2.default.createElement(_DisplayBox2.default, { title: "Account Balance", value: "33,334", icon: "fa-balance-scale" })
        ),
        _react2.default.createElement(
            "div",
            { className: "w3-third" },
            _react2.default.createElement(_DisplayBox2.default, { title: "Customers", value: "23", icon: "fa-users" })
        )
    );
};

/***/ }),

/***/ 776:
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

var DisplayBox = function DisplayBox(_ref) {
    var title = _ref.title,
        value = _ref.value,
        icon = _ref.icon;

    return _react2.default.createElement(
        "div",
        { className: "w3-container primary-color w3-text-white w3-padding-16 w3-card-4" },
        _react2.default.createElement(
            "div",
            { className: "w3-left" },
            _react2.default.createElement("i", { className: "fa " + icon + " w3-xxxlarge" })
        ),
        _react2.default.createElement(
            "div",
            { className: "w3-right" },
            _react2.default.createElement(
                "h3",
                null,
                "Ksh. " + value
            )
        ),
        _react2.default.createElement("div", { className: "w3-clear" }),
        _react2.default.createElement(
            "h4",
            null,
            title
        )
    );
};

DisplayBox.propTypes = {
    title: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired,
    icon: _propTypes2.default.string.isRequired
};

exports.default = DisplayBox;

/***/ })

});