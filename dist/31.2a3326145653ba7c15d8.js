webpackJsonp([31],{744:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(20),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(367),s=n(369),f=function(e){function t(){var e,n,a,l;o(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={auth:0},l=n,r(a,l)}return a(t,e),l(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.dispatch,n=this.props.params.hotel_token,o=this.props.location.query.code;localStorage.token=n,localStorage.code=o,t((0,s.fetchLogin)({token:n,code:o})).then(function(t){if(t.results){document.createElement("link");""}else e.setState({auth:2})})}},{key:"render",value:function(){return 2===this.state.auth?i.default.createElement("div",null,"登陆失败"):i.default.createElement("div",null,"验证页面",i.default.createElement("ul",null,i.default.createElement("li",null,"hotel_token: ",this.props.params.hotel_token),i.default.createElement("li",null,"alias: ",this.props.params.alias)))}}]),t}(u.Component);t.default=(0,c.connect)()(f)}});