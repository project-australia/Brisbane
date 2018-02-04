import _ from 'lodash'
const sameItem = item => element => element.equals(item)

export const addShoppingBagItem = (state, { item }) => {
  const items = _.cloneDeep(state)
  const existingItem = items.find(sameItem(item))

  if (existingItem) {
    existingItem.increaseQuantity()
  } else {
    items.push(item)
  }

  return items
}

export const removeShoppingBagItem = (state, { item }) => {
  const items = _.cloneDeep(state)
  const existingItem = items.find(sameItem(item))

  if (existingItem && existingItem.quantity > 1) {
    existingItem.decreaseQuantity()
    return items
  } else {
    return _.reject(state, sameItem(item))
  }
}
