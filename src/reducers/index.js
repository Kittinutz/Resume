import {combineReducers} from 'redux';
import github from './githubreducer';
const rootReducer = combineReducers({
    github,
});
export default rootReducer;