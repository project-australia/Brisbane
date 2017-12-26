import _ from 'lodash'
const sameItem = item => element => element.equals(item)

export const addItem = (state, { item }) => {
  const items = _.cloneDeep(state)
  const existingItem = items.find(sameItem(item))

  if (existingItem) {
    existingItem.increaseQuantity()
  } else {
    items.push(item)
  }

  return items
}

export const removeItem = (state, { item }) => {
  const items = _.cloneDeep(state)
  const existingItem = items.find(sameItem(item))

  if (existingItem && existingItem.quantity > 1) {
    existingItem.decreaseQuantity()
    return items
  } else {
    return _.reject(state, sameItem(item))
  }
}
