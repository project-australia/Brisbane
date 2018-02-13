import { SHOPPING_BAG_INITIAL_STATE } from './constants'
import {
  ADD_TO_SHOPPING_BAG,
  REMOVE_ALL_ITEMS_FOR_TYPE,
  REMOVE_FROM_SHOPPING_BAG
} from '../../types'
import {
  addShoppingBagItem,
  removeShoppingBagItem,
  removeAllItemsFromType
} from './handlers'

const actionHandlers = {
  [ADD_TO_SHOPPING_BAG]: addShoppingBagItem,
  [REMOVE_FROM_SHOPPING_BAG]: removeShoppingBagItem,
  [REMOVE_ALL_ITEMS_FOR_TYPE]: removeAllItemsFromType
}

export const shoppingBagReducerConfig = {
  initialState: SHOPPING_BAG_INITIAL_STATE,
  actionHandlers: actionHandlers
}
