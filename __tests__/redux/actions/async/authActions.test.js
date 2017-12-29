import * as FirebaseService from '../../../../src/services/firebase/authentication'
import {
  alertAction,
  signInSuccess,
  signUpSuccess,
  successRetrievedPassword
} from '../../../../src/redux/actions/sync/authenticationActions'
import {
  forgotPasswordAction,
  signInAction,
  signUpAction
} from '../../../../src/redux/actions/async/authenticationAsyncActions'
import { FORGOT_PASSWORD_SUCCESS_MSG } from '../../../../src/constants/messages'
jest.mock('../../../../src/services/firebase/authentication')

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

  // TODO: After finish backend service I'll handle this
  xit('Should dispatch successfull signup action', async () => {
    FirebaseService.createUserWithEmailAndPassword = jest.fn(() =>
      Promise.resolve()
    )

    const expectedAction = signUpSuccess()
    const thunk = signUpAction(email, password)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })

  // TODO: After finish backend service I'll handle this
  xit('Should dispatch successfull signin action', async () => {
    FirebaseService.signInWithEmailAndPassword = jest.fn(() =>
      Promise.resolve(fireBaseUser)
    )

    const expectedAction = signInSuccess(fireBaseUser)
    const thunk = signInAction(email, password)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })

  it('Should dispatch successfull forgot password action', async () => {
    FirebaseService.sendPasswordResetEmail = jest.fn(() => Promise.resolve())

    const expectedAction = successRetrievedPassword(FORGOT_PASSWORD_SUCCESS_MSG)
    const thunk = forgotPasswordAction(email)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })
})
