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

  const item = new ShoppingBagItem(starWars, SHOPPING_BAG_TYPES.BUY)

  const anotherItem = new ShoppingBagItem(startTrek, SHOPPING_BAG_TYPES.RENT)

  it('should initial state be an empty shopping bag', async () => {
    const expectedInitialState = EMPTY_SHOPPING_BAG
    const state = shoppingBagReducer(undefined, 'ANY_ACTION_I_DO_NOT_CARE')
    expect(state).toEqual(expectedInitialState)
  })

  it('should not increase item quantity during adding existing item to shopping bag', () => {
    const initialState = [item]
    const state = shoppingBagReducer(initialState, addToShoppingBag(item))
    expect(state).toEqual(state)
  })

  it('should addToShoppingBag items to shopping bag', async () => {
    const firstState = [item]
    const secondState = [item, anotherItem]

    let state = shoppingBagReducer(
      SHOPPING_BAG_INITIAL_STATE,
      addToShoppingBag(item)
    )
    expect(state).toEqual(firstState)

    state = shoppingBagReducer(state, addToShoppingBag(anotherItem))
    expect(state).toEqual(secondState)
  })

  it('should removeFromShoppingBag an item from shopping bag', async () => {
    const initialState = [item, anotherItem]
    const firstState = [anotherItem]
    const secondState = EMPTY_SHOPPING_BAG

    let state = shoppingBagReducer(initialState, removeFromShoppingBag(item))
    expect(state).toEqual(firstState)

    state = shoppingBagReducer(state, removeFromShoppingBag(anotherItem))
    expect(state).toEqual(secondState)
  })
})
