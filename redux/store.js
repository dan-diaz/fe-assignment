import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
  form: formReducer,
  filter: filterReducer
})
const store = configureStore({
  reducer,
}); 


export default store