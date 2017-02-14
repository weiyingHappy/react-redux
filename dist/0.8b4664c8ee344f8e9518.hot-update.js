webpackHotUpdate(0,{

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(107);

var _reduxThunk = __webpack_require__(253);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(252);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reactRedux = __webpack_require__(77);

var _redux = __webpack_require__(106);

var _reactRouter = __webpack_require__(64);

var _reducers = __webpack_require__(251);

var _reducers2 = _interopRequireDefault(_reducers);

var _Index = __webpack_require__(247);

var _Index2 = _interopRequireDefault(_Index);

var _NotFoundPage = __webpack_require__(248);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _Rooms = __webpack_require__(250);

var _Rooms2 = _interopRequireDefault(_Rooms);

var _Register = __webpack_require__(249);

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger2.default)();

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default
// loggerMiddleware
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

var dom2 = document.getElementById('main-container');

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.browserHistory },
        _react2.default.createElement(_reactRouter.Route, { path: '/cmsfont/index/:token', component: _Index2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/cmsfont/rooms/:token', component: _Rooms2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/cmsfont/register', component: _Register2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/cmsfont/404', component: _NotFoundPage2.default }),
        _react2.default.createElement(_reactRouter.Redirect, { from: '*', to: '/cmsfont/404' })
    )
), dom2);

/***/ })

})