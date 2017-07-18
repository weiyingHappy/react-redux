import user from './user'
import register from './register'
import hotel from './hotel'
import storage from './storage'
import order from './order'
import snap from './snap'
import coupon from './coupon'
import room from './room'
import luggage from './luggage' // 无忧行李state
import { combineReducers } from 'redux'

export default combineReducers({
    user,
    register,
    hotel,
    storage,
    order,
    snap,
    coupon,
    luggage,
    room
})