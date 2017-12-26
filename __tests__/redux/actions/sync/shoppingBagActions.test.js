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
  const item = { title: 'Star Wars', id: '987' }
  const shoppingBagItem = new ShoppingBagItem(item, RENT)

  it('should only accept ShoppingBagItem objects', () => {
    expect(() => {
      const action = add('INVALID VALUE')
      expect(action).toEqual(undefined)
    }).toThrow('Use add with a ShoppingBagItem object')
  })

  it('should wrap book into ShoppingBagItem during removing', () => {
    const expectedAction = { type: REMOVE_FROM_SHOPPING_BAG, item: shoppingBagItem }
    const action = remove(item)
    expect(action).toEqual(expectedAction)
  })

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
    const expectedAction = { type: ADD_TO_SHOPPING_BAG, item: new ShoppingBagItem(item, RENT) }
    const action = add(new ShoppingBagItem(item, RENT))
    expect(action).toEqual(expectedAction)
  })

  it('should create an action to remove from shopping cart', async () => {
    const expectedAction = { type: REMOVE_FROM_SHOPPING_BAG, item: shoppingBagItem }
    const action = remove(shoppingBagItem)
    expect(action).toEqual(expectedAction)
  })
})
