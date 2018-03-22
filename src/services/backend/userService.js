import Axios from 'axios'
import { Address } from '../../domain/Address'
import { User } from '../../domain/User'

const SIGNUP_ERROR_MESSAGE =
  'Something wrong has happened on your sign up, please try it again in a few minutes'
const SIGNUP_BAD_REQUEST_MESSAGE = 'Please Check your form inputs'

export const signUpUser = async signUpForm => {
  try {
    const response = await Axios.post('/users', signUpForm)
    return mapToUserProfile(response)
  } catch (err) {
    handleError(err)
  }
}

export const getUserProfile = async userId => {
  try {
    const response = await Axios.get(`/users/${userId}/profile`)
    return mapToUserProfile(response)
  } catch (err) {
    handleError(err)
  }
}

export const putUserProfile = async (id, profile) =>
  Axios.put(`/users/${id}/profile`, profile)
    .then(mapToUserProfile)
    .catch(handleError)

export const wakeUpBackEnd = () => Axios.get('/health').catch(console.info)

export const requestWithdraw = (userId, walletPaypalAccount) =>
  Axios.put(`/users/${userId}/profile`, walletPaypalAccount).catch(err =>
    handleError(err)
  )

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
