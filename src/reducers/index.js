import {combineReducers} from 'redux';
import github from './githubreducer';
import user from './userreducer'
const rootReducer = combineReducers({
    github,
    user
});
export default rootReducer;