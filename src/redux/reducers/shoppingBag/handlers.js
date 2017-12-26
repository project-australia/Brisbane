export const addItem = (state, { item }) => {
  const items = [...state]
  items.push(item)
  return items
}

export const removeItem = (state, { item }) => state.filter(element => element !== item)
