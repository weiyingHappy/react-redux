webpackHotUpdate(0,{

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RECEIVE_CHECK_CODE = exports.REQUEST_CHECK_CODE = exports.RECEIVE_REGISTER = exports.REQUEST_REGISTER = exports.RECEIVE_CODE = exports.REQUEST_CODE = undefined;
exports.requestCode = requestCode;
exports.receiveCode = receiveCode;
exports.fetchCode = fetchCode;
exports.requestCheckCode = requestCheckCode;
exports.receiveCheckCode = receiveCheckCode;
exports.fetchCheckCode = fetchCheckCode;
exports.requestRegister = requestRegister;
exports.receiveRegister = receiveRegister;
exports.fetchRegister = fetchRegister;

var _request = __webpack_require__(259);

var _request2 = _interopRequireDefault(_request);

var _config = __webpack_require__(256);

var _config2 = _interopRequireDefault(_config);

var _reactRouter = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_CODE = exports.REQUEST_CODE = 'REQUEST_CODE';
var RECEIVE_CODE = exports.RECEIVE_CODE = 'RECEIVE_CODE';

var REQUEST_REGISTER = exports.REQUEST_REGISTER = 'REQUEST_REGISTER';
var RECEIVE_REGISTER = exports.RECEIVE_REGISTER = 'RECEIVE_REGISTER';

var REQUEST_CHECK_CODE = exports.REQUEST_CHECK_CODE = 'REQUEST_CHECK_CODE';
var RECEIVE_CHECK_CODE = exports.RECEIVE_CHECK_CODE = 'RECEIVE_CHECK_CODE';

function requestCode(phone) {
    return {
        type: REQUEST_CODE,
        phone: phone
    };
}

function receiveCode(json) {
    return {
        type: RECEIVE_CODE,
        data: json,
        receivedAt: Date.now()
    };
}

function fetchCode(phone) {
    return function (dispatch) {
        dispatch(requestCode(phone));

        var dt = (0, _request2.default)(_config2.default.remote_host + _config2.default.remote_path.sendSMS + '/' + phone + '/register');

        dt.then(function (json) {
            dispatch(receiveCode(json));
        });

        return dt;
    };
}

function requestCheckCode(info) {
    return {
        type: REQUEST_CHECK_CODE,
        info: info
    };
}

function receiveCheckCode(json) {
    return {
        type: RECEIVE_CODE,
        data: json,
        receivedAt: Date.now()
    };
}

function fetchCheckCode(info) {
    return function (dispatch) {
        dispatch(requestCheckCode(info));

        var dt = (0, _request2.default)(_config2.default.remote_host + _config2.default.remote_path.checkSMS + '/' + info.phone + '/' + info.code);

        dt.then(function (json) {
            dispatch(receiveCheckCode(json));
        });

        return dt;
    };
}

function requestRegister(info) {
    return {
        type: REQUEST_REGISTER,
        info: info
    };
}

function receiveRegister(json) {
    return {
        type: RECEIVE_REGISTER,
        data: json,
        receivedAt: Date.now()
    };
}

function fetchRegister(info) {
    return function (dispatch) {
        dispatch(requestRegister(info));

        var options = {
            method: 'POST',
            body: {
                phone: info.phone,
                wxid: info.wxid,
                nickname: info.nickname,
                team_id: info.team_id
            }
        };

        var dt = (0, _request2.default)(_config2.default.remote_host + _config2.default.remote_path.register, options);

        dt.then(function (json) {
            dispatch(receiveRegister(json));
        });

        return dt;
    };
}

/***/ })

})