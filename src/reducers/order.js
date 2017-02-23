import { SET_PAY, STATE_ALL, STATE_ALREADY, STATE_FINISH, STATE_NO } from '../actions/order'
import config from '../../config/config'
import moment from 'moment'

let order_state = {
    pay: {
        order_no: '',
        loading: true,
        room: {},
        team: {}
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
        default:
            return state;
    }
}