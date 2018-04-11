import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import activeUserReducer from './reducer-active-user';


const allReducers = combineReducers({
    users: UserReducer,
    activeUser: activeUserReducer
})

export default allReducers;