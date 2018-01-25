import Axios from 'axios'
import { Address } from '../../domain/Address'
import { User } from '../../domain/User'

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

  const
    { city,
      street,
      number,
      zipCode,
      state } = address

  const userAddress = new Address(
    street,
    city,
    number,
    zipCode,
    state
  )

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
    userAddress)
}

export const signUpUser = async (signUpForm) => {
  try {
    const response = await Axios.post('/users', signUpForm)
    return createUserFromBackEndResponse(response)
  } catch (err) {
    if (err.response) {
      const { status, data } = err.response
      throw new Error({ status, data })
    }

    throw err
  }
}

// TODO: Lack testing
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
      address
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
      )
    )
  } catch (err) {
    if (err.response) {
      const { status, data } = err.response
      throw new Error({ status, data })
    }

    throw err
  }
}
