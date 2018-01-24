import axios from 'axios'
import { signUpUser } from '../../src/services/backend/userService'
import userSignedUp from '../fixtures/userSignedUp'

jest.mock('axios', () => ({
  post: jest.fn()
}))

const email = 'email@dot.com'
const password = 'pwd'

const form = {
  email,
  password,
  name: 'talhate',
  referredBy: 'DUDUZINHO',
  referId: 'HEBERT_BOLADO',
  birthDate: '2017-12-27T17:00:04.376Z',
  telephone: '1234567890',
  school: 'school of life',
  address: {
    city: 'viana',
    street: 'fighter',
    number: '666',
    zipCode: 'zip',
    state: 'es'
  }
}

const responseMock = {
  data: userSignedUp
}

describe('Backend User Service', () => {
  it('should sign up a user', async () => {
    axios.post.mockReturnValue(Promise.resolve(responseMock))
    const newUser = await signUpUser(form)

    userSignedUp.birthDate = new Date(userSignedUp.birthDate) // ergh... gambeta
    expect(newUser).toMatchObject(userSignedUp)
  })
})
