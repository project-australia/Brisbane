import {
  add,
  buy,
  rent,
  remove
} from '../../../../src/redux/actions/sync/shoppingBagActions'
import {
  ADD_TO_SHOPPING_BAG,
  REMOVE_FROM_SHOPPING_BAG
} from '../../../../src/redux/types/shoppingBagTypes'
import {
  SHOPPING_BAG_TYPES,
  ShoppingBagItem
} from '../../../../src/domain/ShoppingBagItem'

const { BUY, RENT } = SHOPPING_BAG_TYPES

describe('Shopping bag sync actions', () => {
  const item = { title: 'Star Wars' }

  it('should create an action to buy an item', async () => {
    const expectedAction = {
      type: ADD_TO_SHOPPING_BAG,
      item: new ShoppingBagItem(item, BUY)
    }
    const action = buy(item)
    expect(action).toEqual(expectedAction)
  })

  it('should create an action to rent an item', async () => {
    const expectedAction = {
      type: ADD_TO_SHOPPING_BAG,
      item: new ShoppingBagItem(item, RENT)
    }
    const action = rent(item)
    expect(action).toEqual(expectedAction)
  })

  it('should create an action to add to shopping cart', async () => {
    const expectedAction = { type: ADD_TO_SHOPPING_BAG, item }
    const action = add(item)
    expect(action).toEqual(expectedAction)
  })

  it('should create an action to remove from shopping cart', async () => {
    const expectedAction = { type: REMOVE_FROM_SHOPPING_BAG, item }
    const action = remove(item)
    expect(action).toEqual(expectedAction)
  })
})
