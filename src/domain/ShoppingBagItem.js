export const SHOPPING_BAG_TYPES = { BUY: 'BUY', RENT: 'RENT', SELL: 'SELL' }

export class ShoppingBagItem {
  constructor (book, type, quantity = 1) {
    this.type = SHOPPING_BAG_TYPES[type]
    this.id = book.id
    this.quantity = quantity
    this.book = book

    if (!this.type) {
      throw new Error('Invalid Shopping bag item type')
    }
  }

  increaseQuantity () {
    // TODO: REMOVE THIS BEHAVIOUR
  }

  decreaseQuantity () {
    // TODO: REMOVE THIS BEHAVIOUR
  }
}

ShoppingBagItem.prototype.equals = function (obj) {
  return this.id === obj.id && this.type === obj.type
}
