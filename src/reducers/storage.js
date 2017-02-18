import { REQUEST_INVENTORY, RECEIVE_INVENTORY, REQUEST_COMMENTS, RECEIVE_COMMENTS, SET_DATE, SET_DATE_PICKER } from '../actions/storage'
import config from '../../config/config'
import moment from 'moment'

let storage_state = {
    from: moment(),
    to: moment().add(1,'d'),
    datePicker: 0,

    inventory: 0,
    inventory_loading: false,

    comments: {
        nowPage: 0,
        totalPage: 0,
        lists: [],
        loading: false
    }
};

function setComments(comments, options) {
    return Object.assign({}, comments, options);
}
export default function user(state=storage_state, action) {
    switch(action.type) {
        case REQUEST_INVENTORY:
            return Object.assign({}, state, {inventory_loading: true});
        case RECEIVE_INVENTORY:
            return Object.assign({}, state, {inventory_loading: false, inventory: action.inventory});
        case REQUEST_COMMENTS:
            return Object.assign({}, state, {comments: setComments(state.comments, {loading: true})});
        case RECEIVE_COMMENTS:
            return Object.assign({}, state, {comments: setComments(state.comments, {loading: false,
                                    lists:action.comments.lists, nowPage: action.comments.nowPage, totalPage: action.comments.totalPage})});
        case SET_DATE:
            return Object.assign({}, state, {from: action.data.from, to: action.data.to});
        case SET_DATE_PICKER:
            return Object.assign({}, state, {datePicker: action.data});
        default:
            return state;
    }
}