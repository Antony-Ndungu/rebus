webpackJsonp([6],{

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

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(769);

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = __webpack_require__(768);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Payments = function Payments() {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, { title: "Payments", icon: "fa-money" }),
        _react2.default.createElement(
            "div",
            { className: "w3-container" },
            _react2.default.createElement(
                "div",
                { className: "w3-responsive" },
                _react2.default.createElement(
                    "form",
                    { className: "w3-container" },
                    _react2.default.createElement(
                        "label",
                        null,
                        "Transaction ID"
                    ),
                    _react2.default.createElement("input", { className: "w3-input", type: "text" })
                )
            )
        ),
        _react2.default.createElement(_Footer2.default, null)
    );
};

exports.default = Payments;

/***/ })

});