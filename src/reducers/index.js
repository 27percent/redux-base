import merge from 'lodash/merge'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import sidebar from './sidebar';

const rootReducer = combineReducers({
  sidebar,
  routing: routerReducer
})

export default rootReducer;
