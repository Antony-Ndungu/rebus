webpackJsonp([5],{

/***/ 771:
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

/***/ 772:
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

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(772);

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = __webpack_require__(771);

var _Header2 = _interopRequireDefault(_Header);

var _Payment = __webpack_require__(781);

var _Payment2 = _interopRequireDefault(_Payment);

var _jsonwebtoken = __webpack_require__(173);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _Pagination = __webpack_require__(782);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _PaymentSearchModal = __webpack_require__(783);

var _PaymentSearchModal2 = _interopRequireDefault(_PaymentSearchModal);

var _redux = __webpack_require__(48);

var _merchantActions = __webpack_require__(172);

var _reactRedux = __webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Payments = function (_Component) {
    _inherits(Payments, _Component);

    function Payments() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Payments);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Payments.__proto__ || Object.getPrototypeOf(Payments)).call.apply(_ref, [this].concat(args))), _this), _this.businessShortcode = _jsonwebtoken2.default.decode(_this.props.token, { complete: true }).payload.businessShortcode, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Payments, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.searchPayments({ businessShortcode: this.businessShortcode });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                docs = _props.docs,
                pages = _props.pages;

            var payments = docs.map(function (_ref2) {
                var id = _ref2.id,
                    transId = _ref2.transId,
                    msisdn = _ref2.msisdn,
                    transactionType = _ref2.transactionType,
                    accountNumber = _ref2.accountNumber,
                    amount = _ref2.amount,
                    timestamp = _ref2.timestamp;

                return _react2.default.createElement(_Payment2.default, { key: id,
                    transId: transId,
                    msisdn: msisdn,
                    transactionType: transactionType,
                    accountNumber: accountNumber,
                    amount: amount,
                    timestamp: timestamp
                });
            });
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Header2.default, { title: "Payments", icon: "fa-money" }),
                _react2.default.createElement(
                    "div",
                    { className: "w3-container" },
                    _react2.default.createElement(_PaymentSearchModal2.default, null),
                    _react2.default.createElement(
                        "div",
                        { className: "w3-responsive" },
                        this.props.fetching && _react2.default.createElement(
                            "div",
                            { className: "w3-center w3-text-teal" },
                            _react2.default.createElement(
                                "strong",
                                null,
                                "Fetching..."
                            )
                        ),
                        _react2.default.createElement(
                            "table",
                            { className: "w3-table-all w3-hoverable w3-card-4 w3-small w3-margin-top" },
                            _react2.default.createElement(
                                "thead",
                                null,
                                _react2.default.createElement(
                                    "tr",
                                    { className: "primary-color-text" },
                                    _react2.default.createElement(
                                        "th",
                                        null,
                                        "Transaction ID"
                                    ),
                                    _react2.default.createElement(
                                        "th",
                                        null,
                                        "MSISDN"
                                    ),
                                    _react2.default.createElement(
                                        "th",
                                        null,
                                        "Transaction Type"
                                    ),
                                    _react2.default.createElement(
                                        "th",
                                        null,
                                        "Amount"
                                    ),
                                    _react2.default.createElement(
                                        "th",
                                        null,
                                        "Timestamp"
                                    ),
                                    _react2.default.createElement(
                                        "th",
                                        null,
                                        "Account Number"
                                    ),
                                    _react2.default.createElement(
                                        "th",
                                        null,
                                        "Action"
                                    )
                                ),
                                payments
                            )
                        )
                    )
                ),
                _react2.default.createElement(_Pagination2.default, { searchPayments: this.props.searchPayments, businessShortcode: this.businessShortcode }),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return Payments;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ searchPayments: _merchantActions.searchPayments }, dispatch);
};
var mapStateToProps = function mapStateToProps(state) {
    return {
        token: state.merchant.token,
        docs: state.merchant.payments.docs,
        fetching: state.merchant.fetching
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Payments);

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Payment = function Payment(_ref) {
    var transId = _ref.transId,
        msisdn = _ref.msisdn,
        transactionType = _ref.transactionType,
        accountNumber = _ref.accountNumber,
        amount = _ref.amount,
        timestamp = _ref.timestamp;

    return _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
            "td",
            null,
            transId
        ),
        _react2.default.createElement(
            "td",
            null,
            msisdn
        ),
        _react2.default.createElement(
            "td",
            null,
            transactionType
        ),
        _react2.default.createElement(
            "td",
            null,
            amount
        ),
        _react2.default.createElement(
            "td",
            null,
            timestamp
        ),
        _react2.default.createElement(
            "td",
            null,
            accountNumber
        ),
        _react2.default.createElement(
            "td",
            null,
            _react2.default.createElement(
                "button",
                { className: "w3-btn primary-color w3-text-white w3-border w3-round-large" },
                _react2.default.createElement("i", { className: "fa fa-backward" }),
                " Reverse"
            )
        )
    );
};

exports.default = Payment;

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(174);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__(83);

var _redux = __webpack_require__(48);

var _merchantActions = __webpack_require__(172);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jsonwebtoken = __webpack_require__(173);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
    _inherits(Pagination, _Component);

    function Pagination() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Pagination);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currentPage: 1,
            start: 1,
            end: 5
        }, _this.businessShortcode = _jsonwebtoken2.default.decode(_this.props.token, { complete: true }).payload.businessShortcode, _this.next = function () {
            if (_this.state.end < _this.props.pages) {
                var businessShortcode = _this.businessShortcode;
                _this.setState({
                    start: _this.state.start + 1,
                    end: _this.state.end + 1
                });
                _this.props.searchPayments({ businessShortcode: businessShortcode, page: _this.state.currentPage + 1 });
                _this.setState({
                    currentPage: _this.state.currentPage + 1
                });
            }
        }, _this.previous = function () {
            if (_this.state.end > 1) {
                var businessShortcode = _this.businessShortcode;
                _this.setState({
                    start: _this.state.start - 1,
                    end: _this.state.end - 1
                });
                _this.props.searchPayments({ businessShortcode: businessShortcode, page: _this.state.currentPage - 1 });
                _this.setState({
                    currentPage: _this.state.currentPage - 1
                });
            }
        }, _this.navigate = function (pageNumber) {
            var businessShortcode = _this.businessShortcode;
            _this.setState({
                currentPage: pageNumber
            });
            _this.props.searchPayments({ businessShortcode: businessShortcode, page: pageNumber });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Pagination, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var paginationButtons = [];
            var _state = this.state,
                start = _state.start,
                end = _state.end;
            var pages = this.props.pages;

            var disableNext = end + 1 > pages;
            var disablePrevious = start < 2;
            if (pages >= 5) {
                var _loop = function _loop(i) {
                    paginationButtons.push(_react2.default.createElement(
                        "button",
                        { onClick: function onClick() {
                                return _this2.navigate(i);
                            }, className: (0, _classnames2.default)("w3-bar-item w3-button", { "primary-color": i === _this2.state.currentPage }) },
                        i
                    ));
                };

                for (var i = start; i < end + 1; i++) {
                    _loop(i);
                }
            } else {
                var _loop2 = function _loop2(i) {
                    paginationButtons.push(_react2.default.createElement(
                        "button",
                        { onClick: function onClick() {
                                return _this2.navigate(i);
                            }, className: (0, _classnames2.default)("w3-bar-item w3-button", { "primary-color": i === _this2.state.currentPage }) },
                        i
                    ));
                };

                for (var i = 1; i <= pages; i++) {
                    _loop2(i);
                }
            }
            return _react2.default.createElement(
                "div",
                { className: "w3-center w3-margin-top" },
                _react2.default.createElement(
                    "div",
                    { className: "w3-bar w3-border w3-round" },
                    _react2.default.createElement(
                        "button",
                        { disabled: disablePrevious, className: "w3-bar-item w3-button", onClick: this.previous },
                        "\xAB"
                    ),
                    paginationButtons,
                    _react2.default.createElement(
                        "button",
                        { disabled: disableNext, className: "w3-bar-item w3-button", onClick: this.next },
                        "\xBB"
                    )
                )
            );
        }
    }]);

    return Pagination;
}(_react.Component);

Pagination.propTypes = {
    pages: _propTypes2.default.number.isRequired,
    token: _propTypes2.default.string.isRequired,
    searchPayments: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        pages: state.merchant.payments.pages,
        token: state.merchant.token
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ searchPayments: _merchantActions.searchPayments }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Pagination);

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaymentSearchModal = function (_Component) {
    _inherits(PaymentSearchModal, _Component);

    function PaymentSearchModal() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PaymentSearchModal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PaymentSearchModal.__proto__ || Object.getPrototypeOf(PaymentSearchModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            display: "none"
        }, _this.displayModal = function () {
            _this.setState({
                display: "block"
            });
        }, _this.closeModal = function () {
            _this.setState({
                display: "none"
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PaymentSearchModal, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "button",
                    { className: "w3-btn w3-teal", onClick: this.displayModal },
                    _react2.default.createElement("i", { className: "fa fa-search" })
                ),
                _react2.default.createElement(
                    "div",
                    { id: "searchPayments", className: "w3-modal", style: { display: this.state.display } },
                    _react2.default.createElement(
                        "div",
                        { className: "w3-modal-content w3-card-4 w3-animate-zoom", style: "max-width:600px" },
                        _react2.default.createElement(
                            "header",
                            { className: "w3-container w3-teal" },
                            _react2.default.createElement(
                                "span",
                                { className: "w3-button w3-display-topright", onClick: this.closeModal },
                                "\xD7"
                            ),
                            _react2.default.createElement(
                                "h2",
                                null,
                                "Search Payments"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "w3-container" },
                            _react2.default.createElement(
                                "form",
                                { className: "w3-margin-top" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "w3-row" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "w3-col m6 l6 w3-panel" },
                                        _react2.default.createElement("input", { type: "search", className: "w3-input w3-border  w3-border-teal" }),
                                        _react2.default.createElement(
                                            "label",
                                            null,
                                            " Transaction ID"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "w3-col m6 l6 w3-panel" },
                                        _react2.default.createElement("input", { type: "search", className: "w3-input w3-border w3-border-teal" }),
                                        _react2.default.createElement(
                                            "label",
                                            null,
                                            " MSISDN"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "w3-row" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "w3-col m6 l6 w3-panel" },
                                        _react2.default.createElement(
                                            "select",
                                            { className: "w3-select w3-border w3-border-teal", name: "option" },
                                            _react2.default.createElement(
                                                "option",
                                                { value: "", disabled: true, selected: true },
                                                "Choose Transaction Type"
                                            ),
                                            _react2.default.createElement(
                                                "option",
                                                { value: "1" },
                                                "Merchant Payment"
                                            ),
                                            _react2.default.createElement(
                                                "option",
                                                { value: "2" },
                                                "Paybill"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "w3-col m6 l6 w3-panel" },
                                        _react2.default.createElement("input", { type: "search", className: "w3-input w3-border w3-border-teal" }),
                                        _react2.default.createElement(
                                            "label",
                                            null,
                                            "Account Number"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "w3-row" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "w3-col m6 l6 w3-panel" },
                                        _react2.default.createElement("input", { type: "datetime-local", className: "w3-input w3-border w3-border-teal" }),
                                        _react2.default.createElement(
                                            "label",
                                            null,
                                            "from"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "w3-col m6 l6 w3-panel" },
                                        _react2.default.createElement("input", { type: "datetime-local", className: "w3-input w3-border w3-border-teal" }),
                                        _react2.default.createElement(
                                            "label",
                                            null,
                                            "to"
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "footer",
                            { className: "w3-container w3-padding-16" },
                            _react2.default.createElement(
                                "div",
                                { className: "w3-panel" },
                                _react2.default.createElement(
                                    "button",
                                    { className: "w3-btn w3-teal" },
                                    "Search"
                                ),
                                _react2.default.createElement(
                                    "button",
                                    { className: "w3-btn w3-red w3-right", onClick: this.closeModal },
                                    "Cancel"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PaymentSearchModal;
}(_react.Component);

exports.default = PaymentSearchModal;

/***/ })

});