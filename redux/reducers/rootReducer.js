import filterReducer from './filterReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    filter: filterReducer
});

export default rootReducer;