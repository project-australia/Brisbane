export const SHOPPING_BAG_TYPES = { BUY: 'BUY', RENT: 'RENT' }

export class ShoppingBagItem {
  constructor (item, type) {
    this.item = item
    this.type = SHOPPING_BAG_TYPES[type]
    this.quantity = 1

    if (!this.type) {
      throw new Error('Invalid Shopping bag item type')
    }
  }
}
