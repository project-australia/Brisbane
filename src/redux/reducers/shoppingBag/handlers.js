import { reject, cloneDeep } from 'lodash'
import { SHOPPING_BAG_TYPES } from '../../../domain/ShoppingBagItem'
import { EMPTY_SHOPPING_BAG } from './constants'
const sameItem = item => element => element.equals(item)
const hasBookType = type => element => element.type === SHOPPING_BAG_TYPES[type]

export const cleanShoppingBag = (state, action) => EMPTY_SHOPPING_BAG
export const removeShoppingBagItem = (state, { item }) =>
  reject(state, sameItem(item))
export const removeAllItemsFromType = (state, { bookType }) =>
  reject(state, hasBookType(bookType))

export const addShoppingBagItem = (state, { item }) => {
  const items = cloneDeep(state)
  const elementExists = items.find(sameItem(item))

  if (!elementExists) {
    items.push(item)
  }

  return items
}
