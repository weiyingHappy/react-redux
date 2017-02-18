import request from '../utils/request'
import config from '../../config/config'
import { browserHistory } from 'react-router'

export const REQUEST_INVENTORY = 'REQUEST_INVENTORY';
export const RECEIVE_INVENTORY = 'RECEIVE_INVENTORY';

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const SET_DATE = 'SET_DATE';
export const SET_DATE_PICKER = 'SET_DATE_PICKER';


export function setDate(info) {
    return {
        type: SET_DATE,
        data: info
    }
}

export function setDatePicker(picker) {
    return {
        type: SET_DATE_PICKER,
        data: picker
    }
}

export function requestInventory(info) {
    return {
        type: REQUEST_INVENTORY,
        info
    }
}

export function receiveInventory(json) {
    return {
        type: RECEIVE_INVENTORY,
        inventory: json.results.inventory,
        receivedAt: Date.now()
    }
}

export function fetchInventory(info) {
    return (dispatch) => {
        dispatch(requestInventory(info));

        let dt = request(config.remote_host+config.remote_path.inventory+'/'+info.roomId+'/'+info.start, null, true);

        dt.then((json) => {
            if (json.code == 200) {
                dispatch(receiveInventory(json));
            }
            console.log(json);
        });

        return dt;
    }
}


export function requestComments(info) {
    return {
        type: REQUEST_COMMENTS,
        info
    }
}

export function receiveComments(json) {
    return {
        type: RECEIVE_COMMENTS,
        comments: json.results,
        receivedAt: Date.now()
    }
}

export function fetchComments(info) {
    return (dispatch) => {
        dispatch(requestComments(info));

        let dt = request(config.remote_host+config.remote_path.getComments+'/'+info.roomId+'/'+info.page, null, true);

        dt.then((json) => {
            if (json.code == 200) {
                dispatch(receiveComments(json));
            }
        });

        return dt;
    }
}