import { shape, oneOf, string } from 'prop-types'
import { book } from '../../home/propTypes/book'

export const ShoppingBagItemPropType = shape({
  id: string.isRequired,
  book: book.isRequired,
  type: oneOf(['BUY', 'RENT', 'SELL', 'DONATE']).isRequired
})
