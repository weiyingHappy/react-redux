import user from './user'
import register from './register'
import hotel from './hotel'
import { combineReducers } from 'redux'

export default combineReducers({
    user,
    register,
    hotel
})