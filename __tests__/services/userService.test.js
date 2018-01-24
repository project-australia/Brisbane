import axios from 'axios'
import { signUpUser } from '../../src/services/backend/userService'
import { userSignUpForm } from '../fixtures/userService/requests/userSignUpRequest'
import userSignedUp from '../fixtures/userService/response/userSignedUp.json'

jest.mock('axios', () => ({
  post: jest.fn()
}))

const responseMock = { data: userSignedUp }

describe('Backend User Service', () => {
  it('should sign up a user', async () => {
    axios.post.mockReturnValue(Promise.resolve(responseMock))
    const newUser = await signUpUser(userSignUpForm)

    userSignedUp.birthDate = new Date(userSignedUp.birthDate) // ergh... gambeta
    expect(newUser).toMatchObject(userSignedUp)
  })
})
