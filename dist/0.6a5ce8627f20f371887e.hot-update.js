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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger2.default)();
var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
var dom2 = document.getElementById('main-container');

var requireAuth = function requireAuth(nextState, replace) {
    var is_login = store.getState().login.is_login;
    if (!is_login) {
        replace({ pathname: '/login' });
        // browserHistory.push('/login');
    }
};
var loginOk = function loginOk(nextState, replace) {
    var is_login = store.getState().login.is_login;
    if (is_login) {
        replace({ pathname: '/' });
    }
};
(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.browserHistory },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: 'cms_font', component: _Index2.default },
            _react2.default.createElement(IndexRoute, { component: _Index2.default })
        )
    )
), dom2);

/***/ })

})