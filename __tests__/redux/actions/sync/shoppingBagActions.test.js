import {
  addToShoppingBag,
  buyBook,
  rentBook,
  removeFromShoppingBag,
  removeAllFromShoppingBag
} from '../../../../src/redux/actions/sync/shoppingBagActions'
import {
  ADD_TO_SHOPPING_BAG,
  REMOVE_FROM_SHOPPING_BAG,
  REMOVE_ALL_ITEMS_FOR_TYPE
} from '../../../../src/redux/types/shoppingBagTypes'
import {
  SHOPPING_BAG_TYPES,
  ShoppingBagItem
} from '../../../../src/domain/ShoppingBagItem'

const { BUY, RENT } = SHOPPING_BAG_TYPES

describe('Shopping bag sync actions', () => {
  const item = { title: 'Star Wars', id: '987' }
  const shoppingBagItem = new ShoppingBagItem(item, 'RENT')

  describe('add items into shopping bag', () => {
    it('should only accept ShoppingBagItem objects', () => {
      expect(() => {
        const action = addToShoppingBag('INVALID VALUE')
        expect(action).toEqual(undefined)
      }).toThrow('Use addToShoppingBag with a ShoppingBagItem object')
    })

    it('should create an action to buyBook an item', async () => {
      const expectedAction = {
        type: ADD_TO_SHOPPING_BAG,
        item: new ShoppingBagItem(item, BUY)
      }
      const action = buyBook(item)
      expect(action).toEqual(expectedAction)
    })

    it('should create an action to rentBook an item', async () => {
      const expectedAction = {
        type: ADD_TO_SHOPPING_BAG,
        item: new ShoppingBagItem(item, RENT)
      }
      const action = rentBook(item)
      expect(action).toEqual(expectedAction)
    })

    it('should create an action to addToShoppingBag to shopping cart', async () => {
      const expectedAction = {
        type: ADD_TO_SHOPPING_BAG,
        item: new ShoppingBagItem(item, RENT)
      }
      const action = addToShoppingBag(new ShoppingBagItem(item, RENT))
      expect(action).toEqual(expectedAction)
    })
  })

  describe('remove items from shopping bag', () => {
    it('should create and action to remove all books from shopping bag for a given type', () => {
      const expectedAction = {
        type: REMOVE_ALL_ITEMS_FOR_TYPE,
        bookType: 'BUY'
      }

      const action = removeAllFromShoppingBag(BUY)
      expect(action).toEqual(expectedAction)
    })

    it('should validate shopping bag type during creating action', () => {
      const expectedAction = undefined

      expect(() => {
        const action = removeAllFromShoppingBag('INVALID_TYPE')
        expect(action).toEqual(expectedAction)
      }).toThrow('Invalid Shopping Bag Type')
    })

    it('should create an action to removeFromShoppingBag from shopping cart', async () => {
      const expectedAction = {
        type: REMOVE_FROM_SHOPPING_BAG,
        item: shoppingBagItem
      }
      const action = removeFromShoppingBag(shoppingBagItem)
      expect(action).toEqual(expectedAction)
    })

    it('should wrap book into ShoppingBagItem during removing', () => {
      const expectedAction = {
        type: REMOVE_FROM_SHOPPING_BAG,
        item: shoppingBagItem
      }

      const action = removeFromShoppingBag(item, RENT)
      expect(action).toEqual(expectedAction)
    })
  })
})
