webpackHotUpdate(0,{

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = register;

var _register = __webpack_require__(614);

var register_state = {
    isFetching: false
};

function register() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : register_state;
    var action = arguments[1];

    switch (action.type) {
        case _register.REQUEST_CODE:
            return Object.assign({}, state, { isFetching: true });
        case _register.RECEIVE_CODE:
            return Object.assign({}, state, { isFetching: false });
        default:
            return state;
    }
}

/***/ })

})