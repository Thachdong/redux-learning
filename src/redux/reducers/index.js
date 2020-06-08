import {combineReducers} from 'redux'

import todos from './todoReducer'
import filter from './filterreducer'
import users from './userReducer'
import posts from './postReducer'

export default combineReducers({
  todos,
  filter,
  users,
  posts
})