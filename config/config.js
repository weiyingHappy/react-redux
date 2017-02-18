
import pro_conf from './config.production'
import dev_conf from './config.development'
import api_path from './config.api_path'

let production = 'production';
let development = 'development';

let mid = production;

let now = (mid == development?dev_conf:pro_conf);

let config = {
    api_host: now.api_host,
    remote_host: now.remote_host,

    admin_token: '6063c29b11eceae172e2bde991d0c10a',

    mid: mid,
    production: production,
    development: development
};
config = Object.assign({}, config, api_path);

module.exports = config;