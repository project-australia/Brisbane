import {
  ADD_TO_SHOPPING_BAG,
  REMOVE_FROM_SHOPPING_BAG
} from '../../types/shoppingBagTypes'
import {
  SHOPPING_BAG_TYPES,
  ShoppingBagItem
} from '../../../domain/ShoppingBagItem'
const { BUY, RENT } = SHOPPING_BAG_TYPES

export const buy = item => add(new ShoppingBagItem(item, BUY))
export const rent = item => add(new ShoppingBagItem(item, RENT))

export const add = item => {
  if (item instanceof ShoppingBagItem) {
    return { type: ADD_TO_SHOPPING_BAG, item }
  }

  throw new Error('Use add with a ShoppingBagItem object')
}

export const remove = item => {
  const action = { type: REMOVE_FROM_SHOPPING_BAG, item }

  if (!(item instanceof ShoppingBagItem)) {
    action.item = new ShoppingBagItem(item, RENT)
  }

  return action
}
