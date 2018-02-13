import { removeAllFromShoppingBag } from '../../../src/redux/actions'
import {
  addToShoppingBag,
  removeFromShoppingBag
} from '../../../src/redux/actions/sync/shoppingBagActions'
import { reducers } from '../../../src/redux/reducers'
import {
  EMPTY_SHOPPING_BAG,
  SHOPPING_BAG_INITIAL_STATE
} from '../../../src/redux/reducers/shoppingBag/constants'
import {
  SHOPPING_BAG_TYPES,
  ShoppingBagItem
} from '../../../src/domain/ShoppingBagItem'

const shoppingBagReducer = reducers.shoppingBag

describe('Shopping bag reducer', () => {
  const starWars = { title: 'Star Wars', id: '1' }
  const startTrek = { title: 'Star Trek', id: '2' }

  const buyingItem = new ShoppingBagItem(starWars, SHOPPING_BAG_TYPES.BUY)
  const anotherBuyingItem = new ShoppingBagItem(
    startTrek,
    SHOPPING_BAG_TYPES.BUY
  )
  const rentingItem = new ShoppingBagItem(startTrek, SHOPPING_BAG_TYPES.RENT)

  it('should initial state be an empty shopping bag', async () => {
    const expectedInitialState = EMPTY_SHOPPING_BAG
    const state = shoppingBagReducer(undefined, 'ANY_ACTION_I_DO_NOT_CARE')
    expect(state).toEqual(expectedInitialState)
  })

  describe('add items into shopping bag', () => {
    it('should not increase buyingItem quantity during adding existing buyingItem to shopping bag', () => {
      const initialState = [buyingItem]
      const state = shoppingBagReducer(
        initialState,
        addToShoppingBag(buyingItem)
      )
      expect(state).toEqual(state)
    })

    it('should addToShoppingBag items to shopping bag', async () => {
      const firstState = [buyingItem]
      const secondState = [buyingItem, rentingItem]

      let state = shoppingBagReducer(
        SHOPPING_BAG_INITIAL_STATE,
        addToShoppingBag(buyingItem)
      )
      expect(state).toEqual(firstState)

      state = shoppingBagReducer(state, addToShoppingBag(rentingItem))
      expect(state).toEqual(secondState)
    })
  })

  describe('remove items from shopping bag', () => {
    it('should removeFromShoppingBag an buyingItem from shopping bag', async () => {
      const initialState = [buyingItem, rentingItem]
      const firstState = [rentingItem]
      const secondState = EMPTY_SHOPPING_BAG

      let state = shoppingBagReducer(
        initialState,
        removeFromShoppingBag(buyingItem)
      )
      expect(state).toEqual(firstState)

      state = shoppingBagReducer(state, removeFromShoppingBag(rentingItem))
      expect(state).toEqual(secondState)
    })

    it('should remove all items from a type', () => {
      const expectedState = [rentingItem]
      const initialState = [buyingItem, anotherBuyingItem, rentingItem]
      const state = shoppingBagReducer(
        initialState,
        removeAllFromShoppingBag('BUY')
      )

      expect(state).toEqual(expectedState)
    })
  })
})
