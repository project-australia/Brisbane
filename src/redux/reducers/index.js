import Maybe from 'data.maybe'
import { combineReducers } from 'redux'

import { authReducerConfig } from './authReducers'
import { navigationReducer } from './reactNavigation'

export const reducers = {
  auth: createReducer(authReducerConfig),
  nav: navigationReducer
}

export const rootReducer = combineReducers(reducers)

function createReducer (reducerConfig) {
  const { actionHandlers, initialState } = reducerConfig
  return (state, action) =>
    Maybe
      .fromNullable(actionHandlers[action.type])
      .map(handler => handler(state, action))
      .getOrElse(initialState)
}
