export const SHOPPING_BAG_TYPES = { BUY: 'BUY', RENT: 'RENT', SELL: 'SELL' }

export class ShoppingBagItem {
  constructor (book, type) {
    this.type = SHOPPING_BAG_TYPES[type]
    this.id = book.id
    this.book = book

    if (!this.type) {
      throw new Error('Invalid Shopping bag item type')
    }
  }
}

ShoppingBagItem.prototype.equals = function (obj) {
  return this.id === obj.id && this.type === obj.type
}
