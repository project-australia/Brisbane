import {combineReducers} from 'redux'
import {authReducers} from './authReducers'

const reducers = {
  auth: authReducers
}

export const rootReducer = combineReducers(reducers)
