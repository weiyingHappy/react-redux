
import pro_conf from './config.production'
import dev_conf from './config.development'
import test_conf from './config.test'
import api_path from './config.api_path'

let production = 'production';
let development = 'development';
let test = 'test';

let mid = production;

let now = (mid == development?dev_conf:(mid==test?test_conf:pro_conf));

let config = {
    api_host: now.api_host,
    remote_host: now.remote_host,
    my_host: now.my_host,

    admin_token: '909f10206b82f3e54f107c2263cf9d5a',

    ping_appid: now.ping_appid,

    debug: false,

    mid: mid,
    production: production,
    development: development
};
config = Object.assign({}, config, api_path);

module.exports = config;