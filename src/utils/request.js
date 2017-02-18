import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import {getCookie} from '../components/Common'
import config from '../../config/config'

export default function request(url, options, needToken=false) {
    if (!options) {
        options = {method: 'GET'};
    }
    options.mode = 'cors';
    options.credentials = 'include';
    let sessionToken = (config.mid==config.development?config.admin_token:getCookie('Session-Token'));

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });
    if (needToken) {
        myHeaders.append("Session-Token", sessionToken);
    }


    options.headers = myHeaders;
    options.body = JSON.stringify(options.body);

    // console.log('options: ', options);


    return fetch(url, options)
        .then(response => response.json())
        .then(json =>{
                return json;
            }
        )
        .catch((e) => {
            console.log("catch error: ", e);
        });
}