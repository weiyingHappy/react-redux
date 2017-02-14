webpackHotUpdate(0,{

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = user;

var _user = __webpack_require__(167);

var user_state = {
    isFetching: false,

    teamId: 0,
    receivedAt: '',
    isLogin: false,
    wechatToken: '', // 为酒店生成的token
    wechatCode: '' // 第一次进入带过来的code
};

function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : user_state;
    var action = arguments[1];

    switch (action.type) {
        case _user.REQUEST_LOGIN:
            return Object.assign({}, state, { isFetching: true, wechatToken: action.user.token, wechatCode: action.user.code });
        case _user.RECEIVE_LOGIN:
            return Object.assign({}, state, { isFetching: false, teamId: action.data.results.teamid, isLogin: action.data.code == 200 });
        default:
            return state;
    }
}

/***/ })

})