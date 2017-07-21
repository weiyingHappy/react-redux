import pro_conf from './config.production'
import dev_conf from './config.development'
import test_conf from './config.test'
import api_path from './config.api_path'

let production = 'production';
let development = 'development';
let test = 'test';

let mid;
if (window.location.hostname == 'www.lianwuyun.cn') {
    mid = test;
} else if (window.location.hostname == 'www.hotelets.com') {
    mid = production;
} else {
    mid = development;
}

let now = (mid == development?dev_conf:(mid==test?test_conf:pro_conf));

let config = {
    api_host: now.api_host,
    remote_host: now.remote_host,
    my_host: now.my_host,

    admin_token: '607a3614b435b08a27922c9127adc6d9',

    ping_appid: now.ping_appid,
    pay_appid: now.pay_appid,
    ru: now.ru,

    debug: (mid == development?true:false),

    mid: mid,
    production: production,
    development: development
};
config = Object.assign({}, config, api_path);

module.exports = config;
