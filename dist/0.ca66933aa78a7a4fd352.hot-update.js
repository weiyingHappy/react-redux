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
    team_id: 0
};

function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : user_state;
    var action = arguments[1];

    switch (action.type) {
        case _user.REQUEST_LOGIN:
            return Object.assign({}, state, { isFetching: true });
        case _user.RECEIVE_LOGIN:
            return Object.assign({}, state, { isFetching: false, teamId: action.data.results.teamid });
        default:
            return state;
    }
}

/***/ })

})