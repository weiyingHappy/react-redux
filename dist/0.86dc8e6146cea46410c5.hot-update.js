webpackHotUpdate(0,{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(77);

var _reactRouter = __webpack_require__(64);

var _icon = __webpack_require__(607);

var _icon2 = _interopRequireDefault(_icon);

var _icon3 = __webpack_require__(611);

var _icon4 = _interopRequireDefault(_icon3);

var _icon5 = __webpack_require__(612);

var _icon6 = _interopRequireDefault(_icon5);

__webpack_require__(606);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
    _inherits(Register, _Component);

    function Register(props) {
        _classCallCheck(this, Register);

        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

        _this.state = {
            btn_txt: '获取验证码'
        };
        return _this;
    }

    _createClass(Register, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var phone = this.refs.phone;
            var code = this.ref.code;
            if (phone.length != 11) {
                alert("手机号不合法");
                return;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                dispatch = _props.dispatch,
                user = _props.user;

            return _react2.default.createElement(
                'div',
                { className: 'register-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'top' },
                    _react2.default.createElement('img', { src: _icon2.default, className: 'logo-img' })
                ),
                _react2.default.createElement(
                    'form',
                    { className: 'signForm', onSubmit: this.handleSubmit },
                    _react2.default.createElement(
                        'div',
                        { className: 'phone-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'icon-container' },
                            _react2.default.createElement('img', { src: 'images/icon-1.png', className: 'phone-image' })
                        ),
                        _react2.default.createElement('input', {
                            type: 'tel',
                            placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801',
                            ref: 'phone',
                            className: 'input-phone'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'code-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'icon-container' },
                            _react2.default.createElement('img', { src: 'images/icon-3.png', className: 'code-image' })
                        ),
                        _react2.default.createElement('input', {
                            type: 'tel',
                            placeholder: '\u8F93\u5165\u77ED\u4FE1\u63A5\u6536\u5230\u9A8C\u8BC1\u7801',
                            ref: 'code',
                            className: 'input-code'
                        }),
                        _react2.default.createElement(
                            'div',
                            { className: 'get-code', onClick: this.handleGetCode, style: { color: this.state.btn_txt == '获取验证码' ? '#ff5000' : '#aaa' } },
                            this.state.btn_txt
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit', className: 'submitButton' },
                        '\u7ACB\u5373\u9A8C\u8BC1'
                    )
                )
            );
        }
    }]);

    return Register;
}(_react.Component);

function select(state) {
    return {
        user: state.login
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
exports.default = (0, _reactRedux.connect)(select)(Register);

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0MEE1REI3QTI5MTExRTY5MTg2RDdGNzIzQzVGMEJDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0MEE1REI4QTI5MTExRTY5MTg2RDdGNzIzQzVGMEJDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQwQTVEQjVBMjkxMTFFNjkxODZEN0Y3MjNDNUYwQkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQwQTVEQjZBMjkxMTFFNjkxODZEN0Y3MjNDNUYwQkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz49QYCnAAAIMUlEQVR42uxc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"

/***/ })

})