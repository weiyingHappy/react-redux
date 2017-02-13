webpackHotUpdate(0,{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = user;

var _user = __webpack_require__(419);

var user_state = {
    isFetching: false,
    name: ''
};

function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : user_state;
    var action = arguments[1];

    switch (action.type) {
        case _user.REQUEST_LOGIN:
            return Object.assign({}, state, { isFetching: true, name: action.user.name });
        case _user.RECEIVE_LOGIN:
            return Object.assign({}, state, { isFetching: false, is_login: action.data.code == 200 ? true : false });
        default:
            return state;
    }
}

/***/ })

})