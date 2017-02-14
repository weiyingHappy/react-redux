import { REQUEST_LOGIN, RECEIVE_LOGIN } from '../actions/user'

let user_state = {
    isFetching: false,

    teamId: 0,
    receivedAt: '',
    isLogin: false,
    wechatToken: '', // 为酒店生成的token
    wechatCode: '' // 第一次进入带过来的code
};

export default function user(state=user_state, action) {
    switch(action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, {isFetching: true, wechatToken: action.user.token, wechatCode: action.user.code});
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {isFetching: false, teamId: action.data.results.teamid, isLogin: (action.data.code==200)});
        default:
            return state;
    }
}