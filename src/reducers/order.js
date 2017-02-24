import { SET_PAY, REQUEST_To_PAY, RECEIVE_TO_PAY,STATE_ALL, REQUEST_UNI_PAY_OPENID, RECEIVE_UNI_PAY_OPENID,STATE_ALREADY, STATE_FINISH, STATE_NO } from '../actions/order'
import config from '../../config/config'
import moment from 'moment'

let order_state = {
    pay: {
        order_no: '',
        openid: '',
        loading: true,
        room: {},
        team: {},
        pay_loading: false,
        openid_loading: false
    },
    current: STATE_ALL,
    con: [{},{},{},{}]
};

function combineState(ori, now) {
    return Object.assign({}, ori, now);
}
export default function user(state=order_state, action) {
    switch(action.type) {
        case SET_PAY:
            return combineState(state, {pay: combineState(state.pay, action.pay)});
        case REQUEST_To_PAY:
            return combineState(state, {pay: combineState(state.pay, {pay_loading: true})});
        case RECEIVE_TO_PAY:
            return combineState(state, {pay: combineState(state.pay, {pay_loading: false})});
        case REQUEST_UNI_PAY_OPENID:
            return combineState(state, {pay: combineState(state.pay, {openid_loading: true})});
        case RECEIVE_UNI_PAY_OPENID:
            return combineState(state, {pay: combineState(state.pay, {openid_loading: false, openid: action.info.openid})});
        default:
            return state;
    }
}