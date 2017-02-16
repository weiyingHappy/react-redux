import { REQUEST_LOGIN, RECEIVE_LOGIN } from '../actions/user'
import config from '../../config/config'
import moment from 'moment'

let storage_state = {
    from: moment(),
    to: moment().add(1,'d')
};

export default function user(state=storage_state, action) {
    switch(action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, {isFetching: true, wechatToken: action.user.token, wechatCode: action.user.code});
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {isFetching: false, teamId: action.data.results.teamid, isLogin: (action.data.code==200||config.mid==config.development)});
        default:
            return state;
    }
}