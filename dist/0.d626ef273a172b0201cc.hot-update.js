webpackHotUpdate(0,{

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = request;

__webpack_require__(421);

var _isomorphicFetch = __webpack_require__(604);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request(url, options) {
    if (!options) {
        options = { method: 'GET' };
    }
    options.mode = 'cors';

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    options.headers = myHeaders;
    options.body = JSON.stringify(options.body);

    // console.log('options: ', options);


    return (0, _isomorphicFetch2.default)(url, options).then(function (response) {
        return response.json();
    }).then(function (json) {
        return json;
    });
}

/***/ })

})