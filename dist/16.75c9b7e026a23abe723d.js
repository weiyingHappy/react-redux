webpackJsonp([16],{1026:function(n,e,t){e=n.exports=t(365)(),e.push([n.i,'@charset "UTF-8";\n.container-common, #main-container, html, body, .to-youzhu-container {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: FZLTXHK,Helvetica,Tahoma,Arial,STXihei,"\\534E\\6587\\7EC6\\9ED1","Microsoft YaHei","\\5FAE\\8F6F\\96C5\\9ED1",sans-serif; }\n\n@media only screen and (max-width: 1920px) and (min-width: 720px) {\n  body {\n    font-size: 20px; }\n  .viewport {\n    max-width: 720px; } }\n\n@media only screen and (max-width: 719px) and (min-width: 690px) {\n  body {\n    font-size: 19.4444px; }\n  .viewport {\n    max-width: 700px; } }\n\n@media only screen and (max-width: 689px) and (min-width: 660px) {\n  body {\n    font-size: 18.6331px; }\n  .viewport {\n    max-width: 689px; } }\n\n@media only screen and (max-width: 659px) and (min-width: 630px) {\n  body {\n    font-size: 17.8217px; }\n  .viewport {\n    max-width: 659px; } }\n\n@media only screen and (max-width: 629px) and (min-width: 600px) {\n  body {\n    font-size: 17.0103px; }\n  .viewport {\n    max-width: 629px; } }\n\n@media only screen and (max-width: 599px) and (min-width: 570px) {\n  body {\n    font-size: 16.1989px; }\n  .viewport {\n    max-width: 599px; } }\n\n@media only screen and (max-width: 569px) and (min-width: 540px) {\n  body {\n    font-size: 15.3749px; }\n  .viewport {\n    max-width: 569px; } }\n\n@media only screen and (max-width: 539px) and (min-width: 510px) {\n  body {\n    font-size: 14.5763px; }\n  .viewport {\n    max-width: 539px; } }\n\n@media only screen and (max-width: 509px) and (min-width: 480px) {\n  body {\n    font-size: 13.7650px; }\n  .viewport {\n    max-width: 509px; } }\n\n@media only screen and (max-width: 479px) and (min-width: 450px) {\n  body {\n    font-size: 12.9537px; }\n  .viewport {\n    max-width: 479px; } }\n\n@media only screen and (max-width: 449px) and (min-width: 420px) {\n  body {\n    font-size: 12.1424px; }\n  .viewport {\n    max-width: 449px; } }\n\n@media only screen and (max-width: 419px) and (min-width: 390px) {\n  body {\n    font-size: 11.3311px; }\n  .viewport {\n    max-width: 419px; } }\n\n@media only screen and (max-width: 389px) and (min-width: 360px) {\n  body {\n    font-size: 10.5189px; }\n  .viewport {\n    max-width: 389px; } }\n\n@media only screen and (max-width: 359px) and (min-width: 330px) {\n  body {\n    font-size: 9.7067px; }\n  .viewport {\n    max-width: 359px; } }\n\n@media only screen and (max-width: 329px) and (min-width: 250px) {\n  body {\n    font-size: 8.8955px; }\n  .viewport {\n    min-width: 320px; } }\n\n.to-youzhu-container {\n  height: auto !important;\n  min-height: 100%;\n  background-color: #fff;\n  width: 100%; }\n',""])},1121:function(n,e,t){var i=t(994);"string"==typeof i&&(i=[[n.i,i,""]]);t(366)(i,{});i.locals&&(n.exports=i.locals)},1123:function(n,e,t){var i=t(996);"string"==typeof i&&(i=[[n.i,i,""]]);t(366)(i,{});i.locals&&(n.exports=i.locals)},1153:function(n,e,t){var i=t(1026);"string"==typeof i&&(i=[[n.i,i,""]]);t(366)(i,{});i.locals&&(n.exports=i.locals)},769:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function r(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function d(n){return{user:n.user}}Object.defineProperty(e,"__esModule",{value:!0});var p=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),c=t(20),l=i(c),s=t(367),m=t(55),u=t(776),x=i(u),f=t(935),h=i(f),w=t(937),y=i(w),b=t(369),v=t(775),g=t(18),E=i(g);t(1153);var _=function(n){function e(n){o(this,e);var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return t.state={},t}return r(e,n),p(e,[{key:"componentWillMount",value:function(){var n=this.props.params.token,e=this.props.location.query.code,t=this.props,i=t.user,o=t.dispatch;if(i.isLogin){var a={phone:i.phone,nickname:i.nickname,openid:i.openid,teamId:i.teamId,appid:i.appid,appsecret:i.appsecret};o((0,b.fetchIsUliveMember)(a))}else o((0,b.fetchLogin)({token:n,code:e})).then(function(n){if((0,v.changeTitle)((0,v.getCookie)("wechatName","")||"住那儿旅行"),406==n.code)m.browserHistory.push("/cmsfont/register");else if(200==n.code||E.default.debug){var e={phone:E.default.debug?"18408249631":n.results.phone,nickname:n.results.nickname,openid:n.results.openid,teamId:n.results.teamid,appid:n.results.appid,appsecret:n.results.appsecret};o((0,b.fetchIsUliveMember)(e))}else m.browserHistory.push("/cmsfont/error")})}},{key:"render",value:function(){var n=this.props.user;return n.isFetching?l.default.createElement("div",{className:"to-youzhu-container"},l.default.createElement(x.default,{text:"验证中....",isFetching:n.isFetching})):n.isLoading?l.default.createElement("div",{className:"to-youzhu-container"},l.default.createElement(x.default,{text:"加载中....",isFetching:n.isLoading})):n.isUliveMember?l.default.createElement("div",{className:"to-youzhu-container"},l.default.createElement(h.default,{teamId:n.teamId})):l.default.createElement("div",{className:"to-youzhu-container"},l.default.createElement(y.default,{ticket:n.qr_ticket}))}}]),e}(c.Component);e.default=(0,s.connect)(d)(_)},775:function(n,e,t){"use strict";function i(n){if(n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+n,document.cookie.length>0)try{var e=new RegExp("(^|\\s)"+n+"=([^;]*)(;|$)"),t=document.cookie.match(e);return t?decodeURIComponent(t[2]):null}catch(n){console.log(n)}return null}function o(n,e,t){console.log("jsSdk",n),wx.config({debug:!1,appId:e,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:(0,f.default)("jsapi_ticket="+n.jsapi_ticket+"&noncestr="+n.nonceStr+"&timestamp="+n.timestamp+"&url="+t),jsApiList:["checkJsApi","openLocation","getLocation"]})}function a(n){document.title=n;var e=navigator.userAgent.toLowerCase(),t=document.querySelectorAll("iframe").length;if(/iphone|ipad|ipod/.test(e)&&!t){var i=document.createElement("iframe");i.style.cssText="display: none; width: 0; height: 0;",i.setAttribute("src","about:blank"),i.addEventListener("load",function(){setTimeout(function(){i.removeEventListener("load",!1),document.body.removeChild(i)},0)}),document.body.appendChild(i)}}function r(n){return 11==n||12==n||13==n}function d(n){return 10==n}function p(n){return 0==n}function c(n){return 1==n||2==n}function l(n){return 5==n}function s(n){return 1==n||2==n}function m(n){return 5==n}function u(n){return 6==n}Object.defineProperty(e,"__esModule",{value:!0}),e.getCookie=i,e.jsSdkInit=o,e.changeTitle=a,e.isCancel=r,e.isFinish=d,e.readyPay=p,e.hasPay=c,e.needRefund=l,e.refundApply=s,e.refundOk=m,e.refundFail=u;var x=t(368),f=function(n){return n&&n.__esModule?n:{default:n}}(x)},776:function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),d=t(20),p=function(n){return n&&n.__esModule?n:{default:n}}(d),c=function(n){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,n),r(e,[{key:"render",value:function(){var n=this.props,e=n.text,t=n.isFetching;return p.default.createElement("div",{id:"loadingToast",style:{display:t?"block":"none"}},p.default.createElement("div",{className:"weui-mask_transparent"}),p.default.createElement("div",{className:"weui-toast"},p.default.createElement("i",{className:"weui-loading weui-icon_toast"}),p.default.createElement("p",{className:"weui-toast__content"},e)))}}]),e}(d.Component);e.default=c},935:function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),d=t(20),p=function(n){return n&&n.__esModule?n:{default:n}}(d);t(1121);var c=function(n){function e(n){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n))}return a(e,n),r(e,[{key:"render",value:function(){var n="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe163c2e7ba565707&redirect_uri=http://www.hotelets.com/weixin/scan_in?snap_id="+this.props.teamId+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";return p.default.createElement("div",{className:"is-ulive-member"},p.default.createElement("div",{className:"top"},p.default.createElement("div",null,"住那儿旅行汇聚全国优质房源，"),p.default.createElement("div",null,"只卖最舒适的房间，"),p.default.createElement("div",null,"到点抢房，开心入住~")),p.default.createElement("div",{className:"middle"},p.default.createElement("button",{className:"m-btn",onClick:function(){window.location.href=n}},"立即抢房")),p.default.createElement("div",{className:"bottom"},"微信可能会提醒您授权"))}}]),e}(p.default.Component);e.default=c},937:function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),d=t(20),p=function(n){return n&&n.__esModule?n:{default:n}}(d);t(1123);var c=function(n){function e(n){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n))}return a(e,n),r(e,[{key:"render",value:function(){var n=this.props.ticket;return p.default.createElement("div",{className:"not-ulive-member"},p.default.createElement("div",{className:"top"},p.default.createElement("div",{className:"top-a"},"半价抢房由住那儿旅行平台提供!"),p.default.createElement("div",{className:"top-b"},p.default.createElement("div",null,"只睡十小时，为何要花整天的钱？"),p.default.createElement("div",null,"住那儿旅行汇聚全国优质房源，只卖最舒适的房间，"),p.default.createElement("div",null,"让你聪明抢房，开心入住。"),p.default.createElement("div",null,"不是节省，是聪明住酒店。"))),p.default.createElement("div",{className:"middle"},p.default.createElement("img",{className:"qr-code",src:"https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+n}),p.default.createElement("div",{className:"qr-desc"},"长按识别二维码关注住那儿旅行"),p.default.createElement("div",{className:"qr-bottom"},"关注后, 点击推送消息, 进入酒店")))}}]),e}(p.default.Component);e.default=c},994:function(n,e,t){e=n.exports=t(365)(),e.push([n.i,'@charset "UTF-8";\n.container-common, #main-container, html, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: FZLTXHK,Helvetica,Tahoma,Arial,STXihei,"\\534E\\6587\\7EC6\\9ED1","Microsoft YaHei","\\5FAE\\8F6F\\96C5\\9ED1",sans-serif; }\n\n@media only screen and (max-width: 1920px) and (min-width: 720px) {\n  body {\n    font-size: 20px; }\n  .viewport {\n    max-width: 720px; } }\n\n@media only screen and (max-width: 719px) and (min-width: 690px) {\n  body {\n    font-size: 19.4444px; }\n  .viewport {\n    max-width: 700px; } }\n\n@media only screen and (max-width: 689px) and (min-width: 660px) {\n  body {\n    font-size: 18.6331px; }\n  .viewport {\n    max-width: 689px; } }\n\n@media only screen and (max-width: 659px) and (min-width: 630px) {\n  body {\n    font-size: 17.8217px; }\n  .viewport {\n    max-width: 659px; } }\n\n@media only screen and (max-width: 629px) and (min-width: 600px) {\n  body {\n    font-size: 17.0103px; }\n  .viewport {\n    max-width: 629px; } }\n\n@media only screen and (max-width: 599px) and (min-width: 570px) {\n  body {\n    font-size: 16.1989px; }\n  .viewport {\n    max-width: 599px; } }\n\n@media only screen and (max-width: 569px) and (min-width: 540px) {\n  body {\n    font-size: 15.3749px; }\n  .viewport {\n    max-width: 569px; } }\n\n@media only screen and (max-width: 539px) and (min-width: 510px) {\n  body {\n    font-size: 14.5763px; }\n  .viewport {\n    max-width: 539px; } }\n\n@media only screen and (max-width: 509px) and (min-width: 480px) {\n  body {\n    font-size: 13.7650px; }\n  .viewport {\n    max-width: 509px; } }\n\n@media only screen and (max-width: 479px) and (min-width: 450px) {\n  body {\n    font-size: 12.9537px; }\n  .viewport {\n    max-width: 479px; } }\n\n@media only screen and (max-width: 449px) and (min-width: 420px) {\n  body {\n    font-size: 12.1424px; }\n  .viewport {\n    max-width: 449px; } }\n\n@media only screen and (max-width: 419px) and (min-width: 390px) {\n  body {\n    font-size: 11.3311px; }\n  .viewport {\n    max-width: 419px; } }\n\n@media only screen and (max-width: 389px) and (min-width: 360px) {\n  body {\n    font-size: 10.5189px; }\n  .viewport {\n    max-width: 389px; } }\n\n@media only screen and (max-width: 359px) and (min-width: 330px) {\n  body {\n    font-size: 9.7067px; }\n  .viewport {\n    max-width: 359px; } }\n\n@media only screen and (max-width: 329px) and (min-width: 250px) {\n  body {\n    font-size: 8.8955px; }\n  .viewport {\n    min-width: 320px; } }\n\n.is-ulive-member .top {\n  padding-top: 79px;\n  font-size: 17px;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center; }\n\n.is-ulive-member .middle {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  padding-top: 40px; }\n\n.is-ulive-member .m-btn {\n  height: 45px;\n  width: 80%;\n  border: none;\n  background-color: #4969F1;\n  color: #fff;\n  border-radius: 3px;\n  font-size: 18px; }\n\n.is-ulive-member .bottom {\n  padding-left: 10%;\n  font-size: 12px;\n  color: #999999;\n  padding-top: 13px; }\n',""])},996:function(n,e,t){e=n.exports=t(365)(),e.push([n.i,'@charset "UTF-8";\n.container-common, #main-container, html, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: FZLTXHK,Helvetica,Tahoma,Arial,STXihei,"\\534E\\6587\\7EC6\\9ED1","Microsoft YaHei","\\5FAE\\8F6F\\96C5\\9ED1",sans-serif; }\n\n@media only screen and (max-width: 1920px) and (min-width: 720px) {\n  body {\n    font-size: 20px; }\n  .viewport {\n    max-width: 720px; } }\n\n@media only screen and (max-width: 719px) and (min-width: 690px) {\n  body {\n    font-size: 19.4444px; }\n  .viewport {\n    max-width: 700px; } }\n\n@media only screen and (max-width: 689px) and (min-width: 660px) {\n  body {\n    font-size: 18.6331px; }\n  .viewport {\n    max-width: 689px; } }\n\n@media only screen and (max-width: 659px) and (min-width: 630px) {\n  body {\n    font-size: 17.8217px; }\n  .viewport {\n    max-width: 659px; } }\n\n@media only screen and (max-width: 629px) and (min-width: 600px) {\n  body {\n    font-size: 17.0103px; }\n  .viewport {\n    max-width: 629px; } }\n\n@media only screen and (max-width: 599px) and (min-width: 570px) {\n  body {\n    font-size: 16.1989px; }\n  .viewport {\n    max-width: 599px; } }\n\n@media only screen and (max-width: 569px) and (min-width: 540px) {\n  body {\n    font-size: 15.3749px; }\n  .viewport {\n    max-width: 569px; } }\n\n@media only screen and (max-width: 539px) and (min-width: 510px) {\n  body {\n    font-size: 14.5763px; }\n  .viewport {\n    max-width: 539px; } }\n\n@media only screen and (max-width: 509px) and (min-width: 480px) {\n  body {\n    font-size: 13.7650px; }\n  .viewport {\n    max-width: 509px; } }\n\n@media only screen and (max-width: 479px) and (min-width: 450px) {\n  body {\n    font-size: 12.9537px; }\n  .viewport {\n    max-width: 479px; } }\n\n@media only screen and (max-width: 449px) and (min-width: 420px) {\n  body {\n    font-size: 12.1424px; }\n  .viewport {\n    max-width: 449px; } }\n\n@media only screen and (max-width: 419px) and (min-width: 390px) {\n  body {\n    font-size: 11.3311px; }\n  .viewport {\n    max-width: 419px; } }\n\n@media only screen and (max-width: 389px) and (min-width: 360px) {\n  body {\n    font-size: 10.5189px; }\n  .viewport {\n    max-width: 389px; } }\n\n@media only screen and (max-width: 359px) and (min-width: 330px) {\n  body {\n    font-size: 9.7067px; }\n  .viewport {\n    max-width: 359px; } }\n\n@media only screen and (max-width: 329px) and (min-width: 250px) {\n  body {\n    font-size: 8.8955px; }\n  .viewport {\n    min-width: 320px; } }\n\n.not-ulive-member .top {\n  height: 170px;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 23px; }\n\n.not-ulive-member .top-a {\n  font-size: 15px;\n  color: #999999; }\n\n.not-ulive-member .top-b {\n  margin-top: 15px;\n  font-size: 15px;\n  padding: 0 5px;\n  color: #333333;\n  text-align: center;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center; }\n\n.not-ulive-member .middle {\n  background-color: #F5F5F8;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 34px;\n  padding-bottom: 34px; }\n\n.not-ulive-member .qr-code {\n  height: 223px;\n  width: 223px; }\n\n.not-ulive-member .qr-desc {\n  margin-top: 13px;\n  font-size: 14px;\n  color: #666666; }\n\n.not-ulive-member .qr-bottom {\n  margin-top: 40px;\n  font-size: 14px;\n  color: #666666; }\n',""])}});