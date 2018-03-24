import { number, shape, string, arrayOf, bool, oneOf } from 'prop-types'

export const book = shape({
  updatedAt: string,
  createdAt: string,
  title: string.isRequired,
  images: shape({
    small: string.isRequired,
    medium: string.isRequired,
    large: string.isRequired
  }).isRequired,
  authors: arrayOf(string).isRequired,
  edition: string,
  id: string.isRequired,
  featured: bool,
  status: oneOf(['RENTED', 'AVAILABLE', 'SOLD', 'UNAVAILABLE']),
  condition: oneOf([
    'Used – Acceptable',
    'Used – Good',
    'Used – Very Good',
    'Used – Like New',
    'New'
  ]), // TODO: This must be rewuired
  dimensions: shape({
    height: number.isRequired,
    length: number.isRequired,
    width: number.isRequired,
    weight: number.isRequired
  }).isRequired,
  prices: shape({
    sell: number,
    buy: number,
    rent: number
  }).isRequired
})
