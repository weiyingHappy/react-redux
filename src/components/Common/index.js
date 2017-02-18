


export function getCookie(c_name, pre = '')
{
    c_name = pre+c_name;
    alert("现在取: "+c_name);
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

