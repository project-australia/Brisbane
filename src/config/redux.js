import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { applyMiddleware, createStore as create } from 'redux'

import { rootReducer } from '../redux/reducers'

const removeNavField = state => {
  const { nav, ...rest } = state
  return rest
}

const logger = createLogger({
  duration: true,
  collapsed: true,
  stateTransformer: removeNavField
})

export const createStore = () => {
  return create(rootReducer, applyMiddleware(thunk, logger))
}
