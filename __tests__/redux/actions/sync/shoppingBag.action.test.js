import {
  add,
  remove
} from '../../../../src/redux/actions/sync/shoppingBag.action'
import {
  ADD_TO_SHOPPING_BAG,
  REMOVE_FROM_SHOPPING_BAG
} from '../../../../src/redux/types/shoppingBag.type'

describe('Auth sync actions', () => {
  const item = { title: 'Star Wars' }

  it('Should create an action to add to shopping cart', async () => {
    const expectedAction = { type: ADD_TO_SHOPPING_BAG, item }
    const action = add(item)
    expect(action).toEqual(expectedAction)
  })

  it('Should create an action to remove from shopping cart', async () => {
    const expectedAction = { type: REMOVE_FROM_SHOPPING_BAG, item }
    const action = remove(item)
    expect(action).toEqual(expectedAction)
  })
})
