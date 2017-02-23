import user from './user'
import register from './register'
import hotel from './hotel'
import storage from './storage'
import order from './order'
import snap from './snap'
import { combineReducers } from 'redux'

export default combineReducers({
    user,
    register,
    hotel,
    storage,
    order,
    snap
})