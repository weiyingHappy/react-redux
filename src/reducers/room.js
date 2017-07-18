import { ROOM_INFO } from '../actions/room'


const default_state = {
    room_id: '',
    state: 0, // 0初始化，1请求中，2请求完成, 3请求失败
    room_info: undefined
}

export default function room(state = default_state, action) {
    switch(action.type) {
        case ROOM_INFO.FETCH:
            return {
                ...state,
                state: 1
            }
        case ROOM_INFO.SUCCESS:
            return {
                ...state,
                room_info: action.payload,
                state: 2
            }
        case ROOM_INFO.ERROR:
            return {
                ...state,
                state: 3
            }
        default:
            return state
    }
}