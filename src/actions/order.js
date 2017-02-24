import request from '../utils/request'
import config from '../../config/config'
import { browserHistory } from 'react-router'

export const SET_PAY = 'SET_PAY';
export const REQUEST_To_PAY = 'REQUEST_To_PAY';
export const RECEIVE_TO_PAY = 'RECEIVE_TO_PAY';

export const REQUEST_UNI_PAY_OPENID = 'REQUEST_UNI_PAY_OPENID';
export const RECEIVE_UNI_PAY_OPENID = 'RECEIVE_UNI_PAY_OPENID';

export const STATE_ALL  = '0';
export const STATE_NO = '1';
export const STATE_ALREADY = '2';
export const STATE_FINISH = '3';


export function fetchMyOrder(info) {

    return (dispatch) => {
        // dispatch()
    }

}


export function requestUniPayOpenid(info) {
    return {
        type: REQUEST_UNI_PAY_OPENID,
        info
    }
}
export function receiveUniPayOpenid(info) {
    return {
        type: RECEIVE_UNI_PAY_OPENID,
        info
    }
}
export function fetchUniPayOpenid(info) {
    return (dispatch) => {
        dispatch(requestUniPayOpenid(info));
        let options = {
            method: 'POST',
            body: info
        };
        let dt = request(config.api_host+config.api_path.uniPayOpenid, options, false);
        dt.then((json) => {
            dispatch(receiveUniPayOpenid(json));
        });
        return dt;
    }
}

export function requestToPay(info) {
    return {
        type: REQUEST_To_PAY,
        info
    }
}

export function receiveToPay(info) {
    return {
        type: RECEIVE_TO_PAY,
        info
    }
}

export function fetchToPay(info) {
    return (dispatch) => {
        dispatch(requestToPay(info));
        
        let options = {
            method: 'POST',
            body: info
        };
        
        let dt = request(config.api_host+config.api_path.toPay, options, false);

        dt.then((json) => {
           dispatch(receiveToPay(json));
        });
        
        return dt;
    }
}

export function setPay(pay) {
    return {
        type: SET_PAY,
        pay
    };
}


export function fetchOrderInfo(orderNo) {
    return (dispatch) => {
        dispatch(setPay({loading: true}));

        let dt = request(config.remote_host+config.remote_path.orderInfo+'/'+orderNo, null, true);

        dt.then((json)=>{
            if (json.code == 200) {
                dispatch(setPay(Object.assign({},json.results, {loading: false})));
            }
        });
        return dt;
    }
}
