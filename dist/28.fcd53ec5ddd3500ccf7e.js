webpackJsonp([28],{1025:function(e,t,n){t=e.exports=n(366)(),t.push([e.i,".wallet_page {\n  font-size: 16px;\n  background-color: #F2F2F2;\n  min-height: 100%;\n  overflow: hidden; }\n  .wallet_page .arrow-right {\n    display: inline-block;\n    height: 12px;\n    width: 12px;\n    border-width: 2px 2px 0 0;\n    border-color: #8B8B8B;\n    border-style: solid;\n    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n    margin-right: 15px; }\n  .wallet_page .wallet-item {\n    padding: 0 15px 0 15px;\n    height: 50px;\n    box-sizing: border-box;\n    font-size: 16px;\n    color: #666666;\n    background-color: #fff;\n    /*margin-bottom: 20px;*/\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between; }\n    .wallet_page .wallet-item a {\n      width: 100%;\n      color: #666;\n      text-decoration: none;\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n      justify-content: space-between;\n      height: 100%; }\n",""])},1153:function(e,t,n){var o=n(1025);"string"==typeof o&&(o=[[e.i,o,""]]);n(367)(o,{});o.locals&&(e.exports=o.locals)},767:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(17),s=o(c),f=n(48),u=o(f),p=n(33),d=n(20),m=o(d);n(1153);var h=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={account:0,fetch:!1},n}return l(t,e),i(t,[{key:"componentWillMount",value:function(){var e=this;this.setState({fetch:!0}),(0,u.default)(m.default.remote_host+m.default.remote_path.myAccount,void 0,!0).then(function(t){e.setState({fetch:!1}),200===t.code&&e.setState({account:t.results.account})})}},{key:"render",value:function(){return s.default.createElement("div",{className:"wallet_page"},s.default.createElement("div",{className:"wallet-item",style:{marginBottom:"20px",marginTop:"20px"}},s.default.createElement("div",{className:"wi-left"},"可用余额: ",s.default.createElement("span",{style:{color:"#FF0000"}}," ",this.state.fetch?s.default.createElement("div",{className:"weui-loading"}):this.state.account," "),"住金")),s.default.createElement("div",{className:"wallet-item"},s.default.createElement(p.Link,{to:"/cmsfont/wallet_log"},s.default.createElement("div",{className:"wi-left"},"消费记录"),s.default.createElement("div",{className:"wi-right arrow-right"}))))}}]),t}(s.default.Component);t.default=h}});