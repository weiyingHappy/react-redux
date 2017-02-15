import { REQUEST_HOTEL_LISTS, RECEIVE_HOTEL_LISTS } from '../actions/hotel'

let hotel_state = {
    isFetching: false,
    intro: {},
    lists: [],
    nowPage: 0,
    totalPage: 0,
    hasData: false
};

export default function hotel(state=hotel_state, action) {
    switch(action.type) {
        case REQUEST_HOTEL_LISTS:
            return Object.assign({}, state, {isFetching: true});
        case RECEIVE_HOTEL_LISTS:
            return Object.assign({}, state, {isFetching: false, intro: action.data.results.other,
                nowPage: action.data.results.nowPage, totalPage: action.data.results.totalPage,
                lists: [...state.lists,action.data.results.lists], hasData: true});
        default:
            return state;
    }
}