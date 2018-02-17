import { SHOPPING_BAG_TYPES } from '../../domain/ShoppingBagItem'

export const shoppingBagBuyingTotal = state => {
  const booksToBuy = state.shoppingBag.filter(
    item => item.type === SHOPPING_BAG_TYPES.BUY
  )

  return booksToBuy.reduce((total, item) => {
    return total + item.book.price.buy
  }, 0)
}

export const calculateTotalWeight = bookList =>
  bookList.reduce((acc, item) => acc + item.book.dimensions.weight, 0)
