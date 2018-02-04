import { number, shape, string, arrayOf, bool, oneOf } from 'prop-types'

export const book = shape({
  updatedAt: string,
  createdAt: string.isRequired,
  title: string.isRequired,
  images: shape({
    small: string.isRequired,
    medium: string.isRequired,
    large: string.isRequired,
  }),
  authors: arrayOf(string).isRequired,
  edition: string,
  id: string.isRequired,
  featured: bool,
  status: oneOf(['RENTED', 'AVAILABLE', 'SOLD', 'UNAVAILABLE']),
  bookCondition: oneOf(['Used – Acceptable', 'Used – Good', 'Used – Very Good', 'Used – Like New', 'New']),
  sellPrice: number,
  buyingPrice: number
})
