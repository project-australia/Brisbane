import { number, shape, string } from 'prop-types'

// FIXME: This representation is not right
export const book = shape({
  id: string.isRequired,
  imageUri: string.isRequired,
  title: string.isRequired,
  author: string.isRequired,
  edition: string.isRequired,
  aboutBook: string,
  sellPrice: number
})
