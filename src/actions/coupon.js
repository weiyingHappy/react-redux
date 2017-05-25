import request from '../utils/request'
import config from '../../config/config'
export const REQUEST_COUPON_LISTS = 'REQUEST_COUPON_LISTS'
export const RECEIVE_COUPON_LISTS = 'RECEIVE_COUPON_LISTS'
export const CHOOSE_COUPON = 'CHOOSE_COUPON'

export function fetchCouponLists (payload) {
    return (dispatch) => request(`${config.remote_host}${config.remote_path.usageCoupon}`, {
        method: 'POST',
        body: {
            price: payload.price,
            team_id: payload.team_id
        }
    }, true).then((data) => {
        dispatch({
            type: RECEIVE_COUPON_LISTS,
            payload: {
                data: data.results
            }
        })
    })
}

export function chooseCoupon (payload) {
    return {
        type: CHOOSE_COUPON,
        payload
    }
}