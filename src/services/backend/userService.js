import Axios from 'axios'
import { Address } from '../../domain/Address'
import { User } from '../../domain/User'

const SIGNUP_ERROR_MESSAGE =
  'Something wrong has happened on your sign up, please try it again in a few minutes'
const SIGNUP_BAD_REQUEST_MESSAGE = 'Please Check your form inputs'

const createUserFromBackEndResponse = response => {
  const {
    id,
    referredBy,
    name,
    email,
    birthDate,
    telephone,
    school,
    referId,
    address,
    club,
    role
  } = response.data

  const { city, street, number, zipCode, state } = address

  const userAddress = new Address(street, city, number, zipCode, state)

  return new User(
    id,
    referredBy,
    name,
    email,
    new Date(birthDate),
    telephone,
    school,
    referId,
    club,
    role,
    userAddress
  )
}

export const signUpUser = async signUpForm => {
  try {
    const response = await Axios.post('/users', signUpForm)
    return createUserFromBackEndResponse(response)
  } catch (err) {
    if (!err.response) {
      throw new Error(SIGNUP_ERROR_MESSAGE)
    }

    const { data, status } = err.response

    if (status === 400) {
      throw new Error(SIGNUP_BAD_REQUEST_MESSAGE)
    }

    throw new Error(data)
  }
}

export const getUserProfile = async userId => {
  try {
    const response = await Axios.get(`/users/${userId}/profile`)
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
  } catch (err) {
    if (err.response) {
      const { status, data } = err.response
      throw new Error({ status, data })
    }

    throw err
  }
}

export const wakeUpBackEnd = () => Axios.get('/health').catch(console.info)

export const requestWithdraw = (userId, walletPaypalAccount) =>
  Axios.put(`/users/${userId}/profile`, walletPaypalAccount).catch(
    console.info
  )
