import { shape, string } from 'prop-types'

export const book = shape({
  id: string.isRequired,
  imageUri: string.isRequired,
  title: string.isRequired,
  author: string.isRequired,
  edition: string.isRequired
})
