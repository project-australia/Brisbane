import {shape, string} from 'prop-types'

export const book = shape({
  id: string.isRequired,
  image: string.isRequired,
  title: string.isRequired,
  author: string.isRequired,
  edition: string.isRequired
})
