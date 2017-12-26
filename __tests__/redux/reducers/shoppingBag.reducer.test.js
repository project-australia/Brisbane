import { add, remove } from '../../../src/redux/actions/sync/shoppingBagActions'
import { reducers } from '../../../src/redux/reducers'
import {
  EMPTY_SHOPPING_BAG,
  SHOPPING_BAG_INITIAL_STATE
} from '../../../src/redux/reducers/shoppingBag/constants'

const shoppingBagReducer = reducers.shoppingBag

describe('Shopping bag reducer', () => {
  const item = { title: 'Star Wars' }
  const anotherItem = { title: 'Star Trek' }

  it('should initial state be an empty shopping bag', async () => {
    const expectedInitialState = EMPTY_SHOPPING_BAG
    const state = shoppingBagReducer(undefined, 'ANY_ACTION_I_DO_NOT_CARE')
    expect(state).toEqual(expectedInitialState)
  })

  it('should add items to shopping bag', async () => {
    const firstState = [item]
    const secondState = [item, anotherItem]

    let state = shoppingBagReducer(SHOPPING_BAG_INITIAL_STATE, add(item))
    expect(state).toEqual(firstState)

    state = shoppingBagReducer(state, add(anotherItem))
    expect(state).toEqual(secondState)
  })

  it('should remove an item from shopping bag', async () => {
    const initialState = [item, anotherItem]
    const firstState = [anotherItem]
    const secondState = EMPTY_SHOPPING_BAG

    let state = shoppingBagReducer(initialState, remove(item))
    expect(state).toEqual(firstState)

    state = shoppingBagReducer(state, remove(anotherItem))
    expect(state).toEqual(secondState)
  })
})
