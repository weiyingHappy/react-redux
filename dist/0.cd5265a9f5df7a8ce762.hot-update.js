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

__webpack_require__(606);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
    _inherits(Register, _Component);

    function Register(props) {
        _classCallCheck(this, Register);

        return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));
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
            $.get(config.api_host + '/SMS/checkSMS/' + phone + '/' + code, function (result) {
                result = JSON.parse(result);
                if (result.code == 200) {
                    var self = this;
                    $.post(config.api_host + '/FE/UserBasic/register', { 'phone': self.state.phone, 'wxid': self.state.openid, 'nickname': self.state.nickname }, function (msg) {
                        msg = JSON.parse(msg);
                        if (msg.code == 200) {
                            self.setState({
                                modal_data: '恭喜您成为会员!',
                                modal_show: 'block',
                                register_ok: true
                            });
                        } else if (msg.code == 406) {
                            self.setState({
                                modal_data: '此号码已经注册',
                                modal_show: 'block',
                                register_ok: true
                            });
                        } else {
                            self.setState({
                                modal_data: '未知错误' + msg.code.toString() + ' ' + self.state.openid + ' ' + self.state.nickname,
                                modal_show: 'block'
                            });
                        }
                    }
                    // 默认返回字符串，设置值等于json则返回json数据
                    );
                } else if (result.code == 406) {
                    this.setState({
                        modal_data: '无效验证码',
                        modal_show: 'block'
                    });
                } else if (result.code == 407) {
                    this.setState({
                        modal_data: '验证码错误',
                        modal_show: 'block'
                    });
                } else {}
            }.bind(this));
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

/***/ })

})