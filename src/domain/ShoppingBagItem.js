export const SHOPPING_BAG_TYPES = { BUY: 'BUY', RENT: 'RENT' }

export class ShoppingBagItem {
  constructor (book, type, quantity = 1) {
    this.item = book
    this.type = SHOPPING_BAG_TYPES[type]
    this.quantity = quantity

    if (!this.type) {
      throw new Error('Invalid Shopping bag item type')
    }
  }

  increaseQuantity () {
    this.quantity += 1
  }

  decreaseQuantity () {
    this.quantity -= 1
  }
}

ShoppingBagItem.prototype.equals = function (obj) {
  return this.item.title === obj.item.title && this.type === obj.type
}
