webpackHotUpdate(0,{

/***/ 247:
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

var _loading = __webpack_require__(613);

var _loading2 = _interopRequireDefault(_loading);

var _user = __webpack_require__(167);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index(props) {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    }

    _createClass(Index, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var token = this.props.params.token;
            var code = this.props.location.query.code;
            this.props.dispatch((0, _user.fetchLogin)({ token: token, code: code }));
            console.log(token);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                dispatch = _props.dispatch,
                user = _props.user;

            return _react2.default.createElement(
                'div',
                { className: 'index-container' },
                _react2.default.createElement(
                    'div',
                    { id: 'loadingToast', style: { display: user.isFetching ? 'block' : 'none' } },
                    _react2.default.createElement('div', { className: 'weui-mask_transparent' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-toast' },
                        _react2.default.createElement('i', { className: 'weui-loading weui-icon_toast' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'weui-toast__content' },
                            'logging in...'
                        )
                    )
                ),
                _react2.default.createElement(_loading2.default, { text: 'logging in...', isFetching: user.isFetching })
            );
        }
    }]);

    return Index;
}(_react.Component);

function select(state) {
    return {
        user: state.user
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
exports.default = (0, _reactRedux.connect)(select)(Index);

/***/ })

})