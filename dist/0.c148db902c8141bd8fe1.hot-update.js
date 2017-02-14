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

/***/ 611:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3NDZCN0U1QTI5MTExRTZBMzRCQURDNTFBMkNBMTJEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ3NDZCN0U2QTI5MTExRTZBMzRCQURDNTFBMkNBMTJEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDc0NkI3RTNBMjkxMTFFNkEzNEJBREM1MUEyQ0ExMkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDc0NkI3RTRBMjkxMTFFNkEzNEJBREM1MUEyQ0ExMkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5iMLOsAAACBElEQVR42uycsUvDQBTGE1ERkYCFquBSRRFxFMHJwUFFxMXNWUFcHBxd/QscivoXuLp0cVBUBCdxcdHJRZBSRUQUK/EL3lACje2lzb1rvg8+rtCEcL/ee/cu3NX1fd+hqquNCKLVrnvj4ubbGZpx+NuCfnbCF4W8t5IYIAWnz6LBMJp0iJUsi5bXREMspCPlDkFAgtDfgBeM5KCQTuFjExSQV6Ly5GRcQI2axbJCw6qX0zzroNYA5BNQtIpC+/dirJIOaQ2egLuSJoCZqtpXX/CsFEBTygwxLlb1dAvfCKuky/A0PCYB0L6ytEp6F82OhBDLCI0QT0oOcoUCcqUAYiVNQBQBERABERABERABERBFQAREQAREQAREQAREERABERABERABpRRQruJzplUBxdm8cAgPKchXBBRSIe9tBW3EDi/mIOYgioAIiIAIiICaqA9jdRDqn0E03Y7hM6sRdVhwfmTAZCV9Dg8zxFKev+J08jMNgBq1034PPhDYv2CX/aoEQA/wnQkC/xxFeJQygnS2/Oecv/dIPzWmgnv4vc5n9EgBpKPg8Mt8HdfPwSdpKhTdJl9vPaB6q9yyzbOYjtbh7Ro7HvyQTzYDeta4p+g0/7R0SQqgJbUmk3bqeUYKoGVlLjUq1G9ZX7NJj6BLeKTGQk/Ckupaqxbhv+DxlUUs/QowAOdsUCOgsi4cAAAAAElFTkSuQmCC"

/***/ })

})