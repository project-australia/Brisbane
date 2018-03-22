import Axios from 'axios'
import { Address } from '../../domain/Address'
import { User } from '../../domain/User'

const SIGNUP_ERROR_MESSAGE =
  'Something wrong has happened on your sign up, please try it again in a few minutes'
const SIGNUP_BAD_REQUEST_MESSAGE = 'Please Check your form inputs'

export const wakeUpBackEnd = () => Axios.get('/health').catch(console.warn)
export const requestWithdraw = (userId, wallet) =>
  Axios.put(`/users/${userId}/profile`, wallet).catch(handleError)
export const signUpUser = async signUpForm =>
  Axios.post('/users', signUpForm)
    .then(mapToUserProfile)
    .catch(handleError)
export const getUserProfile = async userId =>
  Axios.get(`/users/${userId}/profile`)
    .then(mapToUserProfile)
    .catch(handleError)
export const putUserProfile = async (id, profile) =>
  Axios.put(`/users/${id}/profile`, profile)
    .then(mapToUserProfile)
    .catch(handleError)

const handleError = err => {
  if (!err.response) {
    throw new Error(SIGNUP_ERROR_MESSAGE)
  }

  const { data, status } = err.response

  if (status === 400) {
    throw new Error(SIGNUP_BAD_REQUEST_MESSAGE)
  }

  throw new Error(data)
}

const mapToUserProfile = response => {
  const {
    id,
    referredBy,
    name,
    email,
    birthDate,
    telephone,
    school,
    referId,
    club,
    role,
    address,
    wallet
  } = response.data

  return new User(
    id,
    referredBy,
    name,
    email,
    birthDate,
    telephone,
    school,
    referId,
    club,
    role,
    new Address(
      address.street,
      address.city,
      address.number,
      address.zipCode,
      address.state
    ),
    wallet
  )
}
