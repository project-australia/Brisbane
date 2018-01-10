import { shape, oneOf, number, string } from 'prop-types'
import { book } from '../../home/propTypes/book'

export const ShoppingBagItemPropType = shape({
  id: string.isRequired,
  book: book.isRequired,
  quantity: number.isRequired,
  type: oneOf(['BUY', 'RENT', 'SELL', 'DONATE']).isRequired
})
