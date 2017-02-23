import { REQUEST_LOGIN, RECEIVE_LOGIN, REQUEST_INDEX_IMG, RECEIVE_INDEX_IMG, REQUEST_CHANGE_NICKNAME, RECEIVE_CHANGE_NICKNAME } from '../actions/user'
import defaultImgs from '../static/images/two/icon-5.png'
import config from '../../config/config'

let user_state = {
    isFetching: false,
    isLoading: false,

    teamId: 1,
    appid: '',
    appsecret: '',
    nickname: '',
    phone: '',
    receivedAt: '',
    isLogin: false,
    wechatToken: '', // 为酒店生成的token
    wechatCode: '', // 第一次进入带过来的code
    avatar: '',

    indexImgs: []
};

export default function user(state=user_state, action) {
    switch(action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, {isFetching: true, wechatToken: action.user.token, wechatCode: action.user.code});
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {isFetching: false, teamId: action.data.results.teamid, isLogin: (action.data.code==200||config.mid==config.development),
                                            nickname: action.data.results.nickname||'', phone: action.data.results.phone||'', appid:action.data.results.appid,
                                            appsecret: action.data.results.appsecret, avatar: action.data.results.avatar});
        case REQUEST_INDEX_IMG:
            return Object.assign({}, state, {isLoading: true});
        case RECEIVE_INDEX_IMG:
            return Object.assign({}, state, {isLoading: false, indexImgs: action.data.results.img||[defaultImgs,defaultImgs]});

        case REQUEST_CHANGE_NICKNAME:
            return Object.assign({}, state, {isLoading: true});
        case RECEIVE_CHANGE_NICKNAME:
            return Object.assign({}, state, {isLoading: false, nickname: (action.json.code==200?action.json.nickname:state.nickname)});
        default:
            return state;
    }
}