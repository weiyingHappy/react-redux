webpackHotUpdate(0,{

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(418);

var _config2 = _interopRequireDefault(_config);

var _config3 = __webpack_require__(416);

var _config4 = _interopRequireDefault(_config3);

var _config5 = __webpack_require__(415);

var _config6 = _interopRequireDefault(_config5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var production = 'production';
var development = 'development';

var mid = production;

var now = mid == development ? _config4.default : _config2.default;

var config = {
    api_host: now.api_host,
    remote_host: now.remote_host
};
config = Object.assign({}, config, _config6.default);

module.exports = config;

/***/ })

})