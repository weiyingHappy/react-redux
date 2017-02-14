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

var _icon = __webpack_require__(609);

var _icon2 = _interopRequireDefault(_icon);

var _icon3 = __webpack_require__(607);

var _icon4 = _interopRequireDefault(_icon3);

var _icon5 = __webpack_require__(608);

var _icon6 = _interopRequireDefault(_icon5);

__webpack_require__(606);

var _loading = __webpack_require__(613);

var _loading2 = _interopRequireDefault(_loading);

var _dialog = __webpack_require__(616);

var _dialog2 = _interopRequireDefault(_dialog);

var _register = __webpack_require__(614);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
    _inherits(Register, _Component);

    function Register(props) {
        _classCallCheck(this, Register);

        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.phoneChange = _this.phoneChange.bind(_this);
        _this.codeChange = _this.codeChange.bind(_this);
        _this.handleGetCode = _this.handleGetCode.bind(_this);
        _this.backTime = _this.backTime.bind(_this);

        _this.state = {
            btn_txt: '获取验证码',
            phone: '',
            code: '',
            isDisplayDialog: false,
            sb_code: 0,
            sb_msg: ''
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
            var self = this;
            var phone = this.state.phone;
            var code = this.state.code;
            var info = {
                phone: phone,
                code: code
            };

            this.props.dispatch((0, _register.fetchCheckCode)(info)).then(function (res) {
                console.log(res);
                self.setState({
                    sb_code: res.code,
                    sb_msg: res.code == 200 ? '验证成功' : res.msg
                });
            });
        }
    }, {
        key: 'phoneChange',
        value: function phoneChange(e) {
            var val = e.target.value;
            var reg = /^[0-9]*$/;

            if (reg.test(val)) {
                this.setState({
                    phone: val
                });
            }
        }
    }, {
        key: 'codeChange',
        value: function codeChange(e) {
            var val = e.target.value;
            var reg = /^[0-9]*$/;

            if (reg.test(val)) {
                this.setState({
                    code: val
                });
            }
        }
    }, {
        key: 'backTime',
        value: function backTime(cnt) {
            if (cnt == 0) {
                this.setState({
                    btn_txt: '获取验证码'
                });
                return;
            }
            this.setState({
                btn_txt: cnt.toString() + ' 秒'
            });
            setTimeout(function () {
                this.backTime(cnt - 1);
            }.bind(this), 1000);
        }
    }, {
        key: 'handleGetCode',
        value: function handleGetCode(e) {
            var self = this;
            e.preventDefault();
            var phone = this.state.phone;
            var reg = /^1[34578]\d{9}$/;

            if (!reg.test(phone)) {
                alert("手机号不合法");
                return;
            }

            this.props.dispatch((0, _register.fetchCode)(phone)).then(function (res) {
                console.log("dispatch over: ", res);
                self.backTime(60);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                dispatch = _props.dispatch,
                register = _props.register;

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
                            _react2.default.createElement('img', { src: _icon4.default, className: 'phone-image' })
                        ),
                        _react2.default.createElement('input', { type: 'tel', placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801', value: this.state.phone, className: 'input-phone', onChange: this.phoneChange })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'code-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'icon-container' },
                            _react2.default.createElement('img', { src: _icon6.default, className: 'code-image' })
                        ),
                        _react2.default.createElement('input', { type: 'tel', placeholder: '\u8F93\u5165\u77ED\u4FE1\u63A5\u6536\u5230\u9A8C\u8BC1\u7801', value: this.state.code, className: 'input-code', onChange: this.codeChange }),
                        _react2.default.createElement(
                            'button',
                            { className: 'get-code', onClick: this.handleGetCode, disabled: this.state.btn_txt == '获取验证码' ? false : true,
                                style: { color: this.state.btn_txt == '获取验证码' ? '#ff5000' : '#aaa' } },
                            this.state.btn_txt
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit', className: 'submitButton' },
                        '\u7ACB\u5373\u9A8C\u8BC1'
                    )
                ),
                _react2.default.createElement(_loading2.default, { text: 'loading...', isFetching: register.isFetching }),
                _react2.default.createElement(
                    _dialog2.default,
                    { isDisplay: this.state.isDisplayDialog },
                    'hello'
                )
            );
        }
    }]);

    return Register;
}(_react.Component);

function select(state) {
    return {
        register: state.register
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
exports.default = (0, _reactRedux.connect)(select)(Register);

/***/ })

})