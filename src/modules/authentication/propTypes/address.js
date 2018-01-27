import { string, shape } from 'prop-types'

export const AddressPropTypes = shape({
  city: string.isRequired,
  street: string.isRequired,
  number: string.isRequired,
  zipCode: string.isRequired,
  state: string.isRequired
})

export const EmptyAddressPropTypes = shape({
  city: string.isRequired,
  street: string.isRequired,
  number: string.isRequired,
  zipCode: string.isRequired,
  state: string.isRequired
})
