import {REQUEST_COUPON_LISTS, RECEIVE_COUPON_LISTS, CHOOSE_COUPON} from '../actions/coupon'

let coupon_state = {
    isFetch: false,
    available: [],
    disable: [],
    recommend: {
        desc: {},
        coupon_type: 0
    },
    choose: undefined
}

export default function coupon(state=coupon_state, action) {
    switch (action.type) {
        case RECEIVE_COUPON_LISTS:
            let {available, disable, recommend} = action.payload.data
            if (!action.payload.data.recommend) {
                action.payload.data.recommend = {
                    desc: {},
                    coupon_type: 0
                }
            }
            return {
                ...state,
                ...action.payload.data
            }
        case CHOOSE_COUPON:
            return {
                ...state,
                choose: action.payload
            }
        default:
            return state
    }
}