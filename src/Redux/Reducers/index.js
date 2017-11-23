import { combineReducers } from 'redux'
import AuthReducers from './AuthReducers'

const reducers = {
  auth: AuthReducers
}

export const rootReducer = combineReducers(reducers)
