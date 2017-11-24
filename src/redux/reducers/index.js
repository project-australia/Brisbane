import {combineReducers} from 'redux'
import {authReducers} from './authReducers'
import {navigationReducer} from './reactNavigation'

const reducers = {
  auth: authReducers,
  nav: navigationReducer
}

export const rootReducer = combineReducers(reducers)
