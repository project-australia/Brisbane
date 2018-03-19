import {
  ADD_TO_SHOPPING_BAG,
  REMOVE_ALL_ITEMS_FOR_TYPE,
  REMOVE_FROM_SHOPPING_BAG,
  CLEAN_SHOPPING_BAG
} from '../../types/shoppingBagTypes'
import {
  SHOPPING_BAG_TYPES,
  ShoppingBagItem
} from '../../../domain/ShoppingBagItem'
const { BUY, RENT, SELL } = SHOPPING_BAG_TYPES

export const cleanWholeShoppingBag = () => ({ type: CLEAN_SHOPPING_BAG })
export const buyBook = book => addToShoppingBag(new ShoppingBagItem(book, BUY))
export const rentBook = book =>
  addToShoppingBag(new ShoppingBagItem(book, RENT))
export const sellBook = book =>
  addToShoppingBag(new ShoppingBagItem(book, SELL))

export const addToShoppingBag = item => {
  if (!(item instanceof ShoppingBagItem)) {
    throw new Error('Use addToShoppingBag with a ShoppingBagItem object')
  }

  return { type: ADD_TO_SHOPPING_BAG, item }
}

export const removeFromShoppingBag = (item, type) => {
  if (item instanceof ShoppingBagItem) {
    return { type: REMOVE_FROM_SHOPPING_BAG, item }
  } else {
    return {
      type: REMOVE_FROM_SHOPPING_BAG,
      item: new ShoppingBagItem(item, type)
    }
  }
}

export const removeAllFromShoppingBag = type => {
  const desiredType = SHOPPING_BAG_TYPES[type]

  if (!desiredType) {
    throw new Error('Invalid Shopping Bag Type')
  }

  return {
    type: REMOVE_ALL_ITEMS_FOR_TYPE,
    bookType: desiredType
  }
}
