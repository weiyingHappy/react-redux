
import sha1 from 'sha1'


export function getCookie(c_name, pre = '')
{
    c_name = pre+c_name;
    if (document.cookie.length>0)
    {
        try {
            var reg = new RegExp("(^|\\s)" + c_name + "=([^;]*)(;|$)");
            let res = document.cookie.match(reg);
            if (res) {
                let ret = decodeURIComponent(res[2]);
                return ret;
            }
            else {
                return null;
            }
        }
        catch(e) {
            console.log(e);
        }
    }
    return null;
}

export function jsSdkInit(data, appid, url) {
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appid,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: sha1('jsapi_ticket=' + data.jsapi_ticket + '&noncestr=' + data.nonceStr + '&timestamp=' + data.timestamp + '&url='+url),
        jsApiList: [
            'checkJsApi',
            'openLocation',
            'getLocation'
        ]
    });
}

export function changeTitle(name) {
    var body = document.getElementsByTagName('body')[0];
    document.title = name;
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "about:blank");
    iframe.setAttribute("height", "0");
    iframe.setAttribute("width", "0");
    iframe.addEventListener('load', function() {
        setTimeout(function() {
            iframe.removeEventListener('load');
            document.body.removeChild(iframe);
        }, 0);
    });
    document.body.appendChild(iframe);
}