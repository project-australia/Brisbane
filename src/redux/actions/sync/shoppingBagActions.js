import {
  ADD_TO_SHOPPING_BAG,
  REMOVE_FROM_SHOPPING_BAG
} from '../../types/shoppingBagTypes'
import {
  SHOPPING_BAG_TYPES,
  ShoppingBagItem
} from '../../../domain/ShoppingBagItem'
const { BUY, RENT } = SHOPPING_BAG_TYPES

// TODO: Should add only ShoppingBagItem
export const add = item => ({ type: ADD_TO_SHOPPING_BAG, item })
// TODO: Should remove shoppingBagItem or book
export const remove = item => ({ type: REMOVE_FROM_SHOPPING_BAG, item })
export const buy = item => add(new ShoppingBagItem(item, BUY))
export const rent = item => add(new ShoppingBagItem(item, RENT))
