import request from '../utils/request'
import config from '../../config/config'
import { browserHistory } from 'react-router'

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';

export const REQUEST_INDEX_IMG = 'REQUEST_INDEX_IMG';
export const RECEIVE_INDEX_IMG = 'RECEIVE_INDEX_IMG';

export const REQUEST_CHANGE_NICKNAME = 'REQUEST_CHANGE_NICKNAME';
export const RECEIVE_CHANGE_NICKNAME = 'RECEIVE_CHANGE_NICKNAME';


export function requestChangeNickname(nickname) {
    return {
        type: REQUEST_CHANGE_NICKNAME,
        nickname
    }
}
export function receiveChangeNickname(json) {
    return {
        type: RECEIVE_CHANGE_NICKNAME,
        json
    }
}
export function fetchChangeNickname(nickname) {
    return (dispatch) => {
        dispatch(requestChangeNickname(nickname));
        let options = {
            method: 'POST',
            body: {
                nickname: nickname
            }
        };
        let dt = request(config.remote_host+config.remote_path.changeNickname, options, true);
        dt.then((json)=>{
            dispatch(receiveChangeNickname({code: json.code, nickname: nickname}));
            console.log(json);
        });
        return dt;
    }
}

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

export function requestIndexImg(data) {
    return {
        type:REQUEST_INDEX_IMG,
        data
    }
}

export function receiveIndexImg(data) {
    return {
        type: RECEIVE_INDEX_IMG,
        data: data
    }
}


export function fetchIndexImg(data) {
    return (dispatch) => {
        dispatch(requestIndexImg(data));

        let dt = request(config.remote_host+config.remote_path.wechatInfo+'/'+data.token);

        dt.then((json)=>{
            dispatch(receiveIndexImg(json));
        });

        return dt;
    }
}