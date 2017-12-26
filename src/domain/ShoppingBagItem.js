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

  is (anotherItem) {
    return this.item.title === anotherItem.item.title
  }
}
