import request from '../utils/request'
import config from '../../config/config'
import { browserHistory } from 'react-router'

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';


export function requestLogin(user) {
    return {
        type: REQUEST_LOGIN,
        user
    }
}

export function receiveLogin(json) {
    return {
        type: RECEIVE_LOGIN,
        data: json,
        receivedAt: Date.now()
    }
}

export function fetchLogin(user) {
    return (dispatch) => {
        dispatch(requestLogin(user));

        let options = {
            method: 'POST',
            body: {
                token: user.token,
                code: user.code
            }
        };

        let dt = request(config.api_host+config.api_path.login, options);

        dt.then((json) => {
            dispatch(receiveLogin(json));
            console.log(json);
        });

        return dt;
    }
}
