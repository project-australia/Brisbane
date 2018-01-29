import * as FirebaseService from '../../../../src/services/firebase/authentication'
import {
  alertAction,
  updateUserProfile,
  successRetrievedPassword
} from '../../../../src/redux/actions/sync/authenticationActions'
import * as UserService from '../../../../src/services/backend/userService'

import {
  forgotPasswordAction,
  signInAction,
  signUpAction
} from '../../../../src/redux/actions/async/authenticationAsyncActions'
import { FORGOT_PASSWORD_SUCCESS_MSG } from '../../../../src/constants/messages'
import { userProfile } from '../../../fixtures/userProfile'
jest.mock('../../../../src/services/firebase/authentication')
jest.mock('../../../../src/services/backend/userService')

describe('Auth async actions', () => {
  const mockDispatch = jest.fn()
  const email = 'fireBaseUser@email.com'
  const password = '123456'
  const fireBaseUser = {
    uid: 'UID',
    emailVerified: false,
    phoneNumber: '123-456-7890',
    email
  }

  beforeEach(() => {
    mockDispatch.mockClear()
    FirebaseService.sendPasswordResetEmail = jest.fn(() => Promise.resolve())
    FirebaseService.signInWithEmailAndPassword = jest.fn(() =>
      Promise.resolve(fireBaseUser)
    )
    FirebaseService.createUserWithEmailAndPassword = jest.fn(() =>
      Promise.resolve(fireBaseUser)
    )
    UserService.signUpUser = jest.fn(() => Promise.resolve(userProfile))
    UserService.getUserProfile = jest.fn(() => Promise.resolve(userProfile))
  })

  it('Should handle any exception as a failure action', async () => {
    const message = 'Error Message'
    FirebaseService.sendPasswordResetEmail = jest.fn(() =>
      Promise.reject(new Error(message))
    )

    const expectedAction = alertAction({ message })
    const thunk = forgotPasswordAction(email)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })

  // TODO: Decidir o fluxo de sign up primeiro,
  xit('Should dispatch successfull signup action', async () => {
    const expectedAction = updateUserProfile(userProfile)
    const thunk = signUpAction(email, password)
    await thunk(mockDispatch)

    expect(FirebaseService.signInWithEmailAndPassword).toHaveBeenCalledWith(
      email,
      password
    )
    expect(UserService.getUserProfile).toHaveBeenCalledWith(fireBaseUser.uid)
    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })

  it('Should dispatch successfull signin action', async () => {
    const expectedAction = updateUserProfile(userProfile)
    const thunk = signInAction(email, password)
    await thunk(mockDispatch)

    expect(FirebaseService.signInWithEmailAndPassword).toHaveBeenCalledWith(
      email,
      password
    )
    expect(UserService.getUserProfile).toHaveBeenCalledWith(fireBaseUser.uid)
    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })

  it('Should dispatch successfull forgot password action', async () => {
    const expectedAction = successRetrievedPassword(FORGOT_PASSWORD_SUCCESS_MSG)
    const thunk = forgotPasswordAction(email)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })
})
