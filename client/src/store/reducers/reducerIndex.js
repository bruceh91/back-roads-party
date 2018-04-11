import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import activeUserReducer from './reducer-active-user';
import currentUserIDReducer from './redCurrentUserID';


const allReducers = combineReducers({
    users: UserReducer,
    activeUser: activeUserReducer,
    currentUserID: currentUserIDReducer
})

export default allReducers;