import request from '../utils/request'
import config from '../../config/config'
import { browserHistory } from 'react-router'

export const REQUEST_HOTEL_LISTS= 'REQUEST_HOST';
export const RECEIVE_HOTEL_LISTS = 'RECEIVE_HOST';


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
        dispatch(requestHotelLists(info));

        let dt = request(config.remote_host+config.remote_path.hotelInfo+'/'+info.teamId+'/'+info.page);

        dt.then((json) => {
            dispatch(receiveHotelLists(json));
            console.log(json);
        });

        return dt;
    }
}
