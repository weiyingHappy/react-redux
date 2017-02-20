import request from '../utils/request'
import config from '../../config/config'
import { browserHistory } from 'react-router'

export const SET_PAY = 'SET_PAY';

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
