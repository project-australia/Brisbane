import { combineReducers } from 'redux'

import { authReducerConfig } from './authentication'
import { navigationReducer } from './nav'
import { createReducer } from './functionalReducer'
import { shoppingBagReducerConfig } from './shoppingBag'

export const reducers = {
  authentication: createReducer(authReducerConfig),
  shoppingBag: createReducer(shoppingBagReducerConfig),
  nav: navigationReducer
}

export const rootReducer = combineReducers(reducers)
