import { string, shape, oneOfType } from 'prop-types'
import { AddressPropTypes, EmptyAddressPropTypes } from './address'

const user = shape({
  id: string.isRequired,
  referId: string.isRequired,
  referredBy: string.isRequired,
  name: string.isRequired,
  email: string.isRequired,
  birthDate: string.isRequired,
  telephone: string.isRequired,
  school: string.isRequired,
  club: string.isRequired,
  role: string.isRequired,
  address: AddressPropTypes
})

const notLoggedInUser = shape({
  id: null,
  referId: null,
  referredBy: null,
  name: null,
  email: null,
  birthDate: null,
  telephone: null,
  school: null,
  club: null,
  role: null,
  address: EmptyAddressPropTypes
})

export const UserPropTypes = oneOfType([user, notLoggedInUser, null])
