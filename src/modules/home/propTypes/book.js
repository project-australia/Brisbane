import { number, shape, string, arrayOf, bool, oneOf } from 'prop-types'

export const book = shape({
  updatedAt: string.isRequired,
  createdAt: string.isRequired,
  title: string.isRequired,
  images: shape({
    small: string.isRequired,
    medium: string.isRequired,
    large: string.isRequired,
  }),
  authors: arrayOf(string).isRequired,
  id: string.isRequired,
  featured: bool,
  status: oneOf(['UNAVAILABLE'])
})
