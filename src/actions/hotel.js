import request from '../utils/request'
import config from '../../config/config'
import { browserHistory } from 'react-router'

export const REQUEST_HOTEL_LISTS= 'REQUEST_HOTEL_LISTS';
export const RECEIVE_HOTEL_LISTS = 'RECEIVE_HOTEL_LISTS';

export const CHANGE_ROOM = 'CHANGE_ROOM';


export function requestHotelLists(info) {
    return {
        type: REQUEST_HOTEL_LISTS,
        info
    }
}

export function receiveHotelLists(json) {
    return {
        type: RECEIVE_HOTEL_LISTS,
        data: json,
        receivedAt: Date.now()
    }
}

export function fetchHotelLists(info) {
    return (dispatch) => {
        if (info.page == 1) {
            dispatch(requestHotelLists(info));
        }

        let dt = request(config.remote_host+config.remote_path.hotelInfo+'/'+info.teamId+'/'+info.page);

        dt.then((json) => {
            dispatch(receiveHotelLists(json));
        });

        return dt;
    }
}


export function changeRoom(id) {
    return {
        type: CHANGE_ROOM,
        id
    }
}