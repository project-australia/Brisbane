import _ from 'lodash'
const sameItem = item => element => element.equals(item)

export const removeShoppingBagItem = (state, { item }) =>
  _.reject(state, sameItem(item))

export const addShoppingBagItem = (state, { item }) => {
  const items = _.cloneDeep(state)
  const elementExists = items.find(sameItem(item))

  if (!elementExists) {
    items.push(item)
  }

  return items
}

// TODO: Precisamos centralizar a logica de calcular total, essa nao é a maneira ideial,
// Assim que tiver tempo eu refatoro.
if (!Array.prototype.total) {
  // eslint-disable-next-line
  Array.prototype.total = function(type) {
    const priceField = {
      BUY: 'buyingPrice',
      SELL: 'sellingPrice'
    }

    return this.reduce((total, item) => {
      return total + item.book[priceField[type]]
    }, 0)
  }
}
