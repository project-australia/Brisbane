import { SHOPPING_BAG_TYPES } from '../../domain/ShoppingBagItem'
const { BUY, RENT, SELL } = SHOPPING_BAG_TYPES

export const buyingItems = ({ shoppingBag }) =>
  shoppingBag.filter(({ type }) => type === BUY || type === RENT)

export const sellingItems = ({ shoppingBag }) =>
  shoppingBag.filter(({ type }) => type === SELL)

export const shoppingBagBuyingTotal = state => {
  const booksToBuy = buyingItems(state)

  return booksToBuy.reduce((total, item) => {
    if (item.type === BUY) {
      return total + item.book.prices.buy
    }

    if (item.type === RENT) {
      return total + item.book.prices.rent
    }
  }, 0)
}

export const shoppingBagSellingTotal = state => {
  const booksToSell = sellingItems(state)
  const sellTotal = booksToSell.reduce((total, item) => {
    return total + item.book.prices.sell
  }, 0)
  return Number(sellTotal.toFixed(2))
}

export const shoppingBagSellingQuantityBooks = state => {
  const booksToSell = sellingItems(state)
  const sellQuantity = booksToSell.length
  return Number(sellQuantity)
}

export const calculateTotalWeight = bookList =>
  bookList.reduce((acc, item) => acc + item.book.dimensions.weight, 0)
