import { SHOPPING_BAG_INITIAL_STATE } from './constants'
import { ADD_TO_SHOPPING_BAG, REMOVE_FROM_SHOPPING_BAG } from '../../types'
import { addShoppingBagItem, removeShoppingBagItem } from './handlers'

const actionHandlers = {
  [ADD_TO_SHOPPING_BAG]: addShoppingBagItem,
  [REMOVE_FROM_SHOPPING_BAG]: removeShoppingBagItem
}

export const shoppingBagReducerConfig = {
  initialState: SHOPPING_BAG_INITIAL_STATE,
  actionHandlers: actionHandlers
}
