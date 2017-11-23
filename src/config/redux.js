import { applyMiddleware, createStore as create } from 'redux'
import { rootReducer } from '../redux/reducers'
import thunk from 'redux-thunk'

const initialState = {}

export const createStore = () => {
  return create(rootReducer, initialState, applyMiddleware(thunk))
}
