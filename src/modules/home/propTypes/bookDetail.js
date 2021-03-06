import { number, shape, string, arrayOf, bool, oneOf } from 'prop-types'

export const book = shape({
  updatedAt: string,
  createdAt: string,
  title: string.isRequired,
  images: shape({
    small: string.isRequired,
    medium: string.isRequired,
    large: string.isRequired
  }),
  authors: arrayOf(string).isRequired,
  edition: string,
  featured: bool,
  status: oneOf(['RENTED', 'AVAILABLE', 'SOLD', 'UNAVAILABLE']),
  condition: oneOf([
    'Used – Acceptable',
    'Used – Good',
    'Used – Very Good',
    'Used – Like New',
    'New'
  ]),
  dimensions: shape({
    height: number.isRequired,
    length: number.isRequired,
    width: number.isRequired,
    weight: number.isRequired
  }),
  prices: shape({
    buy: number,
    sell: number,
    rent: number
  }).isRequired
})
