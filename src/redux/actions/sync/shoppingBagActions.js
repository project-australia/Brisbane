import {
  ADD_TO_SHOPPING_BAG,
  REMOVE_FROM_SHOPPING_BAG
} from '../../types/shoppingBagTypes'
import {
  SHOPPING_BAG_TYPES,
  ShoppingBagItem
} from '../../../domain/ShoppingBagItem'
const { BUY, RENT, SELL } = SHOPPING_BAG_TYPES

export const buyBook = book => addToShoppingBag(new ShoppingBagItem(book, BUY))
export const rentBook = book => addToShoppingBag(new ShoppingBagItem(book, RENT))
export const sellBook = book => addToShoppingBag(new ShoppingBagItem(book, SELL))

export const addToShoppingBag = item => {
  if (item instanceof ShoppingBagItem) {
    return { type: ADD_TO_SHOPPING_BAG, item }
  }

  throw new Error('Use addToShoppingBag with a ShoppingBagItem object')
}

export const removeFromShoppingBag = item => {
  const action = { type: REMOVE_FROM_SHOPPING_BAG, item }

  if (!(item instanceof ShoppingBagItem)) {
    action.item = new ShoppingBagItem(item, RENT)
  }

  return action
}
