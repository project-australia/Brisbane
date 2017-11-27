import { combineReducers } from 'redux'

import { authReducerConfig } from './authentication'
import { navigationReducer } from './nav'
import { createReducer } from './functionalReducer'

export const reducers = {
  authentication: createReducer(authReducerConfig),
  nav: navigationReducer
}

export const rootReducer = combineReducers(reducers)
