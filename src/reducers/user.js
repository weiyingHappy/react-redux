import { REQUEST_LOGIN, RECEIVE_LOGIN, REQUEST_INDEX_IMG, RECEIVE_INDEX_IMG } from '../actions/user'
import defaultImgs from '../static/images/two/icon-5.png'

let user_state = {
    isFetching: false,
    isLoading: false,

    teamId: 1,
    receivedAt: '',
    isLogin: false,
    wechatToken: '', // 为酒店生成的token
    wechatCode: '', // 第一次进入带过来的code

    indexImgs: []
};

export default function user(state=user_state, action) {
    switch(action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, {isFetching: true, wechatToken: action.user.token, wechatCode: action.user.code});
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {isFetching: false, teamId: action.data.results.teamid, isLogin: (action.data.code==200)});
        case REQUEST_INDEX_IMG:
            return Object.assign({}, state, {isLoading: true});
        case RECEIVE_INDEX_IMG:
            return Object.assign({}, state, {isLoading: false, indexImgs: action.data.results.img||[defaultImgs,defaultImgs]});
        default:
            return state;
    }
}