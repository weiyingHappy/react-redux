import { defineAction } from 'redux-define'
import config from '@/config/config'
import request from '../utils/request'

export const ROOM_INFO = defineAction('ROOM_INFO',['FETCH', 'SUCCESS', 'ERROR'])

export const fetchRoomInfo = (room_id) => {
    return dispatch => {
        dispatch({
            type: ROOM_INFO.FETCH
        })
        request(`${config.remote_host}${config.remote_path.roomInfo}/${room_id}`)
            .then((data) => {
                if(data.code === 200){
                    dispatch({
                        type: ROOM_INFO.SUCCESS,
                        payload: data.results
                    })
                }else {
                    dispatch({
                        type: ROOM_INFO.ERROR
                    })
                }
            })
    }
}