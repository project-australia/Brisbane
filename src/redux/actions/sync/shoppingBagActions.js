import {
  ADD_TO_SHOPPING_BAG,
  REMOVE_FROM_SHOPPING_BAG
} from '../../types/shoppingBagTypes'

export const add = item => ({ type: ADD_TO_SHOPPING_BAG, item })
export const remove = item => ({ type: REMOVE_FROM_SHOPPING_BAG, item })
