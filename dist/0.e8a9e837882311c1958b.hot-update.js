webpackHotUpdate(0,{

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(48);

var _reduxThunk = __webpack_require__(136);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(135);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reactRedux = __webpack_require__(45);

var _redux = __webpack_require__(47);

var _reactRouter = __webpack_require__(46);

var _reducers = __webpack_require__(134);

var _reducers2 = _interopRequireDefault(_reducers);

var _Index = __webpack_require__(132);

var _Index2 = _interopRequireDefault(_Index);

var _NotFoundPage = __webpack_require__(133);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _Rooms = __webpack_require__(300);

var _Rooms2 = _interopRequireDefault(_Rooms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger2.default)();

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware)));

var dom2 = document.getElementById('main-container');

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.hashHistory },
        _react2.default.createElement(_reactRouter.Route, { path: '/:token', component: _Index2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/rooms/:token', component: rooms }),
        _react2.default.createElement(_reactRouter.Route, { path: '/404', component: _NotFoundPage2.default }),
        _react2.default.createElement(_reactRouter.Redirect, { from: '*', to: '/404' })
    )
), dom2);

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(45);

var _reactRouter = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);

        _this.state = {
            current: '1'
        };
        return _this;
    }

    _createClass(Index, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            console.log('click ', e);
            this.setState({
                current: e.key
            });
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
                '\u6B22\u8FCE\u6765\u5230\u623F\u95F4\u5217\u8868'
            );
        }
    }]);

    return Index;
}(_react.Component);

function select(state) {
    return {
        user: state.login
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
exports.default = (0, _reactRedux.connect)(select)(Index);

/***/ })

})