import { number, shape, string, arrayOf } from 'prop-types'

// FIXME: This representation is not right
export const book = shape({
  id: string.isRequired,
  images: arrayOf.isRequired,
  title: string.isRequired,
  authors: arrayOf.isRequired,
  edition: string,
  aboutBook: string,
  sellPrice: number
})
