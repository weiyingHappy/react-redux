webpackHotUpdate(0,{

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RECEIVE_LOGIN = exports.REQUEST_LOGIN = undefined;
exports.requestLogin = requestLogin;
exports.receiveLogin = receiveLogin;
exports.fetchLogin = fetchLogin;

var _request = __webpack_require__(420);

var _request2 = _interopRequireDefault(_request);

var _config = __webpack_require__(417);

var _config2 = _interopRequireDefault(_config);

var _reactRouter = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_LOGIN = exports.REQUEST_LOGIN = 'REQUEST_LOGIN';
var RECEIVE_LOGIN = exports.RECEIVE_LOGIN = 'RECEIVE_LOGIN';

function requestLogin(user) {
    return {
        type: REQUEST_LOGIN,
        user: user
    };
}

function receiveLogin(json) {
    return {
        type: RECEIVE_LOGIN,
        data: json,
        receivedAt: Date.now()
    };
}

function fetchLogin(user) {
    return function (dispatch) {
        dispatch(requestLogin(user));

        var options = {
            method: 'POST',
            body: {
                name: user.name,
                password: user.password
            }
        };

        var dt = (0, _request2.default)(_config2.default.api_host + _config2.default.api_path.login, options);

        dt.then(function (json) {
            dispatch(receiveLogin(json));
            if (json.code == 406) {
                _reactRouter.browserHistory.push('/cmsfont/register');
            }
            console.log(json);
        });

        return dt;
    };
}

/***/ })

})