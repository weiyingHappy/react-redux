webpackJsonp([5],{1026:function(e,n,t){n=e.exports=t(366)(),n.push([e.i,'@charset "UTF-8";\n.container-common, #main-container, html, body, .uni-pay-container {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: FZLTXHK,Helvetica,Tahoma,Arial,STXihei,"\\534E\\6587\\7EC6\\9ED1","Microsoft YaHei","\\5FAE\\8F6F\\96C5\\9ED1",sans-serif; }\n\n@media only screen and (max-width: 1920px) and (min-width: 720px) {\n  body {\n    font-size: 20px; }\n  .viewport {\n    max-width: 720px; } }\n\n@media only screen and (max-width: 719px) and (min-width: 690px) {\n  body {\n    font-size: 19.4444px; }\n  .viewport {\n    max-width: 700px; } }\n\n@media only screen and (max-width: 689px) and (min-width: 660px) {\n  body {\n    font-size: 18.6331px; }\n  .viewport {\n    max-width: 689px; } }\n\n@media only screen and (max-width: 659px) and (min-width: 630px) {\n  body {\n    font-size: 17.8217px; }\n  .viewport {\n    max-width: 659px; } }\n\n@media only screen and (max-width: 629px) and (min-width: 600px) {\n  body {\n    font-size: 17.0103px; }\n  .viewport {\n    max-width: 629px; } }\n\n@media only screen and (max-width: 599px) and (min-width: 570px) {\n  body {\n    font-size: 16.1989px; }\n  .viewport {\n    max-width: 599px; } }\n\n@media only screen and (max-width: 569px) and (min-width: 540px) {\n  body {\n    font-size: 15.3749px; }\n  .viewport {\n    max-width: 569px; } }\n\n@media only screen and (max-width: 539px) and (min-width: 510px) {\n  body {\n    font-size: 14.5763px; }\n  .viewport {\n    max-width: 539px; } }\n\n@media only screen and (max-width: 509px) and (min-width: 480px) {\n  body {\n    font-size: 13.7650px; }\n  .viewport {\n    max-width: 509px; } }\n\n@media only screen and (max-width: 479px) and (min-width: 450px) {\n  body {\n    font-size: 12.9537px; }\n  .viewport {\n    max-width: 479px; } }\n\n@media only screen and (max-width: 449px) and (min-width: 420px) {\n  body {\n    font-size: 12.1424px; }\n  .viewport {\n    max-width: 449px; } }\n\n@media only screen and (max-width: 419px) and (min-width: 390px) {\n  body {\n    font-size: 11.3311px; }\n  .viewport {\n    max-width: 419px; } }\n\n@media only screen and (max-width: 389px) and (min-width: 360px) {\n  body {\n    font-size: 10.5189px; }\n  .viewport {\n    max-width: 389px; } }\n\n@media only screen and (max-width: 359px) and (min-width: 330px) {\n  body {\n    font-size: 9.7067px; }\n  .viewport {\n    max-width: 359px; } }\n\n@media only screen and (max-width: 329px) and (min-width: 250px) {\n  body {\n    font-size: 8.8955px; }\n  .viewport {\n    min-width: 320px; } }\n\n.uni-pay-container {\n  background-color: #F2F2F2; }\n',""])},1155:function(e,n,t){var r=t(1026);"string"==typeof r&&(r=[[e.i,r,""]]);t(367)(r,{});r.locals&&(e.exports=r.locals)},766:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function c(e){return{order:e.order}}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),d=t(17),u=r(d),p=t(111),s=t(33),f=t(0),h=(r(f),t(831)),m=r(h),_=t(20),y=r(_),g=t(771),v=r(g),x=t(368),w=t(168),b=t(372);t(1155);var P=function(e){function n(e){a(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleOrderFinish=t.handleOrderFinish.bind(t),t.state={},t}return o(n,e),l(n,[{key:"handleOrderFinish",value:function(e,n,t){try{var r=this.props,a=(r.order,r.dispatch),i={order_no:e,wx_order:n,price:parseFloat(t)/100};a((0,w.fetchFinishOrder)(i)).then(function(e){200==e.code||e.code,alert("支付成功!"),s.browserHistory.replace("/cmsfont/paySuccess")})}catch(e){alert("handle order finish fail: "+JSON.stringify(e)),console.log(e)}}},{key:"handleToPay",value:function(e,n){var t=this.props,r=t.order,a=t.dispatch,i={subject:n.team.name,body:n.room.name,amount:parseInt(100*r.pay.pay_price),order_no:n.order_no,channel:"wx_pub",currency:"cny",app:{id:y.default.ping_appid},extra:{open_id:e}};a((0,w.fetchToPay)(i)).then(function(e){console.log("fetch to pay ret: ",e),m.default.createPayment(e,function(e,n){console.log(e),console.log(n.msg),console.log(n.extra),"success"==e?(alert("无忧行李支付成功"),s.browserHistory.push("/cmsfont/luggage")):"fail"==e&&alert("支付失败")})})}},{key:"handleToPayLuggage",value:function(e,n){var t=this.props.dispatch,r=this,a={subject:n.team.name,body:"无忧行李订单"+n.inner_order,amount:parseInt(100*n.pay_price),order_no:n.inner_order,channel:"wx_pub",currency:"cny",app:{id:y.default.ping_appid},extra:{open_id:e}};t((0,w.fetchToPay)(a)).then(function(e){console.log("fetch to pay ret: ",e),m.default.createPayment(e,function(n,t){console.log(n),console.log(t.msg),console.log(t.extra),"success"==n?r.handleOrderFinish(e.order_no,e.id,e.amount_settle):"fail"==n&&alert("支付失败")})})}},{key:"componentWillMount",value:function(){var e=this.props.params.order_no,n=this,t=this.props.location.query.code,r=this.props.dispatch,a={code:t};r((0,w.fetchUniPayOpenid)(a)).then(function(t){/wuyou/.test(e)?r((0,b.fetchLuggageOrderInfo)(e)).then(function(e){n.handleToPayLuggage(t.openid,e.results),(0,x.changeTitle)("无忧行李")}):r((0,w.fetchOrderInfo)(e)).then(function(e){n.handleToPay(t.openid,e.results),(0,x.changeTitle)(e.results.team_name)})})}},{key:"render",value:function(){var e=this.props.order;return e.pay.openid_loading?u.default.createElement(v.default,{text:"认证中...",isFetching:e.pay.openid_loading}):e.pay.pay_loading?u.default.createElement(v.default,{text:"加载中...",isFetching:e.pay.pay_loading}):e.pay.finish_loading?u.default.createElement(v.default,{text:"处理订单中...",isFetching:e.pay.finish_loading}):u.default.createElement("div",{className:"uni-pay-container"})}}]),n}(d.Component);n.default=(0,p.connect)(c)(P)},770:function(e,n){var t={}.hasOwnProperty,r=e.exports={stringifyData:function(e,n,r){void 0===r&&(r=!1);var a=[];for(var i in e)t.call(e,i)&&"function"!=typeof e[i]&&("bfb_wap"==n&&"url"==i||"yeepay_wap"==n&&"mode"==i||"channel_url"!=i&&a.push(i+"="+(r?encodeURIComponent(e[i]):e[i])));return a.join("&")},request:function(e,n,a,i,o,c){if("undefined"==typeof XMLHttpRequest)return void console.log("Function XMLHttpRequest is undefined.");var l=new XMLHttpRequest;if(void 0!==l.timeout&&(l.timeout=6e3),n=n.toUpperCase(),"GET"===n&&"object"==typeof a&&a&&(e+="?"+r.stringifyData(a,"",!0)),l.open(n,e,!0),void 0!==c)for(var d in c)t.call(c,d)&&l.setRequestHeader(d,c[d]);"POST"===n?(l.setRequestHeader("Content-type","application/json; charset=utf-8"),l.send(JSON.stringify(a))):l.send(),void 0===i&&(i=function(){}),void 0===o&&(o=function(){}),l.onreadystatechange=function(){4==l.readyState&&i(l.responseText,l.status,l)},l.onerror=function(e){o(l,0,e)}},formSubmit:function(e,n,r){if("undefined"==typeof window)return void console.log("Not a browser, form submit url: "+e);var a=document.createElement("form");a.setAttribute("method",n),a.setAttribute("action",e);for(var i in r)if(t.call(r,i)){var o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name",i),o.setAttribute("value",r[i]),a.appendChild(o)}document.body.appendChild(a),a.submit()},randomString:function(e){void 0===e&&(e=32);for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=n.length,r="",a=0;a<e;a++)r+=n.charAt(Math.floor(Math.random()*t));return r},redirectTo:function(e){if("undefined"==typeof window)return void console.log("Not a browser, redirect url: "+e);window.location.href=e},inWeixin:function(){return"undefined"!=typeof navigator&&-1!==navigator.userAgent.toLowerCase().indexOf("micromessenger")},documentReady:function(e){if("undefined"==typeof document)return void e();"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)},loadUrlJs:function(e,n,t){var r=document.getElementsByTagName("head")[0],a=null;null==document.getElementById(e)?(a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("src",n),a.setAttribute("id",e),a.async=!0,null!=t&&(a.onload=a.onreadystatechange=function(){if(a.ready)return!1;a.readyState&&"loaded"!=a.readyState&&"complete"!=a.readyState||(a.ready=!0,t())}),r.appendChild(a)):null!=t&&t()}}},771:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=t(17),l=function(e){return e&&e.__esModule?e:{default:e}}(c),d=function(e){function n(){return r(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),o(n,[{key:"render",value:function(){var e=this.props,n=e.text,t=e.isFetching;return l.default.createElement("div",{id:"loadingToast",style:{display:t?"block":"none"}},l.default.createElement("div",{className:"weui-mask_transparent"}),l.default.createElement("div",{className:"weui-toast"},l.default.createElement("i",{className:"weui-loading weui-icon_toast"}),l.default.createElement("p",{className:"weui-toast__content"},n)))}}]),n}(c.Component);n.default=d},772:function(e,n,t){var r=t(792);e.exports={userCallback:void 0,innerCallback:function(e,n){"function"==typeof this.userCallback&&(void 0===n&&(n=this.error()),this.userCallback(e,n),this.userCallback=void 0,r.clear())},error:function(e,n){return e=void 0===e?"":e,n=void 0===n?"":n,{msg:e,extra:n}}}},774:function(e,n){e.exports={}},779:function(e,n,t){var r={}.hasOwnProperty,a={};e.exports=a,a.channels={alipay_pc_direct:t(814),alipay_wap:t(815),bfb_wap:t(816),cp_b2b:t(817),fqlpay_qr:t(819),fqlpay_wap:t(820),jdpay_wap:t(821),qpay_pub:t(822),upacp_pc:t(823),upacp_wap:t(824),wx_lite:t(825),wx_pub:t(826),wx_wap:t(827),yeepay_wap:t(828)},a.extras={ap:t(818)},a.getChannelModule=function(e){if(r.call(a.channels,e))return a.channels[e]},a.getExtraModule=function(e){if(r.call(a.extras,e))return a.extras[e]}},790:function(e,n,t){var r=t(770),a=t(772),i={}.hasOwnProperty;e.exports={handleCharge:function(e){var n,t=e.credential[e.channel];if("string"==typeof t)n=t;else{if(!i.call(t,"url"))return void a.innerCallback("fail",a.error("invalid_credential","credential format is incorrect"));n=t.url}r.redirectTo(n)}}},791:function(e,n,t){var r=t(770),a=t(774),i=t(830),o={seperator:"###",limit:1,report_url:"https://statistics.pingxx.com/one_stats",timeout:100},c=function(e,n){var t=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),r=e.substr(0).match(t);return null!==r?unescape(r[2]):null},l=function(){return navigator.userAgent},d=function(){return window.location.host};o.store=function(e){if("undefined"!=typeof localStorage&&null!==localStorage){var n=this,t={};t.app_id=e.app_id||a.app_id||"app_not_defined",t.ch_id=e.ch_id||"",t.channel=e.channel||"",t.type=e.type||"",t.user_agent=l(),t.host=d(),t.time=(new Date).getTime(),t.puid=a.puid;var r="app_id="+t.app_id+"&channel="+t.channel+"&ch_id="+t.ch_id+"&host="+t.host+"&time="+t.time+"&type="+t.type+"&user_agent="+t.user_agent+"&puid="+t.puid,i=r;null!==localStorage.getItem("PPP_ONE_STATS")&&0!==localStorage.getItem("PPP_ONE_STATS").length&&(i=localStorage.getItem("PPP_ONE_STATS")+n.seperator+r);try{localStorage.setItem("PPP_ONE_STATS",i)}catch(e){}}},o.send=function(){if("undefined"!=typeof localStorage&&null!==localStorage){var e=this,n=localStorage.getItem("PPP_ONE_STATS");if(!(null===n||n.split(e.seperator).length<e.limit))try{for(var t=[],a=n.split(e.seperator),o=i(a.join("&")),l=0;l<a.length;l++)t.push({app_id:c(a[l],"app_id"),channel:c(a[l],"channel"),ch_id:c(a[l],"ch_id"),host:c(a[l],"host"),time:c(a[l],"time"),type:c(a[l],"type"),user_agent:c(a[l],"user_agent"),puid:c(a[l],"puid")});r.request(e.report_url,"POST",t,function(e,n){200==n&&localStorage.removeItem("PPP_ONE_STATS")},void 0,{"X-Pingpp-Report-Token":o})}catch(e){}}},o.report=function(e){var n=this;n.store(e),setTimeout(function(){n.send()},n.timeout)},e.exports=o},792:function(e,n,t){var r=t(772),a={}.hasOwnProperty;e.exports={id:null,or_id:null,channel:null,app:null,credential:{},extra:null,livemode:null,order_no:null,time_expire:null,init:function(e){var n;if("string"==typeof e)try{n=JSON.parse(e)}catch(e){return void r.innerCallback("fail",r.error("json_decode_fail",e))}else n=e;if(void 0===n)return void r.innerCallback("fail",r.error("json_decode_fail"));if(a.call(n,"object")&&"order"==n.object){n.or_id=n.id,n.id=n.charge,n.order_no=n.merchant_order_no;var t=n.charge_essentials;n.channel=t.channel,n.credential=t.credential,n.extra=t.extra}for(var i in this)a.call(n,i)&&(this[i]=n[i]);return this},clear:function(){for(var e in this)"function"!=typeof this[e]&&(this[e]=null)}}},814:function(e,n,t){var r=t(770),a={}.hasOwnProperty;e.exports={ALIPAY_PC_DIRECT_URL:"https://mapi.alipay.com/gateway.do",handleCharge:function(e){var n=e.channel,t=e.credential[n],i=this.ALIPAY_PC_DIRECT_URL;a.call(t,"channel_url")&&(i=t.channel_url),a.call(t,"_input_charset")||(t._input_charset="utf-8");var o=r.stringifyData(t,n,!0);r.redirectTo(i+"?"+o)}}},815:function(e,n,t){var r=t(770),a=t(779),i={}.hasOwnProperty;e.exports={ALIPAY_WAP_URL_OLD:"https://wappaygw.alipay.com/service/rest.htm",ALIPAY_WAP_URL:"https://mapi.alipay.com/gateway.do",handleCharge:function(e){var n=e.channel,t=e.credential[n],o=this.ALIPAY_WAP_URL;i.call(t,"req_data")?o=this.ALIPAY_WAP_URL_OLD:i.call(t,"channel_url")&&(o=t.channel_url),i.call(t,"_input_charset")||(i.call(t,"service")&&"alipay.wap.create.direct.pay.by.user"===t.service||i.call(t,"req_data"))&&(t._input_charset="utf-8");var c=r.stringifyData(t,n,!0),l=o+"?"+c,d=a.getExtraModule("ap");r.inWeixin()&&void 0!==d?d.pay(l):r.redirectTo(l)}}},816:function(e,n,t){var r=t(770),a=t(772),i={}.hasOwnProperty;e.exports={handleCharge:function(e){var n=e.channel,t=e.credential[n];if(!i.call(t,"url"))return void a.innerCallback("fail",a.error("invalid_credential","missing_field:url"));r.redirectTo(t.url+"?"+r.stringifyData(t,n))}}},817:function(e,n,t){var r=t(770);e.exports={CP_B2B_URL:"https://payment.chinapay.com/CTITS/service/rest/page/nref/000000000017/0/0/0/0/0",handleCharge:function(e){var n=e.credential[e.channel];r.formSubmit(this.CP_B2B_URL,"post",n)}}},818:function(e,n,t){var r=t(774),a={}.hasOwnProperty;!function(){var n={},t={};t.PADCHAR="=",t.ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t.makeDOMException=function(){try{return new DOMException(DOMException.INVALID_CHARACTER_ERR)}catch(n){var e=new Error("DOM Exception 5");return e.code=e.number=5,e.name=e.description="INVALID_CHARACTER_ERR",e.toString=function(){return"Error: "+e.name+": "+e.message},e}},t.getbyte64=function(e,n){var r=t.ALPHA.indexOf(e.charAt(n));if(-1===r)throw t.makeDOMException();return r},t.decode=function(e){e=""+e;var n,r,a,i=t.getbyte64,o=e.length;if(0===o)return e;if(o%4!=0)throw t.makeDOMException();n=0,e.charAt(o-1)===t.PADCHAR&&(n=1,e.charAt(o-2)===t.PADCHAR&&(n=2),o-=4);var c=[];for(r=0;r<o;r+=4)a=i(e,r)<<18|i(e,r+1)<<12|i(e,r+2)<<6|i(e,r+3),c.push(String.fromCharCode(a>>16,a>>8&255,255&a));switch(n){case 1:a=i(e,r)<<18|i(e,r+1)<<12|i(e,r+2)<<6,c.push(String.fromCharCode(a>>16,a>>8&255));break;case 2:a=i(e,r)<<18|i(e,r+1)<<12,c.push(String.fromCharCode(a>>16))}return c.join("")},t.getbyte=function(e,n){var r=e.charCodeAt(n);if(r>255)throw t.makeDOMException();return r},t.encode=function(e){if(1!==arguments.length)throw new SyntaxError("Not enough arguments");var n,r,a=t.PADCHAR,i=t.ALPHA,o=t.getbyte,c=[];e=""+e;var l=e.length-e.length%3;if(0===e.length)return e;for(n=0;n<l;n+=3)r=o(e,n)<<16|o(e,n+1)<<8|o(e,n+2),c.push(i.charAt(r>>18)),c.push(i.charAt(r>>12&63)),c.push(i.charAt(r>>6&63)),c.push(i.charAt(63&r));switch(e.length-l){case 1:r=o(e,n)<<16,c.push(i.charAt(r>>18)+i.charAt(r>>12&63)+a+a);break;case 2:r=o(e,n)<<16|o(e,n+1)<<8,c.push(i.charAt(r>>18)+i.charAt(r>>12&63)+i.charAt(r>>6&63)+a)}return c.join("")},n.url="pay.htm",n.pay=function(e){var i=encodeURIComponent(t.encode(e));a.call(r,"APURL")&&(n.url=r.APURL),location.href=n.url+"?goto="+i},n.decode=function(e){return t.decode(decodeURIComponent(e))},e.exports=n}()},819:function(e,n,t){var r=t(790);e.exports={handleCharge:function(e){r.handleCharge(e)}}},820:function(e,n,t){var r=t(790);e.exports={handleCharge:function(e){r.handleCharge(e)}}},821:function(e,n,t){var r=t(770),a={}.hasOwnProperty;e.exports={JDPAY_WAP_URL_OLD:"https://m.jdpay.com/wepay/web/pay",JDPAY_H5_URL:"https://h5pay.jd.com/jdpay/saveOrder",JDPAY_PC_URL:"https://wepay.jd.com/jdpay/saveOrder",handleCharge:function(e){var n=e.credential[e.channel],t=this.JDPAY_H5_URL;a.call(n,"channelUrl")?(t=n.channelUrl,delete n.channelUrl):a.call(n,"merchantRemark")&&(t=this.JDPAY_WAP_URL_OLD),r.formSubmit(t,"post",n)}}},822:function(e,n,t){var r=t(772),a=t(770),i=t(774),o={}.hasOwnProperty;e.exports={SRC_URL:"http://pub.idqqimg.com/qqmobile/qqapi.js?_bid=152",ID:"mqq_api",handleCharge:function(e){var n=e.credential[e.channel];if(!o.call(n,"token_id"))return void r.innerCallback("fail",r.error("invalid_credential","missing_token_id"));i.tokenId=n.token_id,a.loadUrlJs(this.ID,this.SRC_URL,this.callpay)},callpay:function(){if("undefined"!=typeof mqq){if(0==mqq.QQVersion)return r.innerCallback("fail","Not in the QQ client"),void delete i.tokenId;mqq.tenpay.pay({tokenId:i.tokenId},r.userCallback)}else r.innerCallback("fail","network_err");delete i.tokenId}}},823:function(e,n,t){var r=t(770);e.exports={UPACP_PC_URL:"https://gateway.95516.com/gateway/api/frontTransReq.do",handleCharge:function(e){var n=e.credential[e.channel];r.formSubmit(this.UPACP_PC_URL,"post",n)}}},824:function(e,n,t){var r=t(770);e.exports={UPACP_WAP_URL:"https://gateway.95516.com/gateway/api/frontTransReq.do",handleCharge:function(e){var n=e.credential[e.channel];r.formSubmit(this.UPACP_WAP_URL,"post",n)}}},825:function(e,n,t){var r=t(774),a=t(772),i={}.hasOwnProperty;e.exports={handleCharge:function(e){for(var n=e.credential[e.channel],t=["appId","timeStamp","nonceStr","package","signType","paySign"],o=0;o<t.length;o++)if(!i.call(n,t[o]))return void a.innerCallback("fail",a.error("invalid_credential","missing_field_"+t[o]));r.jsApiParameters=n,this.callpay()},wxLiteEnabled:function(){return"undefined"!=typeof wx&&wx.requestPayment},callpay:function(){if(!this.wxLiteEnabled())return void console.log("请在微信小程序中打开");var e=r.jsApiParameters;delete e.appId,e.complete=function(e){"requestPayment:ok"===e.errMsg&&a.innerCallback("success"),"requestPayment:cancel"===e.errMsg&&a.innerCallback("cancel",a.error("用户取消支付")),"undefined"!==e.err_code&&"undefined"!==e.err_desc&&a.innerCallback("fail",a.error(e.err_desc,e))},wx.requestPayment(e)},runTestMode:function(e){wx.showModal({title:"提示",content:'因 "微信小程序" 限制 域名的原因 暂不支持 模拟付款 请使用 livekey 获取 charge 进行支付'})}}},826:function(e,n,t){var r=t(772),a=t(770),i=t(774),o=t(779),c={}.hasOwnProperty;e.exports={PINGPP_NOTIFY_URL_BASE:"https://api.pingxx.com/notify",handleCharge:function(e){for(var n=e.credential[e.channel],t=["appId","timeStamp","nonceStr","package","signType","paySign"],a=0;a<t.length;a++)if(!c.call(n,t[a]))return void r.innerCallback("fail",r.error("invalid_credential","missing_field_"+t[a]));i.jsApiParameters=n,this.callpay()},callpay:function(){var e=this,n=o.getExtraModule("wx_jssdk");if(void 0!==n&&n.jssdkEnabled())n.callpay();else if("undefined"==typeof WeixinJSBridge){var t=function(){e.jsApiCall()};document.addEventListener?document.addEventListener("WeixinJSBridgeReady",t,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",t),document.attachEvent("onWeixinJSBridgeReady",t))}else this.jsApiCall()},jsApiCall:function(){c.call(i,"jsApiParameters")&&WeixinJSBridge.invoke("getBrandWCPayRequest",i.jsApiParameters,function(e){delete i.jsApiParameters,"get_brand_wcpay_request:ok"==e.err_msg?r.innerCallback("success"):"get_brand_wcpay_request:cancel"==e.err_msg?r.innerCallback("cancel"):r.innerCallback("fail",r.error("wx_result_fail",e.err_msg))})},runTestMode:function(e){if(confirm("模拟付款？")){var n=(null===e.or_id?"":"/orders/"+e.or_id)+"/charges/"+e.id;a.request(this.PINGPP_NOTIFY_URL_BASE+n+"?livemode=false","GET",null,function(e,n){if(n>=200&&n<400&&"success"==e)r.innerCallback("success");else{var t="http_code:"+n+";response:"+e;r.innerCallback("fail",r.error("testmode_notify_fail",t))}},function(){r.innerCallback("fail",r.error("network_err"))})}}}},827:function(e,n,t){var r=t(770),a=t(772),i={}.hasOwnProperty;e.exports={handleCharge:function(e){var n=e.credential[e.channel];"string"==typeof n?r.redirectTo(n):"object"==typeof n&&i.call(n,"url")?r.redirectTo(n.url):a.innerCallback("fail",a.error("invalid_credential","credential 格式不正确"))}}},828:function(e,n,t){var r=t(770),a=t(772),i={}.hasOwnProperty;e.exports={YEEPAY_WAP_URL:"https://ok.yeepay.com/paymobile/api/pay/request",YEEPAY_WAP_TEST_URL:"http://mobiletest.yeepay.com/paymobile/api/pay/request",handleCharge:function(e){for(var n=e.channel,t=e.credential[n],o=["merchantaccount","encryptkey","data"],c=0;c<o.length;c++)if(!i.call(t,o[c]))return void a.innerCallback("fail",a.error("invalid_credential","missing_field_"+o[c]));var l;l=i.call(t,"mode")&&"test"==t.mode?this.YEEPAY_WAP_TEST_URL:this.YEEPAY_WAP_URL,r.redirectTo(l+"?"+r.stringifyData(t,n,!0))}}},829:function(e,n,t){var r=t(774),a=t(770),i=t(791);e.exports={SRC_URL:"https://cookie.pingxx.com",init:function(){var e=this;a.documentReady(function(){e.initPuid()})},initPuid:function(){if("undefined"!=typeof window&&"undefined"!=typeof localStorage){var e=localStorage.getItem("pingpp_uid");if(null===e){e=a.randomString();try{localStorage.setItem("pingpp_uid",e)}catch(e){}}if(r.puid=e,!document.getElementById("p_analyse_iframe")){var n;try{n=document.createElement("iframe")}catch(e){n=document.createElement('<iframe name="ifr"></iframe>')}n.id="p_analyse_iframe",n.src=this.SRC_URL+"/?puid="+e,n.style.display="none",document.body.appendChild(n)}setTimeout(function(){i.send()},0)}}}},830:function(e,n){!function(){function n(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}function t(e,n){return e<<n|e>>>32-n}function r(e,r,a,i,o,c){return n(t(n(n(r,e),n(i,c)),o),a)}function a(e,n,t,a,i,o,c){return r(n&t|~n&a,e,n,i,o,c)}function i(e,n,t,a,i,o,c){return r(n&a|t&~a,e,n,i,o,c)}function o(e,n,t,a,i,o,c){return r(n^t^a,e,n,i,o,c)}function c(e,n,t,a,i,o,c){return r(t^(n|~a),e,n,i,o,c)}function l(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var r,l,d,u,p,s=1732584193,f=-271733879,h=-1732584194,m=271733878;for(r=0;r<e.length;r+=16)l=s,d=f,u=h,p=m,s=a(s,f,h,m,e[r],7,-680876936),m=a(m,s,f,h,e[r+1],12,-389564586),h=a(h,m,s,f,e[r+2],17,606105819),f=a(f,h,m,s,e[r+3],22,-1044525330),s=a(s,f,h,m,e[r+4],7,-176418897),m=a(m,s,f,h,e[r+5],12,1200080426),h=a(h,m,s,f,e[r+6],17,-1473231341),f=a(f,h,m,s,e[r+7],22,-45705983),s=a(s,f,h,m,e[r+8],7,1770035416),m=a(m,s,f,h,e[r+9],12,-1958414417),h=a(h,m,s,f,e[r+10],17,-42063),f=a(f,h,m,s,e[r+11],22,-1990404162),s=a(s,f,h,m,e[r+12],7,1804603682),m=a(m,s,f,h,e[r+13],12,-40341101),h=a(h,m,s,f,e[r+14],17,-1502002290),f=a(f,h,m,s,e[r+15],22,1236535329),s=i(s,f,h,m,e[r+1],5,-165796510),m=i(m,s,f,h,e[r+6],9,-1069501632),h=i(h,m,s,f,e[r+11],14,643717713),f=i(f,h,m,s,e[r],20,-373897302),s=i(s,f,h,m,e[r+5],5,-701558691),m=i(m,s,f,h,e[r+10],9,38016083),h=i(h,m,s,f,e[r+15],14,-660478335),f=i(f,h,m,s,e[r+4],20,-405537848),s=i(s,f,h,m,e[r+9],5,568446438),m=i(m,s,f,h,e[r+14],9,-1019803690),h=i(h,m,s,f,e[r+3],14,-187363961),f=i(f,h,m,s,e[r+8],20,1163531501),s=i(s,f,h,m,e[r+13],5,-1444681467),m=i(m,s,f,h,e[r+2],9,-51403784),h=i(h,m,s,f,e[r+7],14,1735328473),f=i(f,h,m,s,e[r+12],20,-1926607734),s=o(s,f,h,m,e[r+5],4,-378558),m=o(m,s,f,h,e[r+8],11,-2022574463),h=o(h,m,s,f,e[r+11],16,1839030562),f=o(f,h,m,s,e[r+14],23,-35309556),s=o(s,f,h,m,e[r+1],4,-1530992060),m=o(m,s,f,h,e[r+4],11,1272893353),h=o(h,m,s,f,e[r+7],16,-155497632),f=o(f,h,m,s,e[r+10],23,-1094730640),s=o(s,f,h,m,e[r+13],4,681279174),m=o(m,s,f,h,e[r],11,-358537222),h=o(h,m,s,f,e[r+3],16,-722521979),f=o(f,h,m,s,e[r+6],23,76029189),s=o(s,f,h,m,e[r+9],4,-640364487),m=o(m,s,f,h,e[r+12],11,-421815835),h=o(h,m,s,f,e[r+15],16,530742520),f=o(f,h,m,s,e[r+2],23,-995338651),s=c(s,f,h,m,e[r],6,-198630844),m=c(m,s,f,h,e[r+7],10,1126891415),h=c(h,m,s,f,e[r+14],15,-1416354905),f=c(f,h,m,s,e[r+5],21,-57434055),s=c(s,f,h,m,e[r+12],6,1700485571),m=c(m,s,f,h,e[r+3],10,-1894986606),h=c(h,m,s,f,e[r+10],15,-1051523),f=c(f,h,m,s,e[r+1],21,-2054922799),s=c(s,f,h,m,e[r+8],6,1873313359),m=c(m,s,f,h,e[r+15],10,-30611744),h=c(h,m,s,f,e[r+6],15,-1560198380),f=c(f,h,m,s,e[r+13],21,1309151649),s=c(s,f,h,m,e[r+4],6,-145523070),m=c(m,s,f,h,e[r+11],10,-1120210379),h=c(h,m,s,f,e[r+2],15,718787259),f=c(f,h,m,s,e[r+9],21,-343485551),s=n(s,l),f=n(f,d),h=n(h,u),m=n(m,p);return[s,f,h,m]}function d(e){var n,t="";for(n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>n%32&255);return t}function u(e){var n,t=[];for(t[(e.length>>2)-1]=void 0,n=0;n<t.length;n+=1)t[n]=0;for(n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<n%32;return t}function p(e){return d(l(u(e),8*e.length))}function s(e,n){var t,r,a=u(e),i=[],o=[];for(i[15]=o[15]=void 0,a.length>16&&(a=l(a,8*e.length)),t=0;t<16;t+=1)i[t]=909522486^a[t],o[t]=1549556828^a[t];return r=l(i.concat(u(n)),512+8*n.length),d(l(o.concat(r),640))}function f(e){var n,t,r="0123456789abcdef",a="";for(t=0;t<e.length;t+=1)n=e.charCodeAt(t),a+=r.charAt(n>>>4&15)+r.charAt(15&n);return a}function h(e){return unescape(encodeURIComponent(e))}function m(e){return p(h(e))}function _(e){return f(m(e))}function y(e,n){return s(h(e),h(n))}function g(e,n){return f(y(e,n))}function v(e,n,t){return n?t?y(n,e):g(n,e):t?m(e):_(e)}e.exports=v}()},831:function(e,n,t){var r=t(833).v,a=t(832),i=t(772),o=t(779),c=t(774),l=t(791),d=t(792),u={}.hasOwnProperty,p=function(){t(829).init()};p.prototype={version:r,createPayment:function(e,n,t,r){if("function"==typeof n&&(i.userCallback=n),d.init(e),!u.call(d,"id"))return void i.innerCallback("fail",i.error("invalid_charge","no_charge_id"));if(!u.call(d,"channel"))return void i.innerCallback("fail",i.error("invalid_charge","no_channel"));u.call(d,"app")&&("string"==typeof d.app?c.app_id=d.app:"object"==typeof d.app&&"string"==typeof d.app.id&&(c.app_id=d.app.id)),l.report({type:"pure_sdk_click",channel:d.channel,ch_id:d.id});var p=d.channel;if(!u.call(d,"credential"))return void i.innerCallback("fail",i.error("invalid_charge","no_credential"));if(!d.credential)return void i.innerCallback("fail",i.error("invalid_credential","credential_is_undefined"));if(!u.call(d.credential,p))return void i.innerCallback("fail",i.error("invalid_credential","credential_is_incorrect"));if(!u.call(d,"livemode"))return void i.innerCallback("fail",i.error("invalid_charge","no_livemode_field"));var s=o.getChannelModule(p);return void 0===s?(console.error('channel module "'+p+'" is undefined'),void i.innerCallback("fail",i.error("invalid_channel",'channel module "'+p+'" is undefined'))):!1===d.livemode?void(u.call(s,"runTestMode")?s.runTestMode(d):a.runTestMode(d)):(void 0!==t&&(c.signature=t),"boolean"==typeof r&&(c.debug=r),void s.handleCharge(d))},setAPURL:function(e){c.APURL=e}},e.exports=new p},832:function(e,n,t){var r=t(770),a={}.hasOwnProperty;e.exports={PINGPP_MOCK_URL:"http://sissi.pingxx.com/mock.php",runTestMode:function(e){var n={ch_id:e.id,scheme:"http",channel:e.channel};a.call(e,"or_id")&&null!==e.or_id&&(n.or_id=e.or_id),a.call(e,"order_no")?n.order_no=e.order_no:a.call(e,"orderNo")&&(n.order_no=e.orderNo),a.call(e,"time_expire")?n.time_expire=e.time_expire:a.call(e,"timeExpire")&&(n.time_expire=e.timeExpire),a.call(e,"extra")&&(n.extra=encodeURIComponent(JSON.stringify(e.extra))),r.redirectTo(this.PINGPP_MOCK_URL+"?"+r.stringifyData(n))}}},833:function(e,n){e.exports={v:"2.1.8"}}});