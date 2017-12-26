import { SHOPPING_BAG_INITIAL_STATE } from './constants'
import {
  ADD_TO_SHOPPING_BAG,
  REMOVE_FROM_SHOPPING_BAG
} from '../../types'
import {
  addItem,
  removeItem
} from './handlers'

const actionHandlers = {
  [ADD_TO_SHOPPING_BAG]: addItem,
  [REMOVE_FROM_SHOPPING_BAG]: removeItem
}

export const shoppingBagReducerConfig = {
  initialState: SHOPPING_BAG_INITIAL_STATE,
  actionHandlers: actionHandlers
}
