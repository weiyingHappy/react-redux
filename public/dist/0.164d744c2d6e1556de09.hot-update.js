webpackHotUpdate(0,{

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(46);

var _reduxThunk = __webpack_require__(135);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(134);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reactRedux = __webpack_require__(79);

var _redux = __webpack_require__(45);

var _reactRouter = __webpack_require__(80);

var _reducers = __webpack_require__(133);

var _reducers2 = _interopRequireDefault(_reducers);

var _Index = __webpack_require__(132);

var _Index2 = _interopRequireDefault(_Index);

var _NotFoundPage = __webpack_require__(299);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger2.default)();

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware)));

var dom2 = document.getElementById('main-container');

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.browserHistory },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: '/cms_font' },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: _Index2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Index2.default })
        ),
        _react2.default.createElement(_reactRouter.Route, { path: '/404', component: _NotFoundPage2.default }),
        _react2.default.createElement(_reactRouter.Redirect, { from: '*', to: '/404' })
    )
), dom2);

/***/ })

})