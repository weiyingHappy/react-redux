import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

export default function request(url, options) {
    if (!options) {
        options = {method: 'GET'};
    }
    options.mode = 'cors';

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    options.headers = myHeaders;
    options.body = JSON.stringify(options.body);

    // console.log('options: ', options);


    console.log('url: ', url);
    return fetch(url, options)
        .then(response => response.json())
        .then(json =>{
                return json;
            }
        );
}