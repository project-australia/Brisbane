import _ from 'lodash'
import { SHOPPING_BAG_TYPES } from '../../../domain/ShoppingBagItem'
const sameItem = item => element => element.equals(item)
const hasBookType = type => element => element.type === SHOPPING_BAG_TYPES[type]

export const removeShoppingBagItem = (state, { item }) =>
  _.reject(state, sameItem(item))

export const removeAllItemsFromType = (state, { bookType }) => _.reject(state, hasBookType(bookType))

export const addShoppingBagItem = (state, { item }) => {
  const items = _.cloneDeep(state)
  const elementExists = items.find(sameItem(item))

  if (!elementExists) {
    items.push(item)
  }

  return items
}
