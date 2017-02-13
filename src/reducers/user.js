import { REQUEST_LOGIN, RECEIVE_LOGIN } from '../actions/user'

let user_state = {
    isFetching: false,
    name: ''
};

export default function user(state=user_state, action) {
    switch(action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, {isFetching: true});
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {isFetching: false});
        default:
            return state;
    }
}